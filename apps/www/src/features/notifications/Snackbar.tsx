"use client";

import React, { FC, ReactNode } from "react";

interface SnackbarProps {
  open: boolean;
  message: ReactNode;
  type?: "success" | "error" | "warning" | "info";
  autoHideDuration?: number;
  onClose: (event: React.MouseEvent<HTMLButtonElement>) => void;
  anchorOrigin?: {
    vertical: "top" | "bottom";
    horizontal: "left" | "center" | "right";
  };
  style?: React.CSSProperties;
}

export const Snackbar: FC<SnackbarProps> = ({
  open,
  message,
  type = "info",
  autoHideDuration = 6000,
  onClose,
  anchorOrigin = {
    vertical: "bottom",
    horizontal: "center",
  },
  style,
}) => {
  React.useEffect(() => {
    if (open && autoHideDuration) {
      const timer = setTimeout(() => {
        onClose({} as React.MouseEvent<HTMLButtonElement>);
      }, autoHideDuration);
      return () => clearTimeout(timer);
    }
  }, [open, autoHideDuration, onClose]);

  if (!open) return null;

  const bgColor = {
    success: "bg-green-500",
    error: "bg-red-500",
    warning: "bg-yellow-500",
    info: "bg-blue-500",
  }[type];

  const positionClasses = {
    top: {
      left: "top-4 left-4",
      center: "top-4 left-1/2 -translate-x-1/2",
      right: "top-4 right-4",
    },
    bottom: {
      left: "bottom-4 left-4",
      center: "bottom-4 left-1/2 -translate-x-1/2",
      right: "bottom-4 right-4",
    },
  }[anchorOrigin.vertical][anchorOrigin.horizontal];

  return (
    <div
      className={`fixed ${positionClasses} z-50 min-w-[20rem] max-w-[90vw]`}
      style={style}
    >
      <div
        className={`${bgColor} text-white rounded-lg shadow-lg p-4 flex justify-between items-center`}
      >
        <span>{message}</span>
        <button
          onClick={onClose}
          className="ml-4 text-white hover:text-gray-200 focus:outline-none"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
