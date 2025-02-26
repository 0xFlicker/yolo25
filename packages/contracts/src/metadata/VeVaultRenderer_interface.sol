// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "../IVeVaultLock.sol";

interface IVeVaultRendererImage is IVeVaultLock {
    function render(
        uint256 tokenId,
        uint96 seed,
        uint128 maxValue,
        Lock calldata lock,
        bool isDarkMode,
        bool[80] memory isRendered
    ) external view returns (string memory);
}
