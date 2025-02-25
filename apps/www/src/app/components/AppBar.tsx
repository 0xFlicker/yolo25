import { FC, ReactNode } from "react";
import { AppBarClientLeft, AppBarClientRight } from "./AppBarClient";

interface AppBarProps {
  menu?: ReactNode;
  title?: ReactNode;
  right?: ReactNode;
  disableConnect?: boolean;
}

export const AppBar: FC<AppBarProps> = ({
  disableConnect,
  menu,
  title,
  right,
}) => {
  return (
    <header className="bg-gray-900 text-white shadow full-width flex items-center h-20 lg:h-24">
      <div className="flex flex-row items-center justify-start gap-4 mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <AppBarClientLeft menu={menu} />
        {title}
        <div className="flex-grow" />
        {right}
        <AppBarClientRight disableConnect={disableConnect} />
      </div>
    </header>
  );
};
