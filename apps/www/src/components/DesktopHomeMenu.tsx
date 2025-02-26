import React, { FC, PropsWithChildren } from "react";

export const DesktopHomeMenu: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="bg-gray-800 shadow-xl w-96 flex flex-col h-full">
      <div className="flex-grow px-4 sm:px-6 overflow-y-auto text-gray-300 mt-6">
        {children}
      </div>
    </div>
  );
};
