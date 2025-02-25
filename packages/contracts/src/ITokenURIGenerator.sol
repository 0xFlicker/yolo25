// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

interface ITokenURIGenerator {
    function tokenURI(uint256 tokenId) external view returns (string memory);
}
