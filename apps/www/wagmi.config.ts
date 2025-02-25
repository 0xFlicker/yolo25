import { defineConfig } from "@wagmi/cli";
import { foundry } from "@wagmi/cli/plugins";

export default defineConfig({
  out: "src/wagmi/generated.ts",
  contracts: [],
  plugins: [
    foundry({
      project: "../../packages/contracts",
      include: [
        "Yolo.sol/**",
        "YoloStake.sol/**",
        "IYolo.sol/**",
        "IVoteEscrow.sol/**",
        "veStuxNet.sol/**",
      ],
    }),
  ],
});
