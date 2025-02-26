// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

interface IVeVaultRendererImage {
    function render(
        uint256 tokenId,
        uint96 seed,
        uint128 value,
        uint128 maxValue,
        uint64 unlockStartTime,
        uint64 unlockEndTime,
        bool isDarkMode,
        bool[80] memory isRendered
    ) external view returns (string memory);
}
