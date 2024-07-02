import { FunctionComponent, useEffect, useRef, useState } from "react";

export type MissionePageType = {
  className?: string;
};

const MissionePage: FunctionComponent<MissionePageType> = ({
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
      className={`self-stretch flex flex-col items-start justify-start text-left text-[2.5rem] text-nero-3-findora font-gotham ${className}`}
      data-scroll-to="mission"
    >
      <div className="self-stretch bg-nero-3-findora h-[3.75rem]" />
      {/* container di title e mission */}
      <div className="flex flex-row items-start self-stretch justify-start md:flex-col">
        {/* container del title "MISSSION" */}
        <div className="self-stretch flex-1 box-border overflow-hidden flex flex-row items-start justify-start py-[1.875rem] pr-[0rem] pl-[1.875rem] gap-[0.937rem] min-w-[33.3%] max-w-[41.25rem] border-[4px] border-solid border-nero-3-findora md:min-w-full sm:justify-center sm:pl-[0rem]">
          {/* Numero nel titolo */}
          <div
            className={`w-[4.688rem] relative font-medium flex items-center justify-center shrink-0 z-[1] ${
              inView
                ? "animate-fade-right animate-once animate-duration-1000 animate-delay-0 animate-ease-out"
                : ""
            } sm:hidden`}
          >
            03
          </div>
          {/* Titolo */}
          <b className="relative text-[4rem] text-bianco-1-findora text-left z-[0]">
            <p
              className={`m-0 ${
                inView
                  ? "animate-fade-right animate-once animate-duration-1000 animate-delay-0 animate-ease-out"
                  : ""
              }  sm:text-[3rem] sm:text-center`}
            >
              MISSION
            </p>
          </b>
        </div>
        {/* Contenuto padre */}
        <div className="w-full flex flex-row">
          {/* Spacer */}
          <div className="hidden md:block w-[120px] md:bg-nero-3-findora sm:hidden"></div>

          <div className="self-stretch flex-1 flex flex-col items-start justify-start py-[1.875rem] pr-[3.75rem] pl-[1.875rem] gap-[1.875rem] text-center text-[2rem] border-[4px] border-solid border-nero-3-findora md:pr-[1.875rem]">
            <div className="self-stretch flex flex-row items-start justify-start gap-[0.937rem] ">
              {/* Numerino */}
              <div
                className={`w-[4.688rem] relative font-medium flex items-center justify-center shrink-0 ${
                  inView
                    ? "animate-fade-right animate-once animate-duration-1000 animate-delay-500 animate-ease-out"
                    : ""
                } md:hidden`}
              >
                03.1
              </div>
              {/* titolo interno */}
              <b
                className={`flex-1 relative text-[2.25rem] text-bianco-1-findora text-left ${
                  inView
                    ? "animate-fade-right animate-once animate-duration-1000 animate-delay-500 animate-ease-out"
                    : ""
                } `}
              >
                La nostra mission
              </b>
            </div>
            {/* container citazione esterna */}
            <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[3.75rem] pl-[7.5rem] text-left text-white md:pr-[0rem] md:pl-[1.875rem] sm:pl-[0rem]">
              {/* container citazione interna */}
              <div
                className=" flex flex-row items-start justify-start max-w-[37.5rem]
             "
              >
                {/* citazione intera */}
                <b
                  className={`relative flex-1  ${
                    inView
                      ? "animate-fade-right animate-once animate-duration-1000 animate-delay-500 animate-ease-out"
                      : ""
                  }`}
                >
                  {/* citazione 1 */}
                  <p className="m-0 ml:text-[1.75rem]">
                    “Sostenere la crescita e lo sviluppo di carriere e
                    competenze, ispirando la realizzazione dei sogni e la
                    prosperità di creativi in tutto il mondo, attraverso
                    l’utilizzo di nuove tecnologie e meccanismi di gamification.
                  </p>
                  <p className="m-0">&nbsp;</p>
                  {/* citazione 2 */}
                  <p className="m-0 ml:text-[1.75rem]">
                    Il tutto rivoluzionando il sistema della competizione,
                    premiazione e visibilità Basato un sistema di ranking
                    innovativo, con un’approccio easy-to-use”
                  </p>
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-nero-3-findora h-[3.75rem]" />
    </div>
  );
};

export default MissionePage;
