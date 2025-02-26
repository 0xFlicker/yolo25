// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {VeVaultStake} from "../src/VeVaultStake.sol";
import {DataChunkCompiler} from "../src/metadata/DataChunkCompiler.sol";
import {VeVaultRendererMetadata} from "../src/metadata/VeVaultRenderer_metadata.sol";
import {Yolo} from "../src/Yolo.sol";

contract DeployStuxScript is Script {
    Yolo public yolo;
    VeVaultStake public veVaultStake;

    function setUp() public {}

    function run() public {
        vm.startBroadcast();
        address veNFT = 0xe5F7e78122BB094d711d5f534070B61501Dd5EEC;
        yolo = new Yolo(veNFT);
        DataChunkCompiler compiler = new DataChunkCompiler();
        VeVaultRendererMetadata metadata = new VeVaultRendererMetadata(
            address(compiler),
            address(yolo)
        );

        veVaultStake = new VeVaultStake(
            address(veNFT),
            address(yolo),
            address(metadata)
        );

        yolo.grantRole(yolo._VAULT_ROLE(), address(veVaultStake));

        vm.stopBroadcast();
    }
}
