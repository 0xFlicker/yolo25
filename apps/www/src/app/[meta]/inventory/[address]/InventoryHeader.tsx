import { FC } from "react";
import { Address, formatUnits } from "viem";
import { useSelectable } from "./context";
import { useReadContracts } from "wagmi";
import { veVaultStakeAbi } from "@/wagmi/generated";

type InventoryHeaderProps = {
  availableCount: number;
  totalValue: bigint;
  redeemableValue: bigint;
  stakerSymbol: string;
  ourTokenSymbol: string;
  ourTokenName: string;
  ourTokenDecimals: number;
  ourStaker: Address;
};

export const InventoryHeader: FC<InventoryHeaderProps> = ({
  ourStaker,
  availableCount,
  totalValue,
  redeemableValue,
  stakerSymbol,
  ourTokenSymbol,
  ourTokenName,
  ourTokenDecimals,
}) => {
  const { selectedTokenIds } = useSelectable();
  const { data: selectedValue } = useReadContracts({
    allowFailure: false,
    contracts: selectedTokenIds.map((tokenId) => ({
      address: ourStaker,
      abi: veVaultStakeAbi,
      functionName: "locked",
      args: [tokenId],
    })),
  });
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="flex flex-col">
          <span className="text-sm text-gray-500">Available veNFTs</span>
          <span className="text-2xl font-bold">
            {selectedCount} / {availableCount} {stakerSymbol}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-gray-500">Selected veNFTs</span>
          <span className="text-2xl font-bold">
            {formatUnits(redeemableValue, ourTokenDecimals)} {ourTokenSymbol}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-gray-500">Total Value Available</span>
          <span className="text-2xl font-bold" title={ourTokenName}>
            {formatUnits(totalValue, ourTokenDecimals)} {ourTokenSymbol}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-gray-500">Redeemable Value</span>
          <span className="text-2xl font-bold" title={ourTokenName}>
            {formatUnits(selectedValue, ourTokenDecimals)} {ourTokenSymbol}
          </span>
        </div>
      </div>
    </div>
  );
};
