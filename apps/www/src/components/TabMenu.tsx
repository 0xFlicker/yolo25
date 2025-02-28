"use client";

import { FC } from "react";
import {
  ArrowUpTrayIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/outline";
import { useParams, usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

export const TabMenu: FC = () => {
  const params = useParams();
  const meta = Array.isArray(params.meta) ? params.meta[0] : params.meta;

  const pathname = usePathname();

  const isDeposit = pathname.includes("/deposit");
  const isRedeem = pathname.includes("/redeem");

  if (!meta) return null;

  return (
    <div className="flex justify-center border-b border-gray-700">
      <Link
        href={`/${meta}/deposit`}
        className={clsx(
          "relative flex items-center gap-2 px-4 py-2 text-sm font-medium border-b-2",
          isDeposit
            ? "border-indigo-500 text-white"
            : "border-transparent text-gray-300 hover:text-gray-200"
        )}
      >
        <ArrowDownTrayIcon className="h-5 w-5" />
        Deposit
      </Link>
      <Link
        href={`/${meta}/redeem`}
        className={clsx(
          "relative flex items-center gap-2 px-4 py-2 text-sm font-medium border-b-2",
          isRedeem
            ? "border-indigo-500 text-white"
            : "border-transparent text-gray-300 hover:text-gray-200"
        )}
      >
        <ArrowUpTrayIcon className="h-5 w-5" />
        Redeem
      </Link>
    </div>
  );
};
