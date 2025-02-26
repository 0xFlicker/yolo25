"use client";

import { FC, useCallback } from "react";
import { TransactionProgress } from "./TransactionProgress";

export type ModalTransaction<S = string, T = unknown> = {
  id: S;
  hash?: `0x${string}`;
  shortDescription: string;
  longDescription?: string;
  context?: T;
};

export type AnchorOrigin = {
  vertical: "top" | "center" | "bottom";
  horizontal: "left" | "center" | "right";
};

export const TransactionItem: FC<{
  modalTransaction: ModalTransaction;
  onConfirmed: (tx: ModalTransaction) => void;
}> = ({ modalTransaction, onConfirmed: doConfirmed }) => {
  const onConfirmed = useCallback(() => {
    doConfirmed(modalTransaction);
  }, [doConfirmed, modalTransaction]);

  return (
    <div className="bg-gray-50 rounded-lg p-4">
      <p className="mb-2 text-sm font-medium text-gray-800">
        {`${modalTransaction.hash ? "Submitting" : "Awaiting"} ${modalTransaction.shortDescription}`}
      </p>
      {modalTransaction.hash && (
        <TransactionProgress
          transactionHash={modalTransaction.hash}
          onConfirmed={onConfirmed}
        />
      )}
    </div>
  );
};
