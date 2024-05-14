import React from "react";

interface MobileMenuProps {
  setIsOpen: boolean;
  handleModalOpen: () => void;
  handleModalOpen: (data: any) => string | undefined;
}

export default function MobileMenu({
  setIsOpen,
  handleModalOpen,
}: MobileMenuProps) {
  return (
    <div className=" bg-pink-600 w-60 float-right h-full fixed top-0 right-0 z-30">
      {/* for Mobile */}
      <img
        src="assets/close.svg"
        alt="Close"
        className="md:hidden p-8  cursor-pointer"
        onClick={() => setIsOpen(false)}
      />

      <div className="flex flex-col gap-4 md:hidden p-8">
        <a
          href="#"
          className=" text-lg hover:bg-white hover:text-pink-600 rounded-2xl px-3 py-2"
          onClick={() => setIsOpen(false)}
        >
          Home
        </a>
        <a
          href="#about"
          className=" text-lg hover:bg-white hover:text-pink-600 rounded-2xl px-3 py-2"
          onClick={() => setIsOpen(false)}
        >
          About
        </a>
        <a
          href="#tokenomics"
          className="text-lg hover:bg-white hover:text-pink-600 rounded-2xl px-3 py-2"
          onClick={() => setIsOpen(false)}
        >
          Tokenomics
        </a>

        <a
          className="text-lg hover:bg-white hover:text-pink-600 rounded-2xl px-3 py-2"
          onClick={() => setIsOpen(false)}
          target="_blank"
        >
          Telegram
        </a>

        <button
          className="hover:bg-white hover:text-black rounded-2xl px-3 py-2 text-lg border-2 border-solid border-white"
          onClick={() => handleModalOpen}
        >
          Buy Fortune Fox
        </button>
      </div>
    </div>
  );
}
