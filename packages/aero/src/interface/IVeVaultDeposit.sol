/*     +%%#-                           ##.        =+.    .+#%#+:       *%%#:    .**+-      =+
 *   .%@@*#*:                          @@: *%-   #%*=  .*@@=.  =%.   .%@@*%*   +@@=+=%   .%##
 *  .%@@- -=+                         *@% :@@-  #@=#  -@@*     +@-  :@@@: ==* -%%. ***   #@=*
 *  %@@:  -.*  :.                    +@@-.#@#  =@%#.   :.     -@*  :@@@.  -:# .%. *@#   *@#*
 * *%@-   +++ +@#.-- .*%*. .#@@*@#  %@@%*#@@: .@@=-.         -%-   #%@:   +*-   =*@*   -@%=:
 * @@%   =##  +@@#-..%%:%.-@@=-@@+  ..   +@%  #@#*+@:      .*=     @@%   =#*   -*. +#. %@#+*@
 * @@#  +@*   #@#  +@@. -+@@+#*@% =#:    #@= :@@-.%#      -=.  :   @@# .*@*  =@=  :*@:=@@-:@+
 * -#%+@#-  :@#@@+%++@*@*:=%+..%%#=      *@  *@++##.    =%@%@%%#-  =#%+@#-   :*+**+=: %%++%*
 *
 * @title IVeVaultDeposit
 * @author @maxflowo2 and, @0xflicker on github, MGGA!
 */

// SPDX-License-Identifier: Apache-2.0

/******************************************************************************
 * Copyright 2025 VeVault                                                     *
 *                                                                            *
 * Licensed under the Apache License, Version 2.0 (the "License");            *
 * you may not use this file except in compliance with the License.           *
 * You may obtain a copy of the License at                                    *
 *                                                                            *
 *     http://www.apache.org/licenses/LICENSE-2.0                             *
 *                                                                            *
 * Unless required by applicable law or agreed to in writing, software        *
 * distributed under the License is distributed on an "AS IS" BASIS,          *
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.   *
 * See the License for the specific language governing permissions and        *
 * limitations under the License.                                             *
 ******************************************************************************/

pragma solidity >=0.7.0 <0.9.0;

import {IVeVaultLock} from "./IVeVaultLock.sol";

interface IVeVaultDeposit is IVeVaultLock{
    function name() external returns (string memory);
    function symbol() external returns (string memory);
    function tokenURI(uint256 tokenId) external returns (string memory);

    /// @dev this is for deposit of veNFT's
    /// @param to address (non payable) for recipient
    /// @param tokenId is the tokenId of veNFT
    function depositFor(address to, uint256 tokenId) external;

    /// @dev this is for deposit batch of veNFT's
    /// @param to address (non payable) for recipient
    /// @param tokenIds is the tokenId of veNFT
    function batchDepositFor(address to, uint256[] memory tokenIds) external;

    /// @dev this is for deposit to anyone
    /// @param to address (non payable) for recipient
    /// @param lockedAmount is the value equivalent in $aero
    function depositLPFor(address to, uint256 lockedAmount) external;
    function redeemTo(address to, uint256 tokenId) external;
    function batchRedeemTo(address to, uint256[] memory tokenIds) external;
    function locked(uint256 tokenId) external returns (uint256, Lock memory);
    function generateSeed(uint256 tokenId) external returns (uint96);
    function updateAllMetadata() external;
    function lockForTokenId(uint256 tokenId) external returns (Lock memory);
    function protocolTokenId() external returns (uint256);
    function roleMetadataUpdate() external returns (uint256);
    function roleMinter() external returns (uint256);
}

