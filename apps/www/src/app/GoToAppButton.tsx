import React, { FC } from "react";
import Link from "next/link";

export const GoToAppButton: FC = () => {
  return (
    <Link
      href="/aerodrome/deposit"
      className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-primary text-black1 gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
    >
      Go to App
    </Link>
  );
};
