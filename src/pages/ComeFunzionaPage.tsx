import { FunctionComponent, useEffect, useRef, useState } from "react";
import HowToWorkCard from "../components/HowToWorkCard";
import { freelancerBenefits } from "../model/freelencerBenefits.model";
import { userBenefits } from "../model/userBenefits.model";

export type ComeFunzionaPageType = {
  className?: string;
};

const ComeFunzionaPage: FunctionComponent<ComeFunzionaPageType> = ({
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
      className={`self-stretch flex flex-col items-start justify-start text-center text-[2.5rem] text-nero-3-findora font-gotham ${className}`}
      data-scroll-to="come-funziona"
    >
      <div className="self-stretch bg-nero-3-findora h-[3.75rem]" />
      {/* container di title e contenuto */}
      <div className="flex flex-row items-start self-stretch justify-start md:flex-col">
        {/* container del title "come funziona" */}
        <div className="self-stretch flex-1 box-border overflow-hidden flex flex-row items-start justify-start py-[1.875rem] pr-[0rem] pl-[1.875rem] gap-[0.937rem] min-w-[33.3%] max-w-[33.3%] border-[4px] border-solid border-nero-3-findora md:min-w-full sm:text-center sm:pl-[0rem]">
          {/* Numero nel titolo */}
          <div
            className={`relative font-medium flex items-center justify-center shrink-0 z-[1] ${
              inView
                ? "animate-fade-right animate-once animate-duration-1000 animate-delay-0 animate-ease-out"
                : ""
            } sm:hidden`}
          >
            02
          </div>
          {/* Titolo */}
          <b className=" flex-1 relative text-[4rem] text-bianco-1-findora text-left z-[0]">
            <p
              className={`m-0 ${
                inView
                  ? "animate-fade-right animate-once animate-duration-1000 animate-delay-0 animate-ease-out"
                  : ""
              } sm:text-[3rem] sm:text-center`}
            >
              COME
            </p>
            <p
              className={`m-0 ${
                inView
                  ? "animate-fade-right animate-once animate-duration-1000 animate-delay-0 animate-ease-out"
                  : ""
              } sm:text-[3rem] sm:text-center`}
            >
              FUNZIONA
            </p>
          </b>
        </div>
        {/* PADRE */}
        <div className=" self-stretch flex-1 flex flex-col items-start justify-start text-[2rem] ">
          {/* PER FREELENCER */}
          {freelancerBenefits.map((section, index) => (
            <div
              key={index}
              className="self-stretch flex flex-col items-start justify-start p-[1.875rem] gap-[1.875rem] border-[4px] border-solid border-nero-3-findora"
            >
              <div className="self-stretch flex flex-row items-start justify-start gap-[0.937rem]">
                <div
                  className={`w-[4.688rem] relative font-medium flex items-center justify-center shrink-0 ${
                    inView
                      ? "animate-fade-down animate-once animate-duration-1000 animate-delay-500 animate-ease-out"
                      : ""
                  } md:hidden`}
                >
                  {section.prop}
                </div>
                <b
                  className={`flex-1 relative text-[2.25rem] text-bianco-1-findora text-left ${
                    inView
                      ? "animate-fade-down animate-once animate-duration-1000 animate-delay-500 animate-ease-out"
                      : ""
                  } md:text-center`}
                >
                  {section.title}
                </b>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[3.75rem] gap-[3.75rem] md:px-[0rem] md:gap-[1.875rem] sm:flex-col">
                {section.benefits.map((benefit, idx) => (
                  <HowToWorkCard
                    key={idx}
                    creaITuoiServizi={benefit.creaITuoiServizi}
                    offriLeTueCompetenzeEdIni={
                      benefit.offriLeTueCompetenzeEdIni
                    }
                    propAlignSelf={benefit.propAlignSelf}
                    textClassName={
                      inView
                        ? "animate-fade-down animate-once animate-duration-1000 animate-delay-500 animate-ease-out"
                        : ""
                    }
                    srcClassName={
                      inView
                        ? "animate-fade-down animate-once animate-duration-1000 animate-delay-500 animate-ease-out"
                        : ""
                    }
                    src={benefit.src}
                    alt={benefit.alt}
                  />
                ))}
              </div>
            </div>
          ))}

          {/* PER UTENTI */}
          {userBenefits.map((section, index) => (
            <div
              key={index}
              className="self-stretch flex flex-col items-start justify-start p-[1.875rem] gap-[1.875rem] border-[4px] border-solid border-nero-3-findora"
            >
              <div className="self-stretch flex flex-row items-start justify-start gap-[0.937rem]">
                <div
                  className={`w-[4.688rem] relative font-medium flex items-center justify-center shrink-0 ${
                    inView
                      ? "animate-fade-down animate-once animate-duration-1000 animate-delay-500 animate-ease-out"
                      : ""
                  } md:hidden`}
                >
                  {section.prop}
                </div>
                <b
                  className={`flex-1 relative text-[2.25rem] text-bianco-1-findora text-left ${
                    inView
                      ? "animate-fade-down animate-once animate-duration-1000 animate-delay-500 animate-ease-out"
                      : ""
                  } md:text-center`}
                >
                  {section.title}
                </b>
              </div>

              <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[3.75rem] gap-[3.75rem] md:px-[0rem] md:gap-[1.875rem] sm:flex-col ">
                {section.benefits.map((benefit, idx) => (
                  <HowToWorkCard
                    key={idx}
                    creaITuoiServizi={benefit.creaITuoiServizi}
                    offriLeTueCompetenzeEdIni={
                      benefit.offriLeTueCompetenzeEdIni
                    }
                    propAlignSelf={benefit.propAlignSelf}
                    textClassName={
                      inView
                        ? "animate-fade-down animate-once animate-duration-1000 animate-delay-500 animate-ease-out"
                        : ""
                    }
                    srcClassName={
                      inView
                        ? "animate-fade-down animate-once animate-duration-1000 animate-delay-500 animate-ease-out"
                        : ""
                    }
                    src={benefit.src}
                    alt={benefit.alt}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComeFunzionaPage;
