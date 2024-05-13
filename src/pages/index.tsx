import About from "@/component/About";
import BuyFFox from "@/component/BuyFFox";
import Footer from "@/component/Footer";
import FoxGallery from "@/component/FoxGallery";
import GoToUp from "@/component/GoToUp";
import HeroSection from "@/component/HeroSection";
import HowToBuy from "@/component/HowToBuy";
import MobileMenu from "@/component/MobileMenu";
import NavBar from "@/component/NavBar";
import PreSale from "@/component/PreSale";
import Quote from "@/component/Quote";
import Tokenomics from "@/component/Tokenomics";
import { useEffect, useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [bgAnim, setBgAnim] = useState(
    "linear-gradient(126deg,rgb(0, 0, 0),rgb(71, 6, 65),rgb(10, 7, 41))"
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  function handleModalOpen() {
    setIsModalOpen(true);
  }
  function handleModalClose() {
    setIsModalOpen(false);
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
        {isOpen && <MobileMenu setIsOpen={setIsOpen} />}
        <NavBar setIsOpen={setIsOpen} />
        <HeroSection handleModalOpen={handleModalOpen} />
      </section>
      <PreSale handleModalOpen={handleModalOpen} />
      <About />
      <Quote />
      <HowToBuy handleModalOpen={handleModalOpen} />
      {isModalOpen && <BuyFFox handleModalClose={handleModalClose} />}
      <Tokenomics />
      <FoxGallery />
      <Footer />
      <GoToUp topFunction={topFunction} showBtn={showBtn} />
    </div>
  );
}
