// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.7.6;

import "aerodrome-slipstream/contracts/periphery/interfaces/INonfungiblePositionManager.sol";
import "../IVeVaultLock.sol";

interface IMetaDataURI is IVeVaultLock {
    function tokenURI(
        uint256 tokenId,
        uint96 seed,
        uint128 maxValue,
        Lock calldata lock
    ) external view returns (string memory);
}
