/*     +%%#-                           ##.        =+.    .+#%#+:       *%%#:    .**+-      =+
 *   .%@@*#*:                          @@: *%-   #%*=  .*@@=.  =%.   .%@@*%*   +@@=+=%   .%##
 *  .%@@- -=+                         *@% :@@-  #@=#  -@@*     +@-  :@@@: ==* -%%. ***   #@=*
 *  %@@:  -.*  :.                    +@@-.#@#  =@%#.   :.     -@*  :@@@.  -:# .%. *@#   *@#*
 * *%@-   +++ +@#.-- .*%*. .#@@*@#  %@@%*#@@: .@@=-.         -%-   #%@:   +*-   =*@*   -@%=:
 * @@%   =##  +@@#-..%%:%.-@@=-@@+  ..   +@%  #@#*+@:      .*=     @@%   =#*   -*. +#. %@#+*@
 * @@#  +@*   #@#  +@@. -+@@+#*@% =#:    #@= :@@-.%#      -=.  :   @@# .*@*  =@=  :*@:=@@-:@+
 * -#%+@#-  :@#@@+%++@*@*:=%+..%%#=      *@  *@++##.    =%@%@%%#-  =#%+@#-   :*+**+=: %%++%*
 *
 * @title LP Creation/Lock 1.0.0 alpha (only aerodrome)
 * @author @maxflowo2 and, @0xflick on github, MGGA!
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

/* Imports if needed */
// add roles (OZ)
// swap to velodrome - v3 shit
import {IERC20} from "./interface/IERC20.sol";
import {IWETH} from "../lib/aerodrome-finance/lib/openzeppelin-contracts/contracts/interfaces/IWETH.sol";
import {ICLPool} from "slipstream/contracts/core/interfaces/ICLPool.sol";
import {ICLFactory} from "slipstream/contracts/core/interfaces/ICLFactory.sol";
import {INonfungiblePositionManager} from "slipstream/contracts/periphery/interfaces/INonfungiblePositionManager.sol";

contract YoloLP {
  IERC20 public yolo;
  IERC20 public weth;
  IERC20 public aero;
  address public v3Factory;
  address public v3Router;
  address public v3PoolAddress;
  address public v3PosMgr;
  uint24 public poolFees;
  uint24 public tickSpace;
  uint256[] public lpTokenIds;

  event token0Set(address _old, address _new);
  event token1Set(address _old, address _new);
  event FactorySet(address _old, address _new);
  event RouterSet(address _old, address _new);
  event PoolAddressSet(address _old, address _new);
  event PoolFeesSet(uint24 _old, uint24 _new);
  event PositionManagerSet(address _old, address _new);
  event TickSpacingSet(uint24 _old, uint24 _new);

  error MaxSplaining(string reason);

  constructor(
    address _yolo
  , address _weth
  , address _v3Router
  , address _v3Factory
  , address _v3PosMgr
  , uint24 _poolFees
  ) {
    weth = IERC20(_weth);
    emit token1Set(address(0), weth);
    yolo = IERC20(_yolo);
    emit token0Set(address(0), yolo);
    v3Router = _v3Router;
    emit RouterSet(address(0), v3Router);
    v3Factory = _v3Factory;
    emit FactorySet(address(0), v3Factory);
    v3PosMgr = _v3PosMgr;
    emit PositionManagerSet(address(0), v3PosMgr);
    poolFees = _poolFees;
    emit PoolFeesSet(0, poolFees);
    tickSpace = ICLFactory(v3Factory).feeAmountTickSpacing(poolFees);
    emit TickSpacingSet(0, tickSpace);

    // approve weth
    weth.approve(v3Router, type(uint256).max);
    weth.approve(v3PosMgr, type(uint256).max);

    // approve yolo
    yolo.approve(v3Router, type(uint256).max);
    yolo.approve(v3PosMgr, type(uint256).max);
  }

  function depositEth()
    external
    payable {
    // mint sell wall -1 tick to -2 ticks from current sqrtPriceX96
    // payable eth => weth (on contract)
    uint256 preEth = weth.balanceOf(address(this));
    IWETH(weth).deposit{ value: msg.value }();
    uint256 deltaEth = weth.balanceOf(address(this)) - preEth;
    if (deltaEth != msg.value) {
      revert MaxSplaining({
        reason: "WETH Failure"
      });
    }
    // get sqrtPriceX96
    uint160 sqrtPriceX96 = _getSqrtPriceX96();
    // mint sellwall
    _mintSellWallPosition(deltaEth, sqrtPriceX96);

    // mint our NFT
  }

  function depositLP(
    uint256 _tokenId
  ) external {
    // check the id for token types
    Position memory data = _getPosition(_tokenId);
    if (data.token0 == address(yolo) || data.token1 == address(yolo)) {
      if (data.token0 == address(weth) || data.token1 == address(weth)) {
        // transfer nft
        INonfungiblePositionManager.safeTransferFrom(msg.sender, address(this), _tokenId);
        // add tokenId to lpTokenIds
        lpTokenIds.push(_tokenId);
      } else {
        revert MaxSplaining({
          reason: "Not our LP"
        });
      }
    } else {
      revert MaxSplaining({
        reason: "Not our LP"
      });
    }

    // mint our NFT
}

  function initalLPEth(
    uint256 _yoloAmount
  , uint160 _sqrtPriceX96
  ) external
    payable {
    // payable eth => weth (on contract)
    uint256 preEth = weth.balanceOf(address(this));
    IWETH(weth).deposit{ value: msg.value }();
    uint256 deltaEth = weth.balanceOf(address(this)) - preEth;
    if (deltaEth != msg.value) {
      revert MaxSplaining({
        reason: "WETH Failure"
      });
    }
    // yolo => contract
    // fix to mint
    uint256 preYolo = yolo.balanceOf(address(this));
    bool done = yolo.transferFrom(msg.sender, address(this), _yoloAmount);
    if (!done) {
      revert MaxSplaining({
        reason: "No yolo"
      });
    }
    uint256 deltaYolo = yolo.balanceOf(address(this)) - preYolo;

    // call slot0 of aero for sqrtPriceX96 (aka 1:1) - external

    // calc $yolo amount based off 1:1 & sqrtPriceX96 - external

    // create pool
    v3PoolAddress = ICLFactory(v3Factory).createPool(yolo, weth, tickSpace, _sqrtPriceX96);
    emit PoolAddressSet(address(0), v3PoolAddress);

    // mint "infinity pool"
    _mintInfinityPosition(deltaYolo, deltaEth, _sqrtPriceX96);
  }

  /// @dev this is the magical function you will use in a few functions
  /// @param _token0Amount amount of yolo to add to position
  /// @param _token1Amount amount of weth to add to position
  /// @param _sqrtPriceX96 is the magic number from GUI
  /// @return tokenId the uint256 tokenId from the 721 position
  /// @return liquidity amount of liquidity added to v3 IUniswapV3Pool
  /// @return token0Amount the uint256 of the left over token
  /// @return token1Amount the uint256 of the left over wavax
  /// @notice this generates an infinity pool
  function _mintInfinityPosition(
    uint256 _token0Amount
  , uint256 _token1Amount
  , uint160 _sqrtPriceX96
  ) internal
    returns (
    uint256 tokenId
  , uint128 liquidity
  , uint256 token0Amount
  , uint256 token1Amount
  ) {
    // Mint it
    (tokenId, liquidity, token0Amount, token1Amount) =
    INonfungiblePositionManager(v3PosMgr).mint(
      INonfungiblePositionManager.MintParams({
        token0: address(yolo),
        token1: address(weth),
        tickSpacing: tickSpace,
        tickLower: type(int24).min,
        tickUpper: type(int24).max,
        amount0Desired: _token0Amount,
        amount1Desired: _token1Amount,
        amount0Min: 0,
        amount1Min: 0,
        recipient: address(this),
        deadline: block.timestamp,
        sqrtPriceX96: _sqrtPriceX96
      })
    );
    // push to array
    lpTokenIds.push(tokenId);
  }

  /// @dev this is the magical function you will use in a few functions
  /// @param _amount amount of weth
  /// @param _sqrtPriceX96 is the magic number from pool.slot0
  /// @return tokenId the uint256 tokenId from the 721 position
  /// @return liquidity amount of liquidity added to v3 IUniswapV3Pool
  /// @return token0Amount the uint256 of the left over token
  /// @return token1Amount the uint256 of the left over wavax
  /// @notice this generates a buy wall... 1-2 ticks below current tick
  function _mintSellWallPosition(
    uint256 _amount
  , uint160 _sqrtPriceX96
  ) internal
    returns (
    uint256 tokenId
  , uint128 liquidity
  , uint256 token0Amount
  , uint256 token1Amount
  ) {
    // Grabs tick
    int24 tick = _getTick();

    // Mint it
    (tokenId, liquidity, token0Amount, token1Amount) =
    INonfungiblePositionManager(v3PosMgr).mint(
      INonfungiblePositionManager.MintParams({
        token0: address(yolo),
        token1: address(weth),
        tickSpacing: tickSpace,
        tickLower: tick - 2,
        tickUpper: tick - 1,
        amount0Desired: 0,
        amount1Desired: _amount,
        amount0Min: 0,
        amount1Min: 0,
        recipient: address(this),
        deadline: block.timestamp,
        sqrtPriceX96: _sqrtPriceX96
      })
    );
    // push to array
    lpTokenIds.push(tokenId);
  }

  /// @dev this returns the current tick
  /// @return tick from ICLPool.slot0
  function _getTick()
    internal
    returns (int24 tick) {
    (,tick,,,,) = ICLPool(v3PoolAddress).slot0();
  }

  /// @dev this returns the current tick
  /// @return tick from ICLPool.slot0
  function _getSqrtPriceX96()
    internal
    returns (int160 sqrtPriceX96) {
    (sqrtPriceX96,,,,,) = ICLPool(v3PoolAddress).slot0();
  }

  struct Position {
    uint96 nonce,
    address operator,
    address token0,
    address token1,
    int24 tickSpacing,
    int24 tickLower,
    int24 tickUpper,
    uint128 liquidity,
    uint256 feeGrowthInside0LastX128,
    uint256 feeGrowthInside1LastX128,
    uint128 tokensOwed0,
    uint128 tokensOwed1
  }

  /// @dev returns position data
  /// @param _tokenId
  /// @return value
  function _getPosition(
    uint256 _tokenId
  ) internal
    returns (Position memory value) {
    (value.nonce, value.operator, value.token0, value.token1, value.tickSpacing, value.tickLower, value.tickUpper, value.liquidity, value.feeGrowthInside0LastX128, value.feeGrowthInside1LastX128, value.tokensOwed0, value.tokensOwed1) = INonfungiblePositionManager(v3PosMgr).positions(_tokenId)
  }

  function onERC721Received(
    address operator
  , address from
  , uint256 tokenId
  , bytes calldata data
  ) external returns (bytes4) {
    return this.onERC721Received.selector;
  }

}
