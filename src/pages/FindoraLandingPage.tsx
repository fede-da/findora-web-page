import { FunctionComponent, useEffect, useState } from "react";
import HomePage from "./HomePage";
import PresentazionePage from "./PresentazionePage";
import BenefitPage from "./BenefitPage";
import ComeFunzionaPage from "./ComeFunzionaPage";
import MissionePage from "./MissionePage";
import FAQPage from "./FAQPage";
import Navbar from "../components/Navbar";
import ListaDattesa from "../components/ListaDattesa";
import Form from "../components/Form";
import Footer from "../components/Footer";

const FindoraLandingPage: FunctionComponent = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [navbarTop, setNavbarTop] = useState(0);

  const handleScroll = () => {
    if (window.scrollY >= navbarTop) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    const navbar = document.querySelector(".navbar") as HTMLElement;
    if (navbar) {
      setNavbarTop(navbar.offsetTop);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navbarTop]);

  return (
    <div className="relative flex flex-col items-start justify-start w-full overflow-hidden bg-nero-1-findora">
      {/* LOGO */}
      <HomePage />
      <div className="self-stretch bg-nero-3-findora h-[3.75rem]" />
      <div className="self-stretch bg--nero-1-findora h-[1.875rem] border-[4px] border-solid border-nero-3-findora" />

      <ListaDattesa />
      <div className="self-stretch bg--nero-1-findora h-[1.875rem] border-[4px] border-solid border-nero-3-findora" />

      {/* NAVBAR */}
      <div
        className={`navbar w-full bg-nero-3-findora flex-row items-center justify-center text-center text-17xl text-white font-gotham ${
          isSticky ? "fixed top-0 z-50" : ""
        }`}
      >
        <Navbar />
      </div>
      {/* PRESENTAZIONE */}
      <PresentazionePage />
      {/* BENEFIT: */}
      <BenefitPage />
      {/* COME FUNZIONA */}
      <ComeFunzionaPage />
      {/* MISSION */}
      <MissionePage />
      <div className="self-stretch bg--nero-1-findora h-[1.875rem] border-[4px] border-solid border-nero-3-findora" />
      <ListaDattesa />
      <div className="self-stretch bg--nero-1-findora h-[1.875rem] border-[4px] border-solid border-nero-3-findora" />
      {/* F.A.Q. */}
      <FAQPage />
      <div className="self-stretch bg-nero-3-findora h-[3.75rem]" />
      <Footer />
    </div>
  );
};

export default FindoraLandingPage;
