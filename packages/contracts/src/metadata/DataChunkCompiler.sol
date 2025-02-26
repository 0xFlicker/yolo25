// SPDX-License-Identifier: Unlicense
// by dom; use however you like

pragma solidity ^0.8.1;

interface IDataChunk {
    function data() external view returns (string memory);
}

interface IDataChunkCompiler {
    function BEGIN_JSON() external view returns (string memory);

    function END_JSON() external view returns (string memory);

    function BEGIN_METADATA_VAR(
        string memory name,
        bool omitQuotes
    ) external pure returns (string memory);

    function END_METADATA_VAR(
        bool omitQuotes
    ) external pure returns (string memory);

    function compile2(
        address chunk1,
        address chunk2
    ) external view returns (string memory);

    function compile3(
        address chunk1,
        address chunk2,
        address chunk3
    ) external returns (string memory);

    function compile4(
        address chunk1,
        address chunk2,
        address chunk3,
        address chunk4
    ) external view returns (string memory);

    function compile5(
        address chunk1,
        address chunk2,
        address chunk3,
        address chunk4,
        address chunk5
    ) external view returns (string memory);

    function compile6(
        address chunk1,
        address chunk2,
        address chunk3,
        address chunk4,
        address chunk5,
        address chunk6
    ) external view returns (string memory);

    function compile7(
        address chunk1,
        address chunk2,
        address chunk3,
        address chunk4,
        address chunk5,
        address chunk6,
        address chunk7
    ) external view returns (string memory);

    function compile8(
        address chunk1,
        address chunk2,
        address chunk3,
        address chunk4,
        address chunk5,
        address chunk6,
        address chunk7,
        address chunk8
    ) external view returns (string memory);

    function compile9(
        address chunk1,
        address chunk2,
        address chunk3,
        address chunk4,
        address chunk5,
        address chunk6,
        address chunk7,
        address chunk8,
        address chunk9
    ) external view returns (string memory);
}

contract DataChunkCompiler {
    address public immutable owner;

    string public constant BEGIN_JSON = "data:application/json,%7B"; // data:application/json,{
    string public constant END_JSON = "%7D"; // }
  

    function BEGIN_METADATA_VAR(
        string memory name,
        bool omitQuotes
    ) public pure returns (string memory) {
        if (omitQuotes) {
            return string(abi.encodePacked("%22", name, "%22%3A"));
        }

        return string(abi.encodePacked("%22", name, "%22%3A%22"));
    }

    function END_METADATA_VAR(
        bool omitQuotes
    ) public pure returns (string memory) {
        if (omitQuotes) {
            return "%2C";
        }

        return "%22%2C";
    }

    constructor() {
        owner = msg.sender;
    }

    function compile2(
        address chunk1,
        address chunk2
    ) public view returns (string memory) {
        IDataChunk data1 = IDataChunk(chunk1);
        IDataChunk data2 = IDataChunk(chunk2);
        return string(abi.encodePacked(data1.data(), data2.data()));
    }

    function compile3(
        address chunk1,
        address chunk2,
        address chunk3
    ) public view returns (string memory) {
        IDataChunk data1 = IDataChunk(chunk1);
        IDataChunk data2 = IDataChunk(chunk2);
        IDataChunk data3 = IDataChunk(chunk3);
        return
            string(abi.encodePacked(data1.data(), data2.data(), data3.data()));
    }

    function compile4(
        address chunk1,
        address chunk2,
        address chunk3,
        address chunk4
    ) public view returns (string memory) {
        IDataChunk data1 = IDataChunk(chunk1);
        IDataChunk data2 = IDataChunk(chunk2);
        IDataChunk data3 = IDataChunk(chunk3);
        IDataChunk data4 = IDataChunk(chunk4);
        return
            string(
                abi.encodePacked(
                    data1.data(),
                    data2.data(),
                    data3.data(),
                    data4.data()
                )
            );
    }

    function compile5(
        address chunk1,
        address chunk2,
        address chunk3,
        address chunk4,
        address chunk5
    ) public view returns (string memory) {
        IDataChunk data1 = IDataChunk(chunk1);
        IDataChunk data2 = IDataChunk(chunk2);
        IDataChunk data3 = IDataChunk(chunk3);
        IDataChunk data4 = IDataChunk(chunk4);
        IDataChunk data5 = IDataChunk(chunk5);
        return
            string(
                abi.encodePacked(
                    data1.data(),
                    data2.data(),
                    data3.data(),
                    data4.data(),
                    data5.data()
                )
            );
    }

    function compile6(
        address chunk1,
        address chunk2,
        address chunk3,
        address chunk4,
        address chunk5,
        address chunk6
    ) public view returns (string memory) {
        IDataChunk data1 = IDataChunk(chunk1);
        IDataChunk data2 = IDataChunk(chunk2);
        IDataChunk data3 = IDataChunk(chunk3);
        IDataChunk data4 = IDataChunk(chunk4);
        IDataChunk data5 = IDataChunk(chunk5);
        IDataChunk data6 = IDataChunk(chunk6);
        return
            string(
                abi.encodePacked(
                    data1.data(),
                    data2.data(),
                    data3.data(),
                    data4.data(),
                    data5.data(),
                    data6.data()
                )
            );
    }

    function compile7(
        address chunk1,
        address chunk2,
        address chunk3,
        address chunk4,
        address chunk5,
        address chunk6,
        address chunk7
    ) public view returns (string memory) {
        IDataChunk data1 = IDataChunk(chunk1);
        IDataChunk data2 = IDataChunk(chunk2);
        IDataChunk data3 = IDataChunk(chunk3);
        IDataChunk data4 = IDataChunk(chunk4);
        IDataChunk data5 = IDataChunk(chunk5);
        IDataChunk data6 = IDataChunk(chunk6);
        IDataChunk data7 = IDataChunk(chunk7);
        return
            string(
                abi.encodePacked(
                    data1.data(),
                    data2.data(),
                    data3.data(),
                    data4.data(),
                    data5.data(),
                    data6.data(),
                    data7.data()
                )
            );
    }

    function compile8(
        address chunk1,
        address chunk2,
        address chunk3,
        address chunk4,
        address chunk5,
        address chunk6,
        address chunk7,
        address chunk8
    ) public view returns (string memory) {
        IDataChunk data1 = IDataChunk(chunk1);
        IDataChunk data2 = IDataChunk(chunk2);
        IDataChunk data3 = IDataChunk(chunk3);
        IDataChunk data4 = IDataChunk(chunk4);
        IDataChunk data5 = IDataChunk(chunk5);
        IDataChunk data6 = IDataChunk(chunk6);
        IDataChunk data7 = IDataChunk(chunk7);
        IDataChunk data8 = IDataChunk(chunk8);
        return
            string(
                abi.encodePacked(
                    data1.data(),
                    data2.data(),
                    data3.data(),
                    data4.data(),
                    data5.data(),
                    data6.data(),
                    data7.data(),
                    data8.data()
                )
            );
    }

    function compile9(
        address chunk1,
        address chunk2,
        address chunk3,
        address chunk4,
        address chunk5,
        address chunk6,
        address chunk7,
        address chunk8,
        address chunk9
    ) public view returns (string memory) {
        IDataChunk data1 = IDataChunk(chunk1);
        IDataChunk data2 = IDataChunk(chunk2);
        IDataChunk data3 = IDataChunk(chunk3);
        IDataChunk data4 = IDataChunk(chunk4);
        IDataChunk data5 = IDataChunk(chunk5);
        IDataChunk data6 = IDataChunk(chunk6);
        IDataChunk data7 = IDataChunk(chunk7);
        IDataChunk data8 = IDataChunk(chunk8);
        IDataChunk data9 = IDataChunk(chunk9);
        return
            string(
                abi.encodePacked(
                    data1.data(),
                    data2.data(),
                    data3.data(),
                    data4.data(),
                    data5.data(),
                    data6.data(),
                    data7.data(),
                    data8.data(),
                    data9.data()
                )
            );
    }
}
