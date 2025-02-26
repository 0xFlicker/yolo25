// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.16;

interface IMetaDataURI {
    function tokenURI(
        uint256 tokenId,
        uint96 seed,
        uint128 value,
        uint128 maxValue,
        uint64 unlockStartTime,
        uint64 unlockEndTime
    ) external view returns (string memory);
}
