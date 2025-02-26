import { FC } from "react";
import NextLink from "next/link";


export const MenuItem: FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => (
  <li className="list-none">
    <NextLink
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center p-2 hover:bg-gray-100 transition-colors duration-200"
    >
      {children}
    </NextLink>
  </li>
);

export const MenuItemText: FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <span className="ml-auto text-right text-blue-600 hover:text-blue-800">
    {children}
  </span>
);
