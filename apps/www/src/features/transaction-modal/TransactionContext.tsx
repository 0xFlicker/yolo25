import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";
import { ModalTransaction } from "./TransactionModal";

type TransactionContextType = {
  transactions: ModalTransaction[];
  addTransaction: (transaction: Omit<ModalTransaction, "hash">) => void;
  updateTransactionHash: (id: string, hash: `0x${string}`) => void;
  removeTransaction: (id: string) => void;
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

const TransactionContext = createContext<TransactionContextType | undefined>(
  undefined
);

export const TransactionProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [transactions, setTransactions] = useState<ModalTransaction[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  const addTransaction = useCallback(
    (transaction: Omit<ModalTransaction, "hash">) => {
      setTransactions((prev) => [
        {
          ...transaction,
          hash: undefined,
        },
        ...prev,
      ]);
      setIsOpen(true);
    },
    []
  );

  const updateTransactionHash = useCallback(
    (id: string, hash: `0x${string}`) => {
      setTransactions((prev) =>
        prev.map((tx) => (tx.id === id && !tx.hash ? { ...tx, hash } : tx))
      );
    },
    []
  );

  const removeTransaction = useCallback((id: string) => {
    setTransactions((prev) => {
      const newTransactions = prev.filter((tx) => tx.id !== id);
      if (newTransactions.length === 0) {
        setIsOpen(false);
      }
      return newTransactions;
    });
  }, []);

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        addTransaction,
        updateTransactionHash,
        removeTransaction,
        isOpen,
        openModal,
        closeModal,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransactions = () => {
  const context = useContext(TransactionContext);
  if (!context) {
    throw new Error(
      "useTransactions must be used within a TransactionProvider"
    );
  }
  return context;
};
