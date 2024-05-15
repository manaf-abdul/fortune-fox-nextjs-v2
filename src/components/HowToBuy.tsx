import React from "react";

interface HowToBuyProps {
  handleModalOpen: () => void;
  // handleModalOpen: (data: any) => string | undefined;
}

export default function HowToBuy({ handleModalOpen }: HowToBuyProps) {
  return (
    <section className=" text-white md:p-12 md:pb-0 relative overflow-x-hidden min-h-fit max-w-[1440px] mx-auto">
      <div className="">
        <div className=" my-20  lg:my-0 lg:mt-8 ml-8 lg:ml-0 md:mb-0">
          <img src="assets/18.png" alt="" className="lg:w-3/5" />
        </div>
        <div className="flex flex-col justify-between higherZ-Index gap-[500px] lg:gap-2 lg:w-1/2 p-8 lg:absolute top-36 right-8 ">
          <h1 className="text-5xl mb-7 font-bold absolute top-8 lg:static lg:text-7xl ">
            How to buy $Fortune Fox
          </h1>
          <div className="absolute bottom-4 lg:static  ">
            <div className="text-xl ">
              To buy $Fortune Fox, get phantom wallet, Purchase $SOL and send it
              to your Phantom wallet. Then simply swap with $SOL to $Fortune Fox
              on Jupiter
            </div>
            <div className="flex flex-col gap-4 mt-4 md:flex-row">
              <a
                href="https://phantom.app/"
                className="flex flex-row gap-4 hover:bg-white hover:text-black rounded-2xl px-3 py-2 text-lg border-2 border-solid border-white justify-center md:w-52"
              >
                Get Phantom
                <img src="assets/link.svg" alt="" />
              </a>
              <button
                className="flex flex-row gap-4 hover:bg-white hover:text-black rounded-2xl px-3 py-2 text-lg border-2 border-solid border-white jupitorBuyButton justify-center md:w-52"
                onClick={handleModalOpen}
              >
                Buy on Jupiter
                <img src="assets/explore-white.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
