// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "aerodrome-finance/contracts/interfaces/IVotingEscrow.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "solady/tokens/ERC721.sol";
import "solady/auth/OwnableRoles.sol";
import {LibBitmap} from "solady/utils/LibBitmap.sol";
import "./IYolo.sol";
import "./metadata/IMetaDataURI.sol";
import "./IVeVaultLock.sol";

contract VeVaultStake is OwnableRoles, ERC721, IVeVaultLock {
    using LibBitmap for LibBitmap.Bitmap;

    struct MaxValueNode {
        uint256 value;
        uint256 next;
    }

    mapping(uint256 => Lock) private _lockedTokenIdToLock;
    mapping(uint256 => MaxValueNode) private _maxValueNodes;
    uint256 private _maxValueHead;
    uint256 private _maxValueNodeCounter;

    IVotingEscrow private _veNFT;
    IYolo private _yolo;

    address private _renderer;
    uint256 private _tokenIdCounter;

    uint256 public metadataUpdateRole = _ROLE_0;

    uint256 private _veNftProtocolTokenId;

    uint256 internal constant WEEK = 1 weeks;
    uint256 internal constant MAXTIME = 4 * 365 * 86400;

    constructor(address veNFTAddress, address yoloAddress, address renderer) {
        _veNFT = IVotingEscrow(veNFTAddress);
        _yolo = IYolo(yoloAddress);
        _renderer = renderer;
        _initializeOwner(msg.sender);
    }

    function name() public pure override returns (string memory) {
        return "veVault";
    }

    function symbol() public pure override returns (string memory) {
        return "VV";
    }

    function tokenURI(
        uint256 tokenId
    ) public view override returns (string memory) {
        if (_ownerOf(tokenId) == address(0)) revert TokenDoesNotExist();
        Lock memory lock = _lockedTokenIdToLock[tokenId];
        uint256 maxValue = _maxValueNodes[_maxValueHead].value;
        return
            IMetaDataURI(_renderer).tokenURI(
                tokenId,
                generateSeed(tokenId),
                uint128(maxValue),
                lock
            );
    }

    function depositFor(address to, uint256 tokenId) public {
        _veNFT.safeTransferFrom(msg.sender, address(this), tokenId);

        IVotingEscrow.LockedBalance memory lockedBalance = _veNFT.locked(
            tokenId
        );
        if (!lockedBalance.isPermanent) {
            if (_veNftProtocolTokenId == 0) {
                _veNFT.lockPermanent(tokenId);
            } else {
                uint256 newUnlockTime = ((block.timestamp + MAXTIME) / WEEK) *
                    WEEK;iVotingEscrowAbi
            }
            lockedBalance = _veNFT.locked(tokenId);
        }

        uint256 nextTokenId = ++_tokenIdCounter;
        _lockedTokenIdToLock[nextTokenId] = Lock({
            amount: uint128(lockedBalance.amount),
            start: uint64(block.timestamp),
            end: uint64(block.timestamp + 126144000) // (4 * 365 * 24 * 60 * 60)
        });

        // Add to max value linked list if it's greater than or equal to the highest value
        if (
            _maxValueHead == 0 ||
            uint256(uint128(lockedBalance.amount)) >=
            _maxValueNodes[_maxValueHead].value
        ) {
            uint256 newNodeId = ++_maxValueNodeCounter;
            _maxValueNodes[newNodeId] = MaxValueNode({
                value: uint256(uint128(lockedBalance.amount)),
                next: _maxValueHead
            });
            _maxValueHead = newNodeId;
        }

        if (_veNftProtocolTokenId == 0) {
            _veNftProtocolTokenId = tokenId;
        } else {
            _veNFT.merge(tokenId, _veNftProtocolTokenId);
        }

        _mintAndSetExtraDataUnchecked(
            to,
            nextTokenId,
            generateSeed(_tokenIdCounter)
        );
    }

    function batchDepositFor(address to, uint256[] memory tokenIds) external {
        for (uint256 i = 0; i < tokenIds.length; i++) {
            depositFor(to, tokenIds[i]);
        }
    }

    function redeemTo(address to, uint256 tokenId) public {
        Lock memory lock = _lockedTokenIdToLock[tokenId];
        uint256 amount = _timeAdjustedValue(lock);
        _burn(tokenId);
        _yolo.mint(to, amount);

        // Remove from max value linked list if it's the current max
        if (_maxValueNodes[_maxValueHead].value == amount) {
            _maxValueHead = _maxValueNodes[_maxValueHead].next;
        }
    }

    function batchRedeemTo(address to, uint256[] memory tokenIds) external {
        for (uint256 i = 0; i < tokenIds.length; i++) {
            redeemTo(to, tokenIds[i]);
        }
    }

    function locked(
        uint256 tokenId
    ) public view returns (uint256, Lock memory) {
        Lock memory lock = _lockedTokenIdToLock[tokenId];
        return (_timeAdjustedValue(lock), lock);
    }

    function _timeAdjustedValue(
        Lock memory lock
    ) internal view returns (uint256 adjustedValue) {
        uint256 value = lock.amount;
        uint256 unlockStartTime = lock.start;
        uint256 unlockEndTime = lock.end;

        if (block.timestamp >= unlockEndTime) {
            return value; // Fully unlocked
        }

        if (block.timestamp <= unlockStartTime) {
            return (value * 20) / 100; // Start at 20%
        }

        // Linear increase from 20% to 100% over the lock period
        uint256 baseAmount = (value * 20) / 100; // 20% base
        uint256 variableAmount = (value * 80) / 100; // 80% that unlocks linearly

        adjustedValue =
            baseAmount +
            (variableAmount * (block.timestamp - unlockStartTime)) /
            (unlockEndTime - unlockStartTime);
    }

    function generateSeed(uint256 tokenId) public view returns (uint96) {
        return
            uint96(
                uint256(
                    keccak256(
                        abi.encodePacked(blockhash(block.number - 1), tokenId)
                    )
                )
            );
    }

    /// @dev This event emits when the metadata of a range of tokens is changed.
    /// So that the third-party platforms such as NFT market could
    /// timely update the images and related attributes of the NFTs.
    event BatchMetadataUpdate(uint256 _fromTokenId, uint256 _toTokenId);

    function updateAllMetadata() public onlyRoles(metadataUpdateRole) {
        if (_tokenIdCounter > 0) {
            emit BatchMetadataUpdate(1, _tokenIdCounter);
        }
    }

    // Accepts ERC721 transfers
    error NotSupported();
    function onERC721Received(
        address /*operator*/,
        address /*from*/,
        uint256 /*tokenId*/,
        bytes calldata /*data*/
    ) external view returns (bytes4) {
        if (msg.sender != address(_veNFT)) revert NotSupported();
        return this.onERC721Received.selector;
    }

    function lockForTokenId(uint256 tokenId) public view returns (Lock memory) {
        return _lockedTokenIdToLock[tokenId];
    }

    function protocolTokenId() public view returns (uint256) {
        return _veNftProtocolTokenId;
    }
}
