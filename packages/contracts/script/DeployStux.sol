// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {VmSafe} from "forge-std/Vm.sol";
import {VeVaultStake} from "../src/VeVaultStake.sol";
import {DataChunkCompiler} from "../src/metadata/DataChunkCompiler.sol";
import {VeVaultRendererMetadata} from "../src/metadata/VeVaultRenderer_metadata.sol";
import {VeVaultRendererImage} from "../src/metadata/VeVaultRenderer_image.sol";
import {Yolo} from "../src/Yolo.sol";

contract DeployStuxScript is Script {
    Yolo public yolo;
    VeVaultStake public veVaultStake;

    function setUp() public {}

    function run() public {
        uint256 deployerPrivateKey = vm.envUint("DEPLOYER_PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);
        address veNFT = 0xF8053E811889bE6a86e087276419Be4e5d3C2637;
        yolo = new Yolo(veNFT);
        DataChunkCompiler compiler = new DataChunkCompiler();
        VeVaultRendererImage image = new VeVaultRendererImage("STUX");
        VeVaultRendererMetadata metadata = new VeVaultRendererMetadata(
            address(compiler),
            address(image)
        );

        veVaultStake = new VeVaultStake(
            address(veNFT),
            address(yolo),
            address(metadata)
        );

        yolo.grantRoles(address(veVaultStake), yolo._VAULT_ROLE());
        yolo.renounceOwnership();

        vm.stopBroadcast();
    }
}
