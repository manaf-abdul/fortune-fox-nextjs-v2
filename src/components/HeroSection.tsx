import React from "react";

interface HeroSectionProps {
  handleModalOpen: () => void;
  // handleModalOpen: (data: any) => string | undefined;
}

export default function HeroSection({ handleModalOpen }: HeroSectionProps) {
  return (
    <div className="min-h-max">
      <img
        src="assets/17.png"
        alt=""
        className="picture absolute bottom-44 md:bottom-12  max-sm:transform max-sm:translate-x-[50%] right-[50%]  lg:bottom-0 md:right-20 lg:right-60 w-72"
      />
      <div className="absolute bottom-20 lg:bottom-0   w-full p-8 pb-0 md:pb-12 md:p-12 md:bottom-0">
        <h3 className="text-4xl mb-7 font-bold mx-auto">Fortune Fox</h3>
        <h3 className="text-4xl mb-7 font-bold mx-auto">Now on Solana!</h3>
        <div className="w-full  flex flex-col md:flex-row gap-4">
          <button
            className="flex hover:bg-white/80 hover:text-black rounded-3xl p-3 px-6 text-2xl bg-white text-black min-w-full text-center md:min-w-[260px] gap-3 max-w-fit"
            onClick={handleModalOpen}
          >
            <div className="flex gap-3 mx-auto">
              Buy on Jupiter
              <img src="assets/explore.svg" alt="" />
            </div>
          </button>
          <a
            href="https://x.com/Fortune_Fox_?t=L8UgfQGnerqHvpUZD08VZQ&s=08 "
            target="_blank"
            className="hover:bg-white/80 hover:text-black rounded-3xl p-3 px-6 text-2xl bg-white text-black min-w-full text-center md:min-w-[260px] max-w-fit"
          >
            Follow on Twitter
          </a>
        </div>
      </div>
    </div>
  );
}
