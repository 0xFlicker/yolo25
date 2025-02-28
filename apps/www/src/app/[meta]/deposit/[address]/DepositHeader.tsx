"use client";

import { FC } from "react";
import { Address, formatUnits } from "viem";
import { useReadContracts } from "wagmi";
import { useSelectable } from "./context";
import { iVotingEscrowAbi, veVaultStakeAbi } from "@/wagmi/generated";

type DepositHeaderProps = {
  availableCount: number;
  totalValue: bigint;
  metaVeNft: Address;
  veNftSymbol: string;
  ourTokenSymbol: string;
  ourTokenName: string;
  ourTokenDecimals: number;
};

export const DepositHeader: FC<DepositHeaderProps> = ({
  totalValue,
  metaVeNft,
  ourTokenSymbol,
  ourTokenName,
  ourTokenDecimals,
}) => {
  const { selectedTokenIds } = useSelectable();
  const { data: selectedValue } = useReadContracts({
    allowFailure: false,
    contracts: selectedTokenIds.map((tokenId) => ({
      address: metaVeNft,
      abi: iVotingEscrowAbi,
      functionName: "locked",
      args: [tokenId],
    })) as {
      address: Address;
      abi: typeof iVotingEscrowAbi;
      functionName: "locked";
      args: [bigint];
    }[],
  });

  const totalSelectedValue = selectedValue?.reduce((acc, token) => {
    return acc + token.amount;
  }, 0n);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="flex flex-col">
          <span className="text-sm text-gray-500">Total Value Available</span>
          <span
            className="text-2xl font-bold text-gray-800"
            title={ourTokenName}
          >
            {formatUnits(totalValue, ourTokenDecimals)} {ourTokenSymbol}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-gray-500">Selected Value</span>
          <span
            className="text-2xl font-bold text-gray-800"
            title={ourTokenName}
          >
            {totalSelectedValue
              ? formatUnits(totalSelectedValue, ourTokenDecimals)
              : 0}{" "}
            {ourTokenSymbol}
          </span>
        </div>
      </div>
    </div>
  );
};
