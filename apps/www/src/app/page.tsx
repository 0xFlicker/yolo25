import { AppMain } from "@/components/AppMain";
import Image from "next/image";
import { GoToAppButton } from "./GoToAppButton";

export default function Home() {
  return (
    <AppMain disableConnect headerRight={<GoToAppButton />}>
      <div className="relative min-h-screen">
        <Image
          src="/BG.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
          <Image
            src="/velogo.svg"
            alt="VE Logo"
            width={300}
            height={100}
            priority
            className="w-[400px] sm:w-[500px] md:w-[600px] mb-8"
          />
          <p className="max-w-2xl mx-auto text-lg text-white/90">
            VeVault provides the tools to make veNFT liquidity seamless and
            efficient.
          </p>
        </div>
      </div>
    </AppMain>
  );
}
