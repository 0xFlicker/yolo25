import { AppMain } from "@/components/AppMain";
import { TransactionButton } from "@/features/transaction-modal/TransactionButton";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AppMain title="VeVault" headerRight={<TransactionButton />}>
      {children}
    </AppMain>
  );
}
