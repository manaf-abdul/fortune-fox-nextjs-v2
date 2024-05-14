import React from "react";

export default function NavBar({ setIsOpen }: { setIsOpen: any }) {
  return (
    <nav className="p-8 flex justify-between items-center md:p-12">
      <a href="#">
        <h1 className="text-stroke-1 text-4xl  lg:text-6xl hover:text-white/80">
          𝖋𝖔𝖗𝖙𝖚𝖓𝖊 𝖋𝖔𝖝
        </h1>
      </a>
      <div className="">
        <img
          src="assets/menu.svg"
          alt="Menu"
          className="md:hidden cursor-pointer"
          onClick={() => setIsOpen(true)}
        />

        <div className="md:flex flex-row gap-4 lg:gap-6 xl:gap-16 items-center hidden">
          <a href="#" className="hover:text-white/80 text-lg">
            Home
          </a>
          <a href="#about" className="hover:text-white/80 text-lg">
            About
          </a>
          <a href="#tokenomics" className="hover:text-white/80 text-lg">
            Tokenomics
          </a>

          <a className="hover:text-white/80 text-lg" target="_blank">
            Telegram
          </a>

          <a
            href="https://jup.ag/swap/SOL-BOJACK_EUeJuDgVxx83953XeBHS3fzY7tneitb19dmdPrTMHGqd"
            target="_blank"
            className="hover:bg-white hover:text-black rounded-2xl px-3 py-2 text-lg border-2 border-solid border-white"
          >
            Buy Fortune Fox
          </a>
        </div>
      </div>
    </nav>
  );
}
