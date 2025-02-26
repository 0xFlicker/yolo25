import { FC } from "react";
import NextLink from "next/link";

export const MenuItem: FC<{
  href: string;
  disabled: boolean;
  icon: React.ReactNode;
  text: string;
}> = ({ href, disabled, icon, text }) => (
  <NextLink
    href={href}
    className={`flex items-center p-2 hover:bg-gray-700 ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
  >
    <span className="mr-4 text-white">{icon}</span>
    <span className="text-right text-white">{text}</span>
  </NextLink>
);
