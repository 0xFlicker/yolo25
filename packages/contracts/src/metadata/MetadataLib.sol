// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

library MetadataLib {
    function getNumberOfVs(
        bool[80] memory isVRenderer
    ) public pure returns (uint8) {
        uint8 count = 0;
        for (uint8 i = 0; i < 80; i++) {
            if (isVRenderer[i]) {
                count++;
            }
        }
        return count;
    }

    /**
     * @dev For a given gas price (in 1/1000 gwei) and an index, returns whether a checkmark should be generated.
     * The index is the position of the checkmark in the 8 x 10 grid, starting from the top left.
     * For each index, generate a random number between 0 and maxValue. If the gas price is lower than the random number, do not generate a checkmark.
     * For an easy random number, let's use the seed and bit shift it to the right by the index
     */
    function vGenerates(
        uint96 seed,
        uint128 value,
        uint64 unlockStartTime,
        uint64 unlockEndTime,
        uint128 maxValue,
        uint8 index
    ) internal view returns (bool) {
        return
            timeAdjustedValue(value, unlockStartTime, unlockEndTime) >
            (uint256(seed >> index) % maxValue);
    }

    function timeAdjustedValue(
        uint128 value,
        uint64 unlockStartTime,
        uint64 unlockEndTime
    ) internal view returns (uint256 adjustedValue) {
        // Immediate 20% unlock at start
        uint256 immediateUnlock = (value * 20) / 100;

        // Remaining 80% unlocks linearly
        uint256 remainingValue = (value * 80) / 100;

        adjustedValue =
            immediateUnlock +
            (remainingValue *
                (100 -
                    (block.timestamp - unlockStartTime) /
                    (unlockEndTime - unlockStartTime))) /
            100;
    }

    function getIsVRendered(
        uint96 seed,
        uint128 value,
        uint64 unlockStartTime,
        uint64 unlockEndTime,
        uint128 maxValue
    ) public view returns (bool[80] memory isVRendered) {
        for (uint8 i = 0; i < 80; i++) {
            if (
                vGenerates(
                    seed,
                    value,
                    unlockStartTime,
                    unlockEndTime,
                    maxValue,
                    i
                )
            ) {
                isVRendered[i] = true;
            }
        }
        return isVRendered;
    }

    function uint256ToStr(uint256 value) public pure returns (string memory) {
        return
            string.concat(
                uint2str(value / 1000),
                ".",
                leftPad(uint2str(value % 1000), 3)
            );
    }

    // via https://stackoverflow.com/a/65707309
    function uint2str(
        uint256 _i
    ) public pure returns (string memory _uintAsString) {
        if (_i == 0) {
            return "0";
        }
        uint256 j = _i;
        uint256 len;
        while (j != 0) {
            len++;
            j /= 10;
        }
        bytes memory bstr = new bytes(len);
        uint256 k = len;
        while (_i != 0) {
            k = k - 1;
            uint8 temp = (48 + uint8(_i - (_i / 10) * 10));
            bytes1 b1 = bytes1(temp);
            bstr[k] = b1;
            _i /= 10;
        }
        return string(bstr);
    }

    function uint2hex(
        uint256 _i
    ) public pure returns (string memory _uintAsHexString) {
        if (_i == 0) {
            return "0";
        }
        uint256 j = _i;
        uint256 len;
        while (j != 0) {
            len++;
            j /= 16;
        }
        bytes memory bstr = new bytes(len);
        uint256 k = len;
        while (_i != 0) {
            k = k - 1;
            uint8 temp = (48 + uint8(_i - (_i / 16) * 16));
            if (temp > 57) {
                temp += 7;
            }
            bytes1 b1 = bytes1(temp);
            bstr[k] = b1;
            _i /= 16;
        }
        return string(bstr);
    }

    function leftPad(
        string memory str,
        uint256 length
    ) public pure returns (string memory) {
        bytes memory strBytes = bytes(str);
        bytes memory paddedBytes = new bytes(length);
        for (uint256 i = 0; i < length; i++) {
            if (i < length - strBytes.length) {
                paddedBytes[i] = "0";
            } else {
                paddedBytes[i] = strBytes[i - (length - strBytes.length)];
            }
        }
        return string(paddedBytes);
    }
}
