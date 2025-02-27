# Vote Escrowed Yolo

Yolo is a token of VeVault Industries for the purposes of representing lock veNFTs owned by the protocol. Yolo is created via depositing a veNFT into the protocol and receiving a VeVault NFT in return.

## Contracts

- [VeVaultStake](./src/VeVaultStake.sol) -- Stakes veNFTs and creates VeVault NFTs
- [Yolo](./src/Yolo.sol) -- Redeem VeVault NFTs to mint Yolo

## Deploying

Copy the .env.example file to .env and fill in the values.

Run `source .env` to load the environment variables.

### Sepolia

Sepolia contains a mock veNFT called veStuxNet. This NFT was only used to test the protocol.

The rest of the contracts can be deployed with:

```bash
forge script --verifier custom --verify --verifier-url $SEPOLIA_ETHERSCAN_VERIFIER_URL --verifier-api-key $SEPOLIA_ETHERSCAN_API_KEY --broadcast --rpc-url $SEPOLIA_RPC_URL --chain 11155111 script/DeployStux.sol
```
