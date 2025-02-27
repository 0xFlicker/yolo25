import React from "react";
import { SelectableToken } from "./SelectableToken";

export const SelectableGrid = ({
  tokenIds,
  selectedTokenIds,
  pendingTokenIds,
  onTokenSelected,
  onTokenUnselected,
}: {
  tokenIds: bigint[];
  selectedTokenIds: bigint[];
  pendingTokenIds: bigint[];
  onTokenSelected: (tokenId: bigint) => void;
  onTokenUnselected: (tokenId: bigint) => void;
}) => {
  return (
    <div className="flex flex-wrap gap-4">
      {tokenIds.map((tokenId) => (
        <SelectableToken
          key={tokenId.toString()}
          tokenId={tokenId}
          onTokenSelected={onTokenSelected}
          onTokenUnselected={onTokenUnselected}
          isSelected={selectedTokenIds.includes(tokenId)}
          isPending={pendingTokenIds.includes(tokenId)}
        />
      ))}
    </div>
  );
};
