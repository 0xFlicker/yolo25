// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {IERC721Receiver} from "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import {ERC721Enumerable} from "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {IERC6372} from "@openzeppelin/contracts/interfaces/IERC6372.sol";
import {ERC2771Context} from "@openzeppelin/contracts/metatx/ERC2771Context.sol";
import {OwnableRoles} from "solady/auth/OwnableRoles.sol";

/// @title Voting Escrow
/// @notice veNFT implementation that escrows ERC-20 tokens in the form of an ERC-721 NFT
/// @notice Votes have a weight depending on time, so that users are committed to the future of (whatever they are voting for)
/// @author Modified from Solidly (https://github.com/solidlyexchange/solidly/blob/master/contracts/ve.sol)
/// @author Modified from Curve (https://github.com/curvefi/curve-dao-contracts/blob/master/contracts/VotingEscrow.vy)
/// @author velodrome.finance, @figs999, @pegahcarter
/// @dev Vote weight decays linearly over time. Lock time cannot be more than `MAXTIME` (4 years).

contract VotingEscrow is OwnableRoles, ERC721Enumerable {
    error ZeroAddress();
    error SameAddress();
    error NotApprovedOrOwner();
    error NotManagedOrNormalNFT();
    error NotOwner();
    error NotVoter();
    error ERC721ReceiverRejectedTokens();
    error ERC721TransferToNonERC721ReceiverImplementer();

    using SafeERC20 for IERC20;
    /*//////////////////////////////////////////////////////////////
                               CONSTRUCTOR
    //////////////////////////////////////////////////////////////*/

    /// @dev Mapping of interface id to bool about whether or not it's supported
    mapping(bytes4 => bool) internal supportedInterfaces;

    /// @dev ERC165 interface ID of ERC165
    bytes4 internal constant ERC165_INTERFACE_ID = 0x01ffc9a7;

    /// @dev ERC165 interface ID of ERC721
    bytes4 internal constant ERC721_INTERFACE_ID = 0x80ac58cd;

    /// @dev ERC165 interface ID of ERC721Metadata
    bytes4 internal constant ERC721_METADATA_INTERFACE_ID = 0x5b5e139f;

    /// @dev ERC165 interface ID of ERC4906
    bytes4 internal constant ERC4906_INTERFACE_ID = 0x49064906;

    /// @dev ERC165 interface ID of ERC6372
    bytes4 internal constant ERC6372_INTERFACE_ID = 0xda287a1d;

    struct LockedBalance {
        int128 amount;
        uint256 end;
        bool isPermanent;
    }

    /*//////////////////////////////////////////////////////////////
                               ROLES
    //////////////////////////////////////////////////////////////*/

    uint256 internal constant TESTER_ROLE = _ROLE_0;

    /*//////////////////////////////////////////////////////////////
                               CONSTRUCTOR
    //////////////////////////////////////////////////////////////*/

    constructor() ERC721("veStuxNet", "veStuxNet") {
        supportedInterfaces[ERC165_INTERFACE_ID] = true;
        supportedInterfaces[ERC721_INTERFACE_ID] = true;
        supportedInterfaces[ERC721_METADATA_INTERFACE_ID] = true;
        supportedInterfaces[ERC4906_INTERFACE_ID] = true;
        supportedInterfaces[ERC6372_INTERFACE_ID] = true;
        _initializeOwner(msg.sender);
        _grantRoles(msg.sender, TESTER_ROLE);
    }

    /*///////////////////////////////////////////////////////////////
                            MANAGED NFT STORAGE
    //////////////////////////////////////////////////////////////*/

    /// addon for testnet ONLY
    bool internal isLocked = false;

    /*///////////////////////////////////////////////////////////////
                            MANAGED NFT LOGIC
    //////////////////////////////////////////////////////////////*/

    /*///////////////////////////////////////////////////////////////
                             METADATA STORAGE
    //////////////////////////////////////////////////////////////*/
    string public constant version = "1.1";
    uint8 public constant decimals = 18;

    function setTeam(address _team) external {}

    function setArtProxy(address _proxy) external {}

    function tokenURI(
        uint256 /*_tokenId*/
    ) public pure override returns (string memory) {
        return "no";
    }

    /* TRANSFER FUNCTIONS */

    function lockTokens() external onlyRoles(TESTER_ROLE) {
        isLocked = true;
    }

    function unlockTokens() external onlyRoles(TESTER_ROLE) {
        isLocked = false;
    }

    error Locked();
    function _beforeTokenTransfer(
        address /* from */,
        address /* to */,
        uint256 /* tokenId */
    ) internal view {
        if (isLocked) revert Locked();
    }

    function adminBurn(uint256 _tokenId) external onlyRoles(TESTER_ROLE) {
        _burn(_tokenId);
    }

    /*//////////////////////////////////////////////////////////////
                             ESCROW STORAGE
    //////////////////////////////////////////////////////////////*/

    uint256 internal constant week = 1 weeks;
    uint256 internal constant MAXTIME = 4 * 365 * 86400;
    int128 internal constant iMAXTIME = 4 * 365 * 86400;
    uint256 internal constant MULTIPLIER = 1 ether;

    uint256 public epoch;
    uint256 public supply;

    mapping(uint256 => LockedBalance) public dataPoint;
    mapping(uint256 => uint256) public userPointEpoch;
    mapping(uint256 => int128) public slopeChanges;
    mapping(address => bool) public canSplit;
    uint256 public permanentLockBalance;

    function setLockedBalance(
        uint256 _tokenId,
        int128 _amount,
        uint256 _timestamp
    ) external onlyRoles(TESTER_ROLE) {
        _setLockedBalance(_tokenId, _amount, _timestamp);
    }

    function _setLockedBalance(
        uint256 _tokenId,
        int128 _amount,
        uint256 _timestamp
    ) internal {
        LockedBalance memory _new;
        _new.amount = _amount;
        _new.end = (_timestamp / week) * week; // gives you the magic "wednesday"
        _new.isPermanent = false;
        dataPoint[_tokenId] = _new;
    }

    function locked(
        uint256 _tokenId
    ) external view returns (LockedBalance memory) {
        return dataPoint[_tokenId];
    }

    /*//////////////////////////////////////////////////////////////
                              ESCROW LOGIC
    //////////////////////////////////////////////////////////////*/

    /*///////////////////////////////////////////////////////////////
                           GAUGE VOTING STORAGE
    //////////////////////////////////////////////////////////////*/

    /*///////////////////////////////////////////////////////////////
                            GAUGE VOTING LOGIC
    //////////////////////////////////////////////////////////////*/

    /*///////////////////////////////////////////////////////////////
                            DAO VOTING STORAGE
    //////////////////////////////////////////////////////////////*/

    /*///////////////////////////////////////////////////////////////
                             DAO VOTING LOGIC
    //////////////////////////////////////////////////////////////*/

    /*//////////////////////////////////////////////////////////////
                              ERC6372 LOGIC
    //////////////////////////////////////////////////////////////*/

    function clock() external view returns (uint48) {
        return uint48(block.timestamp);
    }

    function CLOCK_MODE() external pure returns (string memory) {
        return "mode=timestamp";
    }

    function adminMint(
        address _to,
        uint256 _tokenId,
        int128 value,
        uint256 timestamp
    ) external onlyRoles(TESTER_ROLE) {
        _mint(_to, _tokenId);
        _setLockedBalance(_tokenId, value, timestamp);
    }
}
