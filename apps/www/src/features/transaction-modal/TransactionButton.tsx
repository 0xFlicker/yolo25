"use client";

import { FC, useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import { WaitForIt } from "@/components/WaitForIt";
import { useTransactions } from "./TransactionContext";
import { ModalTransaction, TransactionItem } from "./TransactionModal";

export const TransactionButton: FC = () => {
  const { transactions, removeTransaction, isOpen, openModal, closeModal } =
    useTransactions();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const hasActiveTransactions = transactions.length > 0;
  const onConfirmed = useCallback(
    (tx: ModalTransaction) => {
      removeTransaction(tx.id);
    },
    [removeTransaction]
  );
  const modalContent = isOpen && hasActiveTransactions && (
    <div
      className="fixed z-50 bg-white rounded-xl shadow-2xl min-w-[320px] max-w-lg"
      style={{
        position: "absolute",
        top: buttonRef.current ? buttonRef.current.offsetHeight + 8 : 0,
        right: 0,
      }}
    >
      <div className="p-6">
        <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-100">
          <svg
            className="w-6 h-6 text-gray-900"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
            />
          </svg>
          <h2 className="text-xl font-semibold text-gray-900">Transactions</h2>
        </div>

        <div className="space-y-4">
          {transactions.map((tx) => (
            <TransactionItem
              key={tx.hash ?? tx.id}
              modalTransaction={tx}
              onConfirmed={onConfirmed}
            />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        className={`relative rounded-md px-4 py-2 ${
          hasActiveTransactions ? "bg-gray-100" : "border border-gray-300"
        }`}
        onClick={() => (isOpen ? closeModal() : openModal())}
      >
        {hasActiveTransactions ? <WaitForIt size="small" /> : "TXs"}
      </button>
      {typeof window !== "undefined" && buttonRef.current && modalContent
        ? createPortal(modalContent, buttonRef.current)
        : null}
    </div>
  );
};
