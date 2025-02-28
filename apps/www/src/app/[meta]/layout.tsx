import { AppMain } from "@/components/AppMain";
import { Providers } from "./providers";
import { TransactionButton } from "@/features/transaction-modal/TransactionButton";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Providers sepolia base>
      <AppMain headerRight={<TransactionButton />}>{children}</AppMain>
    </Providers>
  );
}
