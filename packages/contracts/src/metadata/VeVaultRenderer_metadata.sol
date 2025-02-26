// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./DataChunkCompiler.sol";
import "./Base64.sol";
import "./VeVaultRenderer_interface.sol";
import "./MetadataLib.sol";
import "./IMetaDataURI.sol";
import "solady/utils/LibString.sol";
import "solady/utils/DateTimeLib.sol";

contract VeVaultRendererMetadata is IMetaDataURI, Ownable {
    using LibString for uint256;
    using DateTimeLib for uint256;

    IDataChunkCompiler private compiler;
    IVeVaultRendererImage public imageMetadata;

    constructor(address _compiler, address _imageMetadata) {
        imageMetadata = IVeVaultRendererImage(_imageMetadata);
        compiler = IDataChunkCompiler(_compiler);
    }

    function setImageMetadata(address _imageMetadata) public onlyOwner {
        imageMetadata = IVeVaultRendererImage(_imageMetadata);
    }

    function tokenURI(
        uint256 tokenId,
        uint96 seed,
        uint128 value,
        uint128 maxValue,
        uint64 unlockStartTime,
        uint64 unlockEndTime
    ) public view returns (string memory) {
        string memory tokenIdStr = MetadataLib.uint2str(tokenId);
        bool[80] memory isVRendered = MetadataLib.getIsVRendered(
            seed,
            value,
            unlockStartTime,
            unlockEndTime,
            maxValue
        );
        bool isDark = seed % 2 == 0;
        (uint256 year, uint256 month, uint256 day) = uint256(unlockEndTime)
            .timestampToDate();
        return
            string.concat(
                compiler.BEGIN_JSON(),
                string.concat(
                    compiler.BEGIN_METADATA_VAR("image", false),
                    "data:image/svg+xml;base64,",
                    Base64.encode(
                        bytes(
                            imageMetadata.render(
                                tokenId,
                                seed,
                                value,
                                maxValue,
                                unlockStartTime,
                                unlockEndTime,
                                isDark,
                                isVRendered
                            )
                        )
                    ),
                    compiler.END_METADATA_VAR(false)
                ),
                string.concat(
                    compiler.BEGIN_METADATA_VAR("attributes", true),
                    "%5B%7B%22trait_type%22%3A%22locked%20value%22%2C%22value%22%3A",
                    uint256(value).toString(),
                    "%7D%2C%7B%22trait_type%22%3A%22dark%22%2C%22value%22%3A%22",
                    isDark ? "true" : "false",
                    "%22%7D%2C%7B%22trait_type%22%3A%22unlock%20time%22%2C%22value%22%3A%22",
                    string.concat(
                        year.toString(),
                        "-",
                        month.toString(),
                        "-",
                        day.toString()
                    ),
                    "%22%7D%2C%7B%22trait_type%22%3A%22logo%20count%22%2C%22value%22%3A",
                    MetadataLib.uint2str(
                        MetadataLib.getNumberOfVs(isVRendered)
                    ),
                    "%7D%5D%2C"
                ),
                string.concat(
                    compiler.BEGIN_METADATA_VAR("name", false),
                    "VeVault20%23",
                    tokenIdStr,
                    "%22" // no trailing comma for last element
                ),
                compiler.END_JSON()
            );
    }
}
