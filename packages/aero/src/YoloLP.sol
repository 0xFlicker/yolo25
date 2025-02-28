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
import {IERC20} from "./interface/IERC20.sol";
import {IERC721} from "./interface/IERC721.sol";
import {IWETH} from "./interface/IWETH.sol";
import {ICLPool} from "./interface/ICLPool.sol";
import {ICLFactory} from "./interface/ICLFactory.sol";
import {INonfungiblePositionManager} from "./interface/INonfungiblePositionManager.sol";
import {IQuoter} from "./interface/IQuoter.sol";

contract YoloLP {
    IERC20 public yolo;
    IWETH public weth;
    IERC20 public aero;
    address public v3Factory;
    address public v3Router;
    address public v3PoolAddress;
    address public v3PosMgr;
    address public v3Quoter;
    int24 public tickSpace;
    uint256[] public lpTokenIds;

    event token0Set(address _old, address _new);
    event token1Set(address _old, address _new);
    event FactorySet(address _old, address _new);
    event RouterSet(address _old, address _new);
    event PoolAddressSet(address _old, address _new);
    event PositionManagerSet(address _old, address _new);
    event TickSpacingSet(int24 _old, int24 _new);

    // error MaxSplaining(string reason);

    /// @dev standard constructor
    /// @param _yolo is the CA of $yolo
    /// @param _weth is the CA of $weth
    /// @param _aero is the CA of $aero
    /// @param _v3Router is the CA of the slipstream router
    /// @param _v3Factory is the CA of the slipstream factory
    /// @param _v3PosMgr is the CA of the slipstream position manager
    /// @param _v3Quoter is the CA of the slipstream Quoter v1 (v2 not needed)
    /// @param _tickSpace is the tick spacing 1, 50, 100, 200, 2000, 10 (from slipstream factory)
    constructor(
        address _yolo,
        address _weth,
        address _aero,
        address _v3Router,
        address _v3Factory,
        address _v3PosMgr,
        address _v3Quoter,
        int24 _tickSpace
    ) {
        weth = IWETH(_weth);
        emit token1Set(address(0), _weth);
        yolo = IERC20(_yolo);
        emit token0Set(address(0), _yolo);
        aero = IERC20(_aero);
        // no emit
        v3Router = _v3Router;
        emit RouterSet(address(0), _v3Router);
        v3Factory = _v3Factory;
        emit FactorySet(address(0), _v3Factory);
        v3PosMgr = _v3PosMgr;
        emit PositionManagerSet(address(0), _v3PosMgr);
        v3Quoter = _v3Quoter;
        // no emit
        tickSpace = _tickSpace;
        emit TickSpacingSet(0, tickSpace);

        // approve weth
        weth.approve(v3Router, type(uint256).max);
        weth.approve(v3PosMgr, type(uint256).max);

        // approve yolo
        yolo.approve(v3Router, type(uint256).max);
        yolo.approve(v3PosMgr, type(uint256).max);
    }

    /// @dev the deposit native function
    /// drop eth =>
    /// wrap it up =>
    /// mint a single sided v3 LP (stays on address(this)) =>
    /// calc value of aero swap for value =>
    /// mint our NFT with that value
    function depositEth() external payable {
        // mint sell wall -1 tick to -2 ticks from current sqrtPriceX96
        // payable eth => weth (on contract)
        uint256 deltaEth1 = weth.balanceOf(address(this));
        weth.deposit{value: msg.value}();
        deltaEth1 = weth.balanceOf(address(this)) - deltaEth1;
        require(deltaEth1 == msg.value, "WETH deposit failed");

        // mint sellwall
        _mintSellWallPosition(deltaEth1, _getSqrtPriceX96());

        // calc $weth => $aero
        uint256 amount = _wethToAero(deltaEth1);

        // mint our NFT
    }

    /// @dev either i'm a Jenius (Genius with a J) or completely insane...
    /// deposit slipstream nft =>
    /// check0, is it $yolo? =>
    /// check1, is it $weth? =>
    /// calc the $yolo to $aero swap value =>
    /// calc the $weth to $aero swap value =>
    /// add them up, mint out NFT with that value
    function depositLP(uint256 _tokenId) external {
        (address token0, address token1, int24 tickSpacing, uint128 liquidity) = _getPosition(_tokenId);
        uint160 sqrtPriceX96 = _getSqrtPriceX96();
        require(
            token0 == address(yolo) || token1 == address(yolo),
            "LP must contain YOLO"
        );
        require(
            token0 == address(weth) || token1 == address(weth),
            "LP must contain WETH"
        );
        require(
            tickSpacing == tickSpace,
            "LP tickSpace must match"
        );

        // move it
        IERC721(v3PosMgr).safeTransferFrom(
            msg.sender,
            address(this),
            _tokenId
        );
        // store it
        lpTokenIds.push(_tokenId);

        // calc t0/t1 => $aero
        uint256 aeroAmount;
        (uint256 token0Amount, uint256 token1Amount) = _calcTokens(liquidity, sqrtPriceX96);
        if (token0 == address(yolo)) {
            token1Amount += _yoloToWeth(token0Amount); // swap yolo to ether
            aeroAmount = _wethToAero(token1Amount);
        } else {
            token0Amount += _yoloToWeth(token1Amount); // swap yolo to ether
            aeroAmount = _wethToAero(token0Amount);
        }

        // mint based off aero amount
    }

    /// @dev this is bland, it's 1990's calling wanting the Taco Bell pastel colors back...
    /// @notice this has off chain values derived from sqrtPriceX96, et al
    /// @param _yoloAmount is the calculated amount of $yolo to be minted for an "infinity pool"
    /// @param _sqrtPriceX96 is so much easier to calculate off chain, but honestly could pull CL200 areo/weth's for parity
    function initalLPEth(
        uint256 _yoloAmount,
        uint160 _sqrtPriceX96
    ) external payable {
        // payable eth => weth (on contract)
        uint256 deltaEth = weth.balanceOf(address(this));
        weth.deposit{value: msg.value}();
        deltaEth = weth.balanceOf(address(this)) - deltaEth;
        require(deltaEth == msg.value, "WETH deposit failed");

        // yolo => contract
        // fix to mint
        uint256 deltaYolo = yolo.balanceOf(address(this));
        bool done = yolo.transferFrom(msg.sender, address(this), _yoloAmount);
        require(done, "YOLO transfer failed");
        deltaYolo = yolo.balanceOf(address(this)) - deltaYolo;

        // call slot0 of aero for sqrtPriceX96 (aka 1:1) - external

        // calc $yolo amount based off 1:1 & sqrtPriceX96 - external

        // create pool
        v3PoolAddress = ICLFactory(v3Factory).createPool(
            address(yolo),
            address(weth),
            tickSpace,
            _sqrtPriceX96
        );
        emit PoolAddressSet(address(0), v3PoolAddress);

        // mint "infinity pool"
        _mintInfinityPosition(deltaYolo, deltaEth, _sqrtPriceX96);
    }

    /// @dev this is the magical function you will use once...
    /// @param _token0Amount amount of yolo to add to position
    /// @param _token1Amount amount of weth to add to position
    /// @param _sqrtPriceX96 is the magic number passed through
    /// @return tokenId the uint256 tokenId from the 721 position
    /// @return liquidity amount of liquidity added to v3 slipstream pool
    /// @return token0Amount the uint256 of the left over token
    /// @return token1Amount the uint256 of the left over wavax
    /// @notice this generates an infinity pool, aka type(int24).min <-> type(int24).max
    function _mintInfinityPosition(
        uint256 _token0Amount,
        uint256 _token1Amount,
        uint160 _sqrtPriceX96
    )
        internal
        returns (
            uint256 tokenId,
            uint128 liquidity,
            uint256 token0Amount,
            uint256 token1Amount
        )
    {
        // Mint it
        (
            tokenId,
            liquidity,
            token0Amount,
            token1Amount
        ) = INonfungiblePositionManager(v3PosMgr).mint(
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
    /// @return liquidity amount of liquidity added to v3 slipstream pool
    /// @return token0Amount the uint256 of the left over token
    /// @return token1Amount the uint256 of the left over wavax
    /// @notice this generates a buy wall... 1-2 ticks below current tick
    function _mintSellWallPosition(
        uint256 _amount,
        uint160 _sqrtPriceX96
    )
        internal
        returns (
            uint256 tokenId,
            uint128 liquidity,
            uint256 token0Amount,
            uint256 token1Amount
        )
    {
        // Grabs tick
        int24 tick = _getTick();

        // Mint it
        (
            tokenId,
            liquidity,
            token0Amount,
            token1Amount
        ) = INonfungiblePositionManager(v3PosMgr).mint(
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

    /// @dev this does the token from liquidity + sqrtPriceX96
    /// @param _liquidity the value returned from _getPosition()
    /// @param _sqrtPriceX96 the value returned from _getSqrtPriceX96()
    function _calcTokens(
        uint128 _liquidity,
        uint160 _sqrtPriceX96
    ) internal returns (uint256 token0Amount, uint256 token1Amount) {
        // Convert sqrtPriceX96 to sqrtPrice
        uint256 sqrtPrice = uint256(_sqrtPriceX96) * 1 ether / 2**96;

        // Calculate the amounts of token0 and token1
        token0Amount = _liquidity * 1 ether / sqrtPrice;
        token1Amount = _liquidity * sqrtPrice / 1 ether;

        // Adjust for the precision
        token0Amount = token0Amount * 1 ether / (sqrtPrice + 1 ether);
        token1Amount = token1Amount * 1 ether / (sqrtPrice + 1 ether);
    }

    /// @dev this estimates the swap value from $yolo => $weth
    /// @param _amount of $yolo
    /// @return _value of $weth for _amount of $yolo
    function _yoloToWeth(
        uint256 _amount
    ) internal returns (uint256 _value) {
        _value = IQuoter(v3Quoter).quoteExactInputSingle(address(yolo), address(weth), tickSpace, _amount, type(uint160).max);
    }

    /// @dev this estimates the swap value from $weth => $aero
    /// @param _amount of $weth
    /// @return _value of $aero for _amount of $weth
    function _wethToAero(
        uint256 _amount
    ) internal returns (uint256 _value) {
        _value = IQuoter(v3Quoter).quoteExactInputSingle(address(weth), address(aero), 200, _amount, type(uint160).max);
    }

    /// @dev this returns the current tick
    /// @return tick from ICLPool.slot0
    function _getTick() internal returns (int24 tick) {
        (, tick, , , , ) = ICLPool(v3PoolAddress).slot0();
    }

    /// @dev this returns the current tick
    /// @return sqrtPriceX96 from ICLPool.slot0
    function _getSqrtPriceX96() internal returns (uint160 sqrtPriceX96) {
        (sqrtPriceX96, , , , , ) = ICLPool(v3PoolAddress).slot0();
    }

    /// @dev returns position data
    /// @param _tokenId the tokenId
    function _getPosition(
        uint256 _tokenId
    ) internal returns (address token0, address token1, int24 tickSpacing, uint128 liquidity) {
        (,,token0,token1,tickSpacing,,,liquidity,,,,) = INonfungiblePositionManager(v3PosMgr).positions(_tokenId);
    }

    /// @dev this is that bland, got to have it or it breaks function
    /// yeah this is for NFT's, but at least they aren't illiquid jpegs
    function onERC721Received(
        address operator,
        address from,
        uint256 tokenId,
        bytes calldata data
    ) external returns (bytes4) {
        return this.onERC721Received.selector;
    }
}
