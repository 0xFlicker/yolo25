import { FC } from "react";
import { formatUnits } from "viem";

type DepositHeaderProps = {
  availableCount: number;
  selectedCount: number;
  totalValue: bigint;
  selectedValue: bigint;
  veNftSymbol: string;
  ourTokenSymbol: string;
  ourTokenName: string;
  ourTokenDecimals: number;
};

export const DepositHeader: FC<DepositHeaderProps> = ({
  availableCount,
  selectedCount,
  totalValue,
  selectedValue,
  veNftSymbol,
  ourTokenSymbol,
  ourTokenName,
  ourTokenDecimals,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="flex flex-col">
          <span className="text-sm text-gray-500">Available veNFTs</span>
          <span className="text-2xl font-bold">
            {availableCount} {veNftSymbol}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-gray-500">Selected veNFTs</span>
          <span className="text-2xl font-bold">
            {selectedCount} {veNftSymbol}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-gray-500">Total Value Available</span>
          <span className="text-2xl font-bold" title={ourTokenName}>
            {formatUnits(totalValue, ourTokenDecimals)} {ourTokenSymbol}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-gray-500">Selected Value</span>
          <span className="text-2xl font-bold" title={ourTokenName}>
            {formatUnits(selectedValue, ourTokenDecimals)} {ourTokenSymbol}
          </span>
        </div>
      </div>
    </div>
  );
};
