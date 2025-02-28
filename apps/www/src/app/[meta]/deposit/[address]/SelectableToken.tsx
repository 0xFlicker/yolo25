"use client";

import React, { FC, useCallback, useState } from "react";
import cn from "classnames";

const CircularProgress: FC = () => (
  <div className="w-8 h-8 border-4 border-gray-200 border-t-red-400 rounded-full animate-spin"></div>
);

export const SelectableToken = ({
  tokenId,
  onTokenSelected,
  onTokenUnselected,
  isSelected,
  isPending,
}: {
  tokenId: bigint;
  onTokenSelected: (tokenId: bigint) => void;
  onTokenUnselected: (tokenId: bigint) => void;
  isSelected: boolean;
  isPending: boolean;
}) => {
  const [hasHovered, setHasHovered] = useState(false);
  const handleClick = useCallback(() => {
    if (isSelected) {
      onTokenUnselected(tokenId);
    } else {
      onTokenSelected(tokenId);
    }
  }, [isSelected, onTokenSelected, onTokenUnselected, tokenId]);

  const handleHoverIn = useCallback(() => {
    setHasHovered(true);
  }, []);

  const handleHoverOut = useCallback(() => {
    setHasHovered(false);
  }, []);

  return (
    <div className="relative">
      <div
        onClick={handleClick}
        onMouseEnter={handleHoverIn}
        onMouseLeave={handleHoverOut}
        className={cn(
          "w-[400px] h-[400px] bg-gray-800 flex items-center justify-center rounded-lg border-4 transition-all duration-300",
          isSelected || hasHovered ? "border-red-400" : "border-transparent"
        )}
      >
        <span className="text-2xl font-bold text-gray-400">
          #{tokenId.toString()}
        </span>
      </div>

      {isPending && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <CircularProgress />
        </div>
      )}
    </div>
  );
};
