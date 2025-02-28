// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {OwnableRoles} from "solady/auth/OwnableRoles.sol";
import {ERC20} from "solady/tokens/ERC20.sol";
import {IERC20} from "openzeppelin-contracts/contracts/token/ERC20/IERC20.sol";
import {LibString} from "solady/utils/LibString.sol";

contract Yolo is OwnableRoles, ERC20 {
    using LibString for string;

    uint256 public constant _MINTER_ROLE = _ROLE_0;
    uint256 public constant _BURNER_ROLE = _ROLE_1;

    address private _token;

    string private _cachedName;
    string private _cachedSymbol;
    uint8 private _cachedDecimals;

    error NameCallFailed();
    error SymbolCallFailed();
    error DecimalsCallFailed();

    constructor(address token) {
        _initializeOwner(msg.sender);
        _token = token;

        // Cache token details
        (bool success, bytes memory data) = token.staticcall(
            abi.encodeWithSignature("name()")
        );
        if (!success) revert NameCallFailed();
        _cachedName = string.concat("Yolo", abi.decode(data, (string)));

        (success, data) = token.staticcall(abi.encodeWithSignature("symbol()"));
        if (!success) revert SymbolCallFailed();
        _cachedSymbol = string.concat("YOLO", abi.decode(data, (string)));

        (success, data) = token.staticcall(
            abi.encodeWithSignature("decimals()")
        );
        if (!success) revert DecimalsCallFailed();
        _cachedDecimals = abi.decode(data, (uint8));
    }

    function name() public view override returns (string memory) {
        return _cachedName;
    }

    function symbol() public view override returns (string memory) {
        return _cachedSymbol;
    }

    function decimals() public view override returns (uint8) {
        return _cachedDecimals;
    }

    function mint(address to, uint256 amount) external onlyRoles(_MINTER_ROLE) {
        _mint(to, amount);
    }

    function burn(
        address from,
        uint256 amount
    ) external onlyRoles(_BURNER_ROLE) {
        _burn(from, amount);
    }
}
