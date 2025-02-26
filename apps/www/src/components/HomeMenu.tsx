import { FC, PropsWithChildren } from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Fragment } from "react";

interface HomeMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HomeMenu: FC<PropsWithChildren<HomeMenuProps>> = ({
  isOpen,
  onClose,
  children,
}) => {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <TransitionChild
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full pt-20 lg:pt-24">
              <TransitionChild
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <DialogPanel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col bg-gray-800 shadow-xl">
                    <div className="px-4 sm:px-6 py-6">
                      <DialogTitle className="text-base font-semibold leading-6 text-gray-100">
                        Links
                      </DialogTitle>
                    </div>
                    <div className="relative flex-1 px-4 sm:px-6 overflow-y-auto text-gray-300">
                      {children}
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
