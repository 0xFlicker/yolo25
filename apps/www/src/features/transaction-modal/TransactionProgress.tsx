import { FC, useEffect } from "react";
import { WaitForIt } from "@/components/WaitForIt";

import { useWaitForTransactionReceipt } from "wagmi";

// Transactions have three steps:
// 1. Waiting for the user to sign the transaction
// 2. Waiting for the transaction to be submitted
// 3. Waiting for the transaction to be confirmed
// This component displays a linear progress bar over two circles to indicate:
// 1. The user has signed the transaction (33%)
// 2. The transaction has been mined (66%) and is waiting for confirmation
// 3. The transaction has been confirmed (100%)

export const TransactionProgress: FC<{
  transactionHash?: `0x${string}`;
  onConfirmed?: () => void;
}> = ({ transactionHash, onConfirmed }) => {
  const {
    data: transactionResult,
    isFetching,
    isPending,
  } = useWaitForTransactionReceipt({
    hash: transactionHash,
  });

  useEffect(() => {
    if (transactionResult) {
      setTimeout(() => {
        onConfirmed?.();
      }, 1000);
    }
  }, [onConfirmed, transactionResult]);

  const status = (() => {
    if (isPending && isFetching) {
      return "broadcasting";
    }
    return;
  })();

  const progress = (() => {
    if (isPending && !isFetching) {
      return 0;
    }
    if (isPending && isFetching) {
      return 50;
    }
    if (transactionResult) {
      return 100;
    }
    return 0;
  })();

  return (
    <div className="relative flex items-center">
      <div className="relative mr-4 flex items-center">
        {status === "broadcasting" ? (
          <WaitForIt size="small" />
        ) : (
          <div className="h-8 w-8 rounded-full border-4 border-gray-200" />
        )}
      </div>
      <div className="relative flex-grow">
        <div className="h-2 w-full rounded-full bg-gray-200">
          <div
            className="h-full rounded-full bg-blue-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="absolute left-full top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div
            className={`h-4 w-4 rounded-full border-2 ${
              transactionHash ? "border-blue-500" : "border-gray-300"
            }`}
          />
        </div>
      </div>
    </div>
  );
};
