import React from "react";

export default function Tokenomics() {
  return (
    <section className="pt-12 mt-10 p-8 max-w-[1440px] mx-auto" id="tokenomics">
      <div className="text-white xl:px-20">
        <div className=" ">
          <img src="assets/tokenomics.svg" alt="" />
          <p className="text-5xl font-bold my-8">Tokenomics</p>
        </div>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start">
          <div className="border-4 border-solid border-white min-w-80 rounded-3xl p-6 flex h-32 justify-between items-center lg:flex-col lg:items-start">
            <div className="text-3xl font-semibold">Symbol</div>
            <div className="text-xl">$Fortune Fox</div>
          </div>
          <div className="border-4 border-solid border-white min-w-80 rounded-3xl p-6 flex h-32 justify-between items-center mb-4 lg:flex-col lg:items-start">
            <div className="text-3xl font-semibold">Tax</div>
            <div className="text-xl">0/0</div>
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start">
          <div className="border-4 border-solid border-white min-w-80 rounded-3xl p-6 flex h-32 items-start  flex-col">
            <div className="text-3xl font-semibold">Total Supply</div>
            <div className="text-xl">1B $Fortune Fox</div>
          </div>
          <div className="border-4 border-solid border-white min-w-80 rounded-3xl p-6 flex h-32 items-start  flex-col">
            <div className="text-3xl font-semibold">Presale</div>
            <div className="text-xl">650M $Fortune Fox (65%)</div>
          </div>
          <div className="border-4 border-solid border-white min-w-80 rounded-3xl p-6 flex h-32 items-start  mb-4 flex-col">
            <div className="text-3xl font-semibold">Liquidity</div>
            <div className="text-xl">350M $Fortune Fox (35%)</div>
          </div>
        </div>
        <div className="border-4 border-solid border-white min-w-80 rounded-3xl p-6 flex min-h-32 items-start  flex-col max-h-fit">
          <div className="text-3xl font-semibold">Token Address</div>
          <div className="flex flex-row justify-between w-full items-center ">
            <p className="copytext break-words text-xl w-[90%]">
              EUeJuDgVxx83953XeBHS3fzY7tneitb19dmdPrTMHGqd
            </p>
            <img src="assets/copy.svg" alt="Copy" className="cursor-pointer" />
          </div>
        </div>
      </div>
    </section>
  );
}
