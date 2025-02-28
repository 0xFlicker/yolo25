import { defineConfig } from "@wagmi/cli";
import { foundry, react } from "@wagmi/cli/plugins";
import { erc721Abi } from "viem";

export default defineConfig({
  out: "src/wagmi/generated.ts",
  contracts: [
    {
      abi: erc721Abi,
      name: "IERC721",
    },
  ],
  plugins: [
    foundry({
      project: "../../packages/contracts",
      include: [
        "Yolo.sol/**",
        "VeVaultDeposit.sol/**",
        "IYolo.sol/**",
        "IVotingEscrow.sol/**",
        "veStuxNet.sol/**",
      ],
    }),
    react(),
  ],
});
