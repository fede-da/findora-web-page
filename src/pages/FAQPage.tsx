import { FunctionComponent, useEffect, useRef, useState } from "react";
import FAQCard from "../components/FAQCard";
import { faqItems } from "../model/faqItem.model";

export type FAQPage = {
  className?: string;
};

const FAQPage: FunctionComponent<FAQPage> = ({ className = "" }) => {
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
      data-scroll-to="faq"
    >
      <div className="self-stretch bg-nero-3-findora h-[3.75rem]" />
      {/* container di title e faq */}
      <div className="flex flex-row items-start self-stretch justify-start md:flex-col">
        {/* container del title "FAQ" */}
        <div className="self-stretch flex-1 box-border overflow-hidden flex flex-row items-start justify-start py-[1.875rem] pr-[0rem] pl-[1.875rem] gap-[0.937rem] min-w-[33.3%] max-w-[41.25rem] border-[4px] border-solid border-nero-3-findora md:min-w-full sm:pl-[0rem]">
          {/* Numero nel titolo */}
          <div
            className={`relative font-medium z-[1] ${
              inView
                ? "animate-fade-right animate-once animate-duration-1000 animate-delay-0 animate-ease-out"
                : ""
            } sm:hidden`}
          >
            04
          </div>
          {/* Titolo */}
          <b
            className={`flex-1 relative text-[4rem] text-bianco-1-findora text-left z-[0] ${
              inView
                ? "animate-fade-right animate-once animate-duration-1000 animate-delay-0 animate-ease-out"
                : ""
            } sm:text-[3rem] sm:text-center`}
          >
            F.A.Q.
          </b>
        </div>
        {/* Container spacer e cards per md screen */}
        <div className="flex flex-row w-full">
          <div className="hidden md:block w-[120px] md:bg-nero-3-findora sm:hidden"></div>
          {/* Cards */}
          <div className="flex-1 flex flex-col items-start justify-start text-[2rem]">
            {faqItems.map((item, index) => (
              <FAQCard
                key={index}
                prop={item.prop}
                cosFindora={item.question}
                findoraUnaMarketplaceCheM={item.answer}
                textClassName={
                  inView
                    ? "animate-fade-left animate-once animate-duration-1000 animate-delay-500 animate-ease-out"
                    : ""
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
