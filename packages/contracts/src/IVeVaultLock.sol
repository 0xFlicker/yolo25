// SPDX-License-Identifier: MIT
pragma solidity ^0.7.6;

interface IVeVaultLock {
    struct Lock {
        uint128 amount;
        uint64 start;
        uint64 end;
    }
}
