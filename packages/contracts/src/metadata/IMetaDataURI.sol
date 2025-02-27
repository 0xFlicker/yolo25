// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.16;

import "../IVeVaultLock.sol";

interface IMetaDataURI is IVeVaultLock {
    function tokenURI(
        uint256 tokenId,
        uint96 seed,
        uint128 maxValue,
        Lock calldata lock
    ) external view returns (string memory);
}
