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
        address veNFT = 0xeBf418Fe2512e7E6bd9b87a8F0f294aCDC67e6B4;
        yolo = new Yolo(veNFT);
        DataChunkCompiler compiler = new DataChunkCompiler();
        VeVaultRendererImage image = new VeVaultRendererImage("AERO");
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
