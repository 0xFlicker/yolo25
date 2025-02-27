"use client";

import { ConnectKitButton } from "connectkit";
import { WaitForIt } from "@/components/WaitForIt";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";

export function ConnectCard() {
  const [hasRendered, setHasRendered] = useState(false);
  const { isConnected, isConnecting: accountConnecting } = useAccount();

  useEffect(() => {
    setHasRendered(true);
  }, []);

  if (!hasRendered || accountConnecting) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="bg-white/5 rounded-lg p-8 text-center max-w-md">
          <WaitForIt />
        </div>
      </div>
    );
  }

  if (isConnected) {
    return null;
  }

  return (
    <ConnectKitButton.Custom>
      {({ show, isConnecting }) => {
        return (
          <>
            {!isConnecting && (
              <>
                <div className="flex items-center justify-center min-h-[50vh]">
                  <div className="bg-white/5 rounded-lg p-8 text-center max-w-md">
                    <h2 className="text-2xl font-semibold mb-4">
                      Connect Your Wallet
                    </h2>
                    <p className="text-gray-400 mb-6">
                      Connect your wallet to view and manage your deposits
                    </p>
                    <button
                      onClick={show}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      CONNECT
                    </button>
                  </div>
                </div>
              </>
            )}
            {isConnecting && <WaitForIt />}
          </>
        );
      }}
    </ConnectKitButton.Custom>
  );
}
