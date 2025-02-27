// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "aerodrome-finance/contracts/interfaces/IVotingEscrow.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "solady/tokens/ERC721.sol";
import "solady/auth/OwnableRoles.sol";
import {LibBitmap} from "solady/utils/LibBitmap.sol";
import "./IYolo.sol";
import "./metadata/IMetaDataURI.sol";
import "./metadata/MetadataLib.sol";
import "./IVeVaultLock.sol";

contract VeVaultStake is OwnableRoles, ERC721, IVeVaultLock {
    using LibBitmap for LibBitmap.Bitmap;

    struct MaxValueNode {
        uint256 value;
        uint256 tokenId;
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

    uint256 public _METADATA_UPDATE_ROLE = _ROLE_0;

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
        IVotingEscrow.LockedBalance memory lockedBalance = _veNFT.locked(
            tokenId
        );
        _lockedTokenIdToLock[tokenId] = Lock({
            amount: uint128(lockedBalance.amount),
            start: uint64(block.timestamp),
            end: uint64(block.timestamp + 1461 days) // (4 years with 1 leap year)
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
                tokenId: tokenId,
                next: _maxValueHead
            });
            _maxValueHead = newNodeId;
        }

        _mintAndSetExtraDataUnchecked(
            to,
            ++_tokenIdCounter,
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
        uint256 amount = MetadataLib.timeAdjustedValue(
            lock.amount,
            lock.start,
            lock.end
        );
        _burn(tokenId);
        _yolo.burn(to, amount);

        // Remove from max value linked list if it's the current max
        if (_maxValueNodes[_maxValueHead].tokenId == tokenId) {
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
    ) public view returns (uint256 currentValue, Lock memory lock) {
        lock = _lockedTokenIdToLock[tokenId];
        currentValue = MetadataLib.timeAdjustedValue(
            lock.amount,
            lock.start,
            lock.end
        );
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

    function updateAllMetadata() public onlyRoles(_METADATA_UPDATE_ROLE) {
        if (_tokenIdCounter > 0) {
            emit BatchMetadataUpdate(1, _tokenIdCounter);
        }
    }
}
