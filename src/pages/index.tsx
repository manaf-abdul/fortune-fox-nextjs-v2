import { useEffect, useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [bgAnim, setBgAnim] = useState(
    "linear-gradient(126deg,rgb(0, 0, 0),rgb(71, 6, 65),rgb(10, 7, 41))"
  );
  const [showBtn, setShowBtn] = useState("myBtn none");

  // When the user scrolls down 20px from the top of the document, show the button

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setShowBtn("myBtn");
    } else {
      setShowBtn("none");
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  useEffect(() => {
    let deg = 0;

    const interval = setInterval(() => {
      deg++;
      if (deg == 360) {
        deg = 0;
        deg++;
      }
      let bgColor = `linear-gradient(${deg}deg,rgb(0, 0, 0),rgb(71, 6, 65),rgb(10, 7, 41))`;
      setBgAnim(bgColor);
    }, 30);
    window.onscroll = function () {
      scrollFunction();
    };
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="grandstander"
      style={{
        backgroundImage: bgAnim,
      }}
    >
      <section className="h-screen  text-white relative max-w-[1440px] mx-auto">
        {isOpen && (
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

              <a
                href="https://jup.ag/swap/SOL-BOJACK_EUeJuDgVxx83953XeBHS3fzY7tneitb19dmdPrTMHGqd"
                target="_blank"
                className="hover:bg-white hover:text-black rounded-2xl px-3 py-2 text-lg border-2 border-solid border-white"
                onClick={() => setIsOpen(false)}
              >
                Buy Fortune Fox
              </a>
            </div>
          </div>
        )}
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
        <div className="min-h-max">
          <img
            src="assets/17.png"
            alt=""
            className="picture absolute bottom-44 md:bottom-12  max-sm:transform max-sm:translate-x-[50%] right-[50%]  lg:bottom-0 md:right-20 lg:right-60 w-72"
          />
          <div className="absolute bottom-20 lg:bottom-0   w-full p-8 pb-0 md:pb-12 md:p-12 md:bottom-0">
            <h3 className="text-4xl mb-7 font-bold">Fortune Fox</h3>
            <h3 className="text-4xl mb-7 font-bold">Now on Solana!</h3>
            <div className="w-full  flex flex-col md:flex-row gap-4">
              <a
                href="https://jup.ag/swap/SOL-BOJACK_EUeJuDgVxx83953XeBHS3fzY7tneitb19dmdPrTMHGqd"
                target="_blank"
                className="flex hover:bg-white/80 hover:text-black rounded-3xl p-3 px-6 text-2xl bg-white text-black min-w-[260px] gap-3 max-w-fit"
              >
                Buy on Jupiter
                <img src="assets/explore.svg" alt="" />
              </a>
              <a
                href="https://twitter.com/BojackSolana"
                target="_blank"
                className="hover:bg-white/80 hover:text-black rounded-3xl p-3 px-6 text-2xl bg-white text-black min-w-[260px] max-w-fit"
              >
                Follow on Twitter
              </a>
            </div>
          </div>
        </div>
      </section>
      <section
        className="h-screen  text-white md:p-12 max-w-[1440px] mx-auto"
        id="about"
      >
        <div className="h-full flex flex-col md:justify-between gap-16 md:gap-0 py-20 md:py-0 items-center lg:flex-row ">
          <div className="md:px-40 lg:px-0  ">
            <img
              src="assets/7.png"
              alt="Fox Image"
              className="w-72 md:w-96 lg:w-[500px]"
            />
          </div>
          <p className="text-xl p-6 lg:h-full lg:pt-20">
            The Dogs and Frogs have had their day, it’s time for Foxes to take
            reign.
          </p>
        </div>
      </section>
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
                To buy $Fortune Fox, get phantom wallet, Purchase $SOL and send
                it to your Phantom wallet. Then simply swap with $SOL to
                $Fortune Fox on Jupiter
              </div>
              <div className="flex flex-col gap-4 mt-4 md:flex-row">
                <a
                  href="https://phantom.app/"
                  className="flex flex-row gap-4 hover:bg-white hover:text-black rounded-2xl px-3 py-2 text-lg border-2 border-solid border-white justify-center md:w-52"
                >
                  Get Phantom
                  <img src="assets/link.svg" alt="" />
                </a>
                <a
                  href="https://jup.ag/swap/SOL-BOJACK_EUeJuDgVxx83953XeBHS3fzY7tneitb19dmdPrTMHGqd"
                  className="flex flex-row gap-4 hover:bg-white hover:text-black rounded-2xl px-3 py-2 text-lg border-2 border-solid border-white jupitorBuyButton justify-center md:w-52"
                >
                  Buy on Jupiter
                  <img src="assets/explore-white.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="pt-12 mt-10 p-8 max-w-[1440px] mx-auto"
        id="tokenomics"
      >
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
              <img
                src="assets/copy.svg"
                alt="Copy"
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-[1440px] mx-auto">
        <div className="flex items-end justify-center overflow-x-auto pt-24">
          <img
            src="assets/3.png"
            alt=""
            width="300px"
            className="w-1/2 max-w-1/2 md:w-1/4 -mx-1 h-auto"
          />
          <img
            src="assets/16.png"
            alt=""
            width="300px"
            className="w-1/2 max-w-1/2 md:w-1/4 -mx-1 h-auto"
          />
          <img
            src="assets/14.png"
            alt=""
            width="300px"
            className="w-1/2 max-w-1/2 md:w-1/4 -mx-1 h-auto"
          />
          <img
            src="assets/6.png"
            alt=""
            width="300px"
            className="w-1/2 max-w-1/2 md:w-1/4 -mx-1 h-auto"
          />
        </div>
      </section>
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
      <button
        onClick={topFunction}
        id="myBtn"
        className={showBtn}
        title="Go to top"
      >
        <img src="assets/arrow-up.svg" alt="Go to Top" />
      </button>
    </div>
  );
}
