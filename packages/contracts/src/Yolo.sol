// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {OwnableRoles} from "solady/auth/OwnableRoles.sol";
import {ERC20} from "solady/tokens/ERC20.sol";

contract Yolo is OwnableRoles, ERC20 {
    uint256 internal constant MINTER_ROLE = _ROLE_0;
    uint256 internal constant BURNER_ROLE = _ROLE_1;

    constructor() {
        _initializeOwner(msg.sender);
    }

    function name() public pure override returns (string memory) {
        return "Yolo";
    }

    function symbol() public pure override returns (string memory) {
        return "YOLO";
    }

    function mint(address to, uint256 amount) external onlyRoles(MINTER_ROLE) {
        _mint(to, amount);
    }

    function burn(
        address from,
        uint256 amount
    ) external onlyRoles(BURNER_ROLE) {
        _burn(from, amount);
    }
}
