## Deploy

Copy the .env.example file to .env and fill in the values.

Run `source .env` to load the environment variables.

### Sepolia

Sepolia contains a mock veNFT called veStuxNet. This NFT was only used to test the protocol.

The rest of the contracts can be deployed with:

```bash
forge script --verifier custom --verify --verifier-url $SEPOLIA_ETHERSCAN_VERIFIER_URL --verifier-api-key $SEPOLIA_ETHERSCAN_API_KEY --broadcast --rpc-url $SEPOLIA_RPC_URL --chain 11155111 script/DeployStux.sol
```

You will need to verify the MetadataLib separately.

```bash
forge verify-contract --verifier custom --verifier-url $SEPOLIA_ETHERSCAN_VERIFIER_URL --verifier-api-key $SEPOLIA_ETHERSCAN_API_KEY --chain 11155111 $METADATA_LIB_ADDRESS src/metadata/MetadataLib.sol:MetadataLib
```

Now, you can mint some test veStuxNet NFTs.

```bash
ast send --rpc-url $SEPOLIA_RPC_URL --private-key $DEPLOYER_PRIVATE_KEY 0xe5F7e78122BB094d711d5f534070B61501Dd5EEC $(cast calldata "adminMint(address,uint256,int128,uint256)" $TO_ADDRESS 2 10000000000000000000 1772058221)
```

### Base (Tenderly)

```bash
forge script --verify --verifier-url $TENDERLY_VIRTUAL_TESTNET_RPC_URL/verify/etherscan --etherscan-api-key $TENDERLY_ACCESS_KEY --broadcast --rpc-url $TENDERLY_VIRTUAL_TESTNET_RPC_URL --chain 8453 script/DeployAero.sol
```

Use tenderly to airdrop eth/aero (if needed)

Aero token address: 0x940181a94a35a4569e4529a3cdfb74e38fd98631

```bash
cast send --rpc-url $TENDERLY_VIRTUAL_TESTNET_RPC_URL --private-key $DEPLOYER_PRIVATE_KEY 0x940181a94a35a4569e4529a3cdfb74e38fd98631 $(cast calldata "approve(address,uint256)" 0xebf418fe2512e7e6bd9b87a8f0f294acdc67e6b4 $(cast --to-wei 10))
cast send --rpc-url $TENDERLY_VIRTUAL_TESTNET_RPC_URL --private-key $DEPLOYER_PRIVATE_KEY 0xebf418fe2512e7e6bd9b87a8f0f294acdc67e6b4 $(cast calldata "createLock(uint256,uint256)" $(cast --to-wei 10) 126144000)
```
