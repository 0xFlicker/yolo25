// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {OwnableRoles} from "solady/auth/OwnableRoles.sol";
import {ERC20} from "solady/tokens/ERC20.sol";
import {IERC20} from "openzeppelin-contracts/contracts/token/ERC20/IERC20.sol";
import {LibString} from "solady/utils/LibString.sol";

contract Yolo is OwnableRoles, ERC20 {
    using LibString for string;

    uint256 internal constant _VAULT_ROLE = _ROLE_0;

    address private _token;

    bytes private constant _NAME_CALL = abi.encodeWithSignature("name()");
    bytes private constant _SYMBOL_CALL = abi.encodeWithSignature("symbol()");

    constructor(address token) {
        _initializeOwner(msg.sender);
        _token = token;
    }

    error NameCallFailed();
    error SymbolCallFailed();

    function name() public view override returns (string memory) {
        string memory baseName = "Yolo";
        (bool success, bytes memory data) = _token.staticcall(_NAME_CALL);
        if (!success) revert NameCallFailed();
        return baseName.concat(abi.decode(data, (string)));
    }

    function symbol() public view override returns (string memory) {
        string memory baseSymbol = "YOLO";
        (bool success, bytes memory data) = _token.staticcall(_SYMBOL_CALL);
        if (!success) revert SymbolCallFailed();
        return baseSymbol.concat(abi.decode(data, (string)));
    }

    function mint(address to, uint256 amount) external onlyRoles(_VAULT_ROLE) {
        _mint(to, amount);
    }

    function burn(
        address from,
        uint256 amount
    ) external onlyRoles(_VAULT_ROLE) {
        _burn(from, amount);
    }
}
