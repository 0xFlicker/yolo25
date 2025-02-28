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
        address aero = 0x940181a94A35A4569E4529A3CDfB74e38FD98631;
        yolo = new Yolo(aero);
        // yolo = Yolo(0xCBb37B3d6664A4736B05FC516a7C2b4062F73f4C);
        // DataChunkCompiler compiler = new DataChunkCompiler();
        // VeVaultRendererImage image = new VeVaultRendererImage("AERO");
        // VeVaultRendererMetadata metadata = new VeVaultRendererMetadata(
        //     address(compiler),
        //     address(image)
        // );

        VeVaultRendererMetadata metadata = VeVaultRendererMetadata(
            0x230936B2d23EF8ce7B9Ec6092ad9F7Ac6505584F
        );

        veVaultStake = new VeVaultStake(
            address(veNFT),
            address(yolo),
            address(metadata)
        );

        yolo.grantRoles(address(veVaultStake), yolo._VAULT_ROLE());
        // yolo.renounceOwnership();

        vm.stopBroadcast();
    }
}
