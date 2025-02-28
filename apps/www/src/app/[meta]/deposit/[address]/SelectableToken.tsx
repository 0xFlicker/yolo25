"use client";

import React, { FC, useCallback, useEffect, useState } from "react";
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
  fetchTokenImage,
}: {
  tokenId: bigint;
  onTokenSelected: (tokenId: bigint) => void;
  onTokenUnselected: (tokenId: bigint) => void;
  isSelected: boolean;
  isPending: boolean;
  fetchTokenImage: (tokenId: bigint) => Promise<string>;
}) => {
  const [hasHovered, setHasHovered] = useState(false);
  const [tokenImage, setTokenImage] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadImage = async () => {
      setIsLoading(true);
      try {
        const svg = await fetchTokenImage(tokenId);
        setTokenImage(svg);
      } catch (error) {
        console.error("Failed to load token image:", error);
      }
      setIsLoading(false);
    };
    loadImage();
  }, [tokenId, fetchTokenImage]);

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
          "w-[400px] h-[400px] bg-gray-800 flex flex-col items-center justify-center rounded-lg border-4 transition-all duration-300",
          isSelected || hasHovered ? "border-red-400" : "border-transparent"
        )}
      >
        {isLoading ? (
          <CircularProgress />
        ) : (
          <>
            {tokenImage && (
              <div
                className="w-[300px] h-[300px] mb-4"
                dangerouslySetInnerHTML={{ __html: tokenImage }}
              />
            )}
            <span className="text-2xl font-bold text-gray-400">
              #{tokenId.toString()}
            </span>
          </>
        )}
      </div>

      {isPending && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <CircularProgress />
        </div>
      )}
    </div>
  );
};
