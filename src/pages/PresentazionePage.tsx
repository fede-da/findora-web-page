import { FunctionComponent, useEffect, useRef, useState } from "react";

export type PresentazionePageType = {
  className?: string;
};

const PresentazionePage: FunctionComponent<PresentazionePageType> = ({
  className = "",
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`self-stretch flex flex-col items-start justify-start text-center text-[4rem] text-white font-gotham ${className}`}
      data-scroll-to="presentazione"
    >
      <div className="self-stretch flex flex-col items-center justify-start pt-[1.875rem] px-[0rem] pb-[3.75rem] text-[2.5rem] text-nero-3-findora border-[4px] border-solid border-nero-3-findora">
        <div className="flex flex-col items-center justify-center">
          {/* Container numero e titolo */}
          <div
            className={`self-stretch flex flex-row items-start justify-start pt-[0rem] px-[30px] pb-[1.875rem] gap-[0.937rem] lg:flex-row lg:gap-[0.938rem] lg:items-start lg:justify-start md:flex-row md:gap-[0.938rem] md:items-start md:justify-center sm:flex-row sm:gap-[0.938rem] sm:items-start sm:justify-center ${
              inView
                ? "animate-fade-down animate-once animate-duration-1000 animate-delay-0 animate-ease-out"
                : ""
            }`}
          >
            <div className="flex flex-col items-start justify-start">
              <div className="relative font-medium sm:hidden">00</div>
            </div>
            <div className="flex-1 flex flex-row items-center justify-center text-left text-[4rem] text-bianco-1-findora">
              <b className="relative flex-1 sm:text-[2.5rem] text-center">
                La nostra presentazione
              </b>
            </div>
          </div>
          <div className=" w-[960px] h-[540px] md:w-[90%] md:h-[480px]  sm:w-[99%] sm:h-[240px]">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/WhmsONrEM1Q?si=TCs7lSdfmyT7uqT8&amp;start=58"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresentazionePage;
