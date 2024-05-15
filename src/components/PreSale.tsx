"use client";
import Countdown from "./Countdown";

interface PreSaleProps {
  handleModalOpen: () => void;
  // handleModalOpen: (data: any) => string | undefined;
}

export default function PreSale({ handleModalOpen }: PreSaleProps) {
  let offerEndDate = new Date(2024, 7, 12, 23, 59, 59);
  let currentDate = new Date();
  let remainingTime = offerEndDate.getTime() - currentDate.getTime();
  let days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  return (
    <section className="w-full !p-8 md:p-20  flex justify-center items-center">
      <div className="border-4 border-white border-solid rounded-xl mx-auto p-2 md:p-8 text-white">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="text-center md:text-start">
            <h1 className="uppercase text-4xl font-bold text-center md:text-start">
              Fortune pre-sale
            </h1>
            <p className="uppercase text-lg mt-4">
              Presale Price: <br className="md:hidden" /> 1 SOL = 20,000 $FFOX
            </p>
            <p className="uppercase text-lg mt-2">
              Listing Price: <br className="md:hidden" /> 1 SOL = 10,000 $FFOX
            </p>
            <p className="uppercase text-lg mt-2">
              Minimum Buy: <br className="md:hidden" /> 0.5 SOL
            </p>
            <p className="uppercase text-lg mt-2">
              Maximum Buy: <br className="md:hidden" /> 100 SOL
            </p>
          </div>
          <div className="text-center">
            <h1 className="uppercase text-5xl mb-6 font-bold mt-12">Ends In</h1>
            <div className="flex flex-row justify-around md:justify-center md:gap-12">
              <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24  border-2 border-solid border-white flex flex-col rounded-lg items-center justify-center">
                <p className="text-2xl md:text-3xl font-bold ">{days}</p>
                <p className="text-lg md:text-xl font-semibold">Days</p>
              </div>
              <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24  border-2 border-solid border-white flex flex-col rounded-lg items-center justify-center">
                <p className="text-2xl md:text-3xl font-bold ">{hours}</p>
                <p className="text-lg md:text-xl font-semibold">Hours</p>
              </div>
              <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24  border-2 border-solid border-white flex flex-col rounded-lg items-center justify-center">
                <p className="text-2xl md:text-3xl font-bold ">{minutes}</p>
                <p className="text-lg md:text-xl font-semibold">Mins</p>
              </div>
              <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24  border-2 border-solid border-white flex flex-col rounded-lg items-center justify-center">
                <p className="text-2xl md:text-3xl font-bold ">{seconds}</p>
                <p className="text-lg md:text-xl font-semibold">Secs</p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-10">
          <div className="flex justify-between md:flex-row flex-col w-full md:gap-4">
            <p className="text-center md:text-start mt-4 md:mt-0 md:w-1/4 uppercase text-2xl font-bold">
              total raised: <br /> 1067 sol
            </p>
            <p className="text-center md:text-start mt-4 md:mt-0 md:w-2/4 uppercase text-2xl font-bold">
              50% listing on raydium after pre-sale
            </p>
            <p className="text-center md:text-start mt-4 md:mt-0 md:w-1/4 uppercase text-2xl font-bold">
              pre-sale allocation: <br />
              60,000,000 $FFOX
            </p>
          </div>
          <div className="w-full border-2 border-solid border-white h-7 rounded-md my-6 p-1">
            <div className="w-[50%] bg-[#7b3ec8] h-full rounded-sm"></div>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <button
              className="flex flex-row gap-4 hover:bg-white hover:text-black rounded-2xl px-3 py-2 text-lg border-2 border-solid border-white jupitorBuyButton justify-center md:w-52 uppercase"
              onClick={handleModalOpen}
            >
              Buy $FFOX
            </button>
            <button className="flex flex-row gap-4 hover:bg-white hover:text-black rounded-2xl px-3 py-2 text-lg border-2 border-solid border-white justify-center uppercase">
              Check your $FFOX Allocation
            </button>
          </div>
        </div>
      </div>
      {/* <div className="">
        <Countdown />
      </div> */}
    </section>
  );
}
