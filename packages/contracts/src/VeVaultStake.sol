// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "aerodrome-finance/interfaces/IVotingEscrow.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "solady/tokens/ERC721.sol";
import "solady/auth/OwnableRoles.sol";
import {LibBitmap} from "solady/utils/LibBitmap.sol";
import "./IYolo.sol";
import "./metadata/IMetaDataURI.sol";
import "./metadata/MetadataLib.sol";

contract VeVaultStake is OwnableRoles, ERC721 {
    using LibBitmap for LibBitmap.Bitmap;

    struct Lock {
        uint128 amount;
        uint64 start;
        uint64 end;
    }

    mapping(uint256 => Lock) private _lockedTokenIdToLock;

    IVotingEscrow private _veNFT;
    IYolo private _yolo;

    address private _renderer;
    uint256 private _tokenIdCounter;

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
        return
            IMetaDataURI(_renderer).tokenURI(
                tokenId,
                generateSeed(tokenId),
                lock.amount,
                lock.amount,
                lock.start,
                lock.end
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
}
