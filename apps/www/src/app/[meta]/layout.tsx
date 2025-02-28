import { AppMain } from "@/components/AppMain";
import { TransactionButton } from "@/features/transaction-modal/TransactionButton";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AppMain headerRight={<TransactionButton />}>
      {/* <div className="container mx-auto px-4 py-8 min-h-[calc(100vh-6rem)]"> */}
      {children}
      {/* </div> */}
    </AppMain>
  );
}
