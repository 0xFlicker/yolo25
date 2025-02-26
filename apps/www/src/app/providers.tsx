"use client";

import { siweClient } from "@/wagmi/siweClient";
import { SIWEConfig } from "connectkit";
import {
  WagmiProvider,
  createConfig,
  fallback,
  http,
  cookieStorage,
  createStorage,
} from "wagmi";
import { base, sepolia } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC, PropsWithChildren, useMemo } from "react";
import { SiweMessage } from "siwe";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { Chain, Transport } from "viem";
import { SerializedSession } from "@/wagmi/session";
import { NotificationsProvider } from "@/features/notifications/Context";
import { Notifications } from "@/features/notifications/Notifications";

export const baseSepolia = {
  chains: [base, sepolia],
  transports: {
    [base.id]: fallback(
      JSON.parse(process.env.NEXT_PUBLIC_BASE_RPC_JSON!).map((rpc) =>
        http(rpc, { batch: true })
      )
    ),
    [sepolia.id]: fallback(
      JSON.parse(process.env.NEXT_PUBLIC_SEPOLIA_RPC_JSON!).map((rpc) =>
        http(rpc, { batch: true })
      )
    ),
  },
} as const;

const SIWE_API_PATH = "/siwe";

export const defaultConfig = {
  ...baseSepolia,
  // Required API Keys
  walletConnectProjectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,
  multiInjectedProviderDiscovery: true,

  // Required App Info
  appName: "Fame Lady Society",

  // Optional App Info
  appDescription: "The good place",
  appUrl: "https://www.fameladysociety.com", // your app's url
  appIcon: "https://www.fameladysociety.com/images/fame/bala.png",

  ssr: true,

  storage: createStorage({
    storage: cookieStorage,
  }),
};

const siweConfig = {
  getNonce: async () => {
    const res = await fetch(SIWE_API_PATH, { method: "PUT" });
    if (!res.ok) throw new Error("Failed to fetch SIWE nonce");
    return res.text();
  },
  createMessage: ({ nonce, address, chainId }) => {
    return new SiweMessage({
      nonce,
      chainId,
      address,
      version: "1",
      uri: window.location.origin,
      domain: window.location.host,
      statement: "Sign In With Ethereum to prove you control this wallet.",
    }).prepareMessage();
  },
  verifyMessage: async ({ message, signature }) => {
    const res = await fetch(SIWE_API_PATH, {
      method: "POST",
      body: JSON.stringify({ message, signature }),
      headers: { "Content-Type": "application/json" },
    });
    return res.ok;
  },
  getSession: async () => {
    const res = await fetch(SIWE_API_PATH);
    if (!res.ok) throw new Error("Failed to fetch SIWE session");
    const { address, chainId } = (await res.json()) as SerializedSession;
    return address && chainId ? { address, chainId } : null;
  },
  signOut: async () => {
    const res = await fetch(SIWE_API_PATH, { method: "DELETE" });
    return res.ok;
  },
} satisfies SIWEConfig;

const queryClient = new QueryClient();

const Web3Provider: FC<
  PropsWithChildren<{
    siwe?: boolean;
    transports?: Record<number, Transport>;
    chains: readonly [Chain, ...Chain[]];
  }>
> = ({ children, siwe = false, transports, chains }) => {
  const config = useMemo(
    () =>
      createConfig(
        getDefaultConfig({
          ...defaultConfig,
          ...(chains && chains.length && { chains }),
          ...(transports && { transports }),
        })
      ),
    [chains, transports]
  );
  // const initialState = cookieToInitialState(config, headers().get("cookie"));
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <siweClient.Provider
          enabled={siwe}
          nonceRefetchInterval={300000} // in milliseconds, defaults to 5 minutes
          sessionRefetchInterval={300000} // in milliseconds, defaults to 5 minutes
          signOutOnDisconnect={true} // defaults true
          signOutOnAccountChange={true} // defaults true
          signOutOnNetworkChange={true} // defaults true
          {...siweConfig}
        >
          <ConnectKitProvider>
            <NotificationsProvider>
              {children}
              <Notifications />
            </NotificationsProvider>
          </ConnectKitProvider>
        </siweClient.Provider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export const Providers: FC<
  PropsWithChildren<{
    siwe?: boolean;
    base?: boolean;
    sepolia?: boolean;
  }>
> = ({ siwe, children, base, sepolia }) => {
  const chains = useMemo<readonly [Chain, ...Chain[]]>(() => {
    const chainSet = new Set<Chain>();

    if (base || sepolia) {
      for (const chain of baseSepolia.chains) {
        chainSet.add(chain);
      }
    }

    return Array.from(chainSet) as [Chain, ...Chain[]];
  }, [base, sepolia]);

  const transports = useMemo(() => {
    const transportMap: Record<number, Transport> = {};
    if (base || sepolia) {
      for (const [chainId, transport] of Object.entries(
        baseSepolia.transports
      )) {
        transportMap[Number(chainId)] = transport;
      }
    }
    return transportMap;
  }, [base, sepolia]);

  return (
    <Web3Provider siwe={siwe} chains={chains} transports={transports}>
      {children}
    </Web3Provider>
  );
};
