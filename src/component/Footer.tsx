import React from "react";

export default function Footer() {
  return (
    <footer className="bg-transparent rounded-t-[60px] mt-20 max-w-[1440px] mx-auto border-t-4 border-solid border-white overflow-hidden  relative ">
      <div className="bg-white/20 w-full h-fit rounded-t-[60px]">
        <div className="flex items-center flex-col pt-20 md:flex-row">
          <div className="flex flex-col items-center">
            <div className="flex flex-row gap-8 lg:absolute lg:bottom-44 lg:left-10">
              <a target="_blank" className="">
                <img
                  src="assets/telegram.png"
                  alt=""
                  className="md:w-16 lg:w-20"
                />
              </a>

              <a target="_blank" className="">
                <img
                  src="assets/twitter.png"
                  alt=""
                  className="md:w-16 lg:w-20"
                />
              </a>
            </div>
            <div className="hidden lg:block border-t border-solid border-gray-700 w-2/3 h-2 lg:absolute lg:bottom-28 lg:left-10 "></div>
            <div className="text-xl text-white/70 my-12 px-8 md:px-0 md:pl-8 md:z-40 md:w-full lg:absolute left-0 bottom-2 lg:flex gap-20 font-semibold  pt-12 lg:text-2xl">
              <div className="">
                $Fortune Fox has no official ties to Metamask.
              </div>
              <div className="">© 2024 Bojack</div>
            </div>
          </div>
          <div className="w-full">
            <img
              src="assets/8.png"
              alt=""
              className="min-w-[500px] -mb-6 lg:w-[600px] float-right"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
