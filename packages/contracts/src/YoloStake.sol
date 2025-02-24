// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/cryptography/EIP712.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Votes.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Wrapper.sol";
import "aerodrome-finance/interfaces/IVotingEscrow.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

import {LibBitmap} from "solady/utils/LibBitmap.sol";
import "./IYolo.sol";

contract YoloStake is AccessControl {
    using LibBitmap for LibBitmap.Bitmap;
    mapping(uint256 => uint256) private _lockedTokenIdToAmount;
    IVotingEscrow private _veNFT;
    IYolo private _yolo;

    constructor(address veNFTAddress, address yoloAddress) {
        _veNFT = IVotingEscrow(veNFTAddress);
        _yolo = IYolo(yoloAddress);
    }

    function deposit(uint256 tokenId) external {
        IVotingEscrow.LockedBalance memory lockedBalance = _veNFT.locked(
            tokenId
        );
        uint256 amount = uint256(uint128(lockedBalance.amount));
        _lockedTokenIdToAmount[tokenId] = amount;
        _yolo.mint(msg.sender, amount);
        _veNFT.transferFrom(msg.sender, address(this), tokenId);
    }

    function withdraw(uint256 tokenId) external {
        uint256 amount = _lockedTokenIdToAmount[tokenId];
        _yolo.burn(msg.sender, amount);
        _veNFT.transferFrom(address(this), msg.sender, tokenId);
    }
}
