import React from "react";

export default function Quote() {
  return (
    <section className="h-screen  text-white md:p-12 max-w-[1440px] mx-auto">
      <div className="h-full  p-8">
        <div className="border-4 rounded-3xl border-solid border-white flex p-8 gap-6 mt-16 max-w-[800px] mx-auto lg:items-center">
          <div className="">
            <img
              src="assets/komma.svg"
              alt="Komma"
              className="w-80 sm:w-40 md:w-28"
            />
          </div>
          <div className="text-xl lg:h-full">
            From Hollywood Hills to Solana Thrills: The First Meme Coin on
            Solana That Doesn't Fox Around!
            <br />
          </div>
        </div>
      </div>
    </section>
  );
}
