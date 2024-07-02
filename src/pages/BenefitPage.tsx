import { FunctionComponent, useEffect, useRef, useState } from "react";
import BenefitCard from "../components/BenefitCard";

export type BenefitPageType = {
  className?: string;
};

const BenefitPage: FunctionComponent<BenefitPageType> = ({
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

  const benefits = [
    {
      prop: "01.1",
      title: "Ricerca immediata",
      description:
        "Più utilizzi il nostro il processo di ricerca più esso si abituerà alle tue preferenze e ti farà risparmiare tempo e fatica.",
    },
    {
      prop: "01.2",
      title: "Acquistare su Findora",
      description:
        "Ottieni un servizio su misura per le tue esigenze specifiche in base al tuo progetto.",
    },
    {
      prop: "01.3",
      title: "Vendere su Findora",
      description:
        "Creare il tuo servizio è un'opportunità per mostrare il tuo talento e fornire ai clienti tutte le informazioni di cui hanno bisogno per aiutarli a decidere di lavorare con te.",
    },
    {
      prop: "01.4",
      title: "Fiducia e sicurezza",
      description:
        "Feedback e sistema di Ranking sono essenziali per il marketplace di Findora. Con le valutazioni, i livelli e il feedback del venditore, abbiamo semplificato l'esame, il confronto e l'acquisto dei servizi di cui hai bisogno.",
    },
    {
      prop: "01.5",
      title: "Prendi Ispirazione",
      description:
        "Dai un'occhiata agli splendidi lavori fatti dalla community per trasformare in realtà la tua prossima grande idea.",
    },
  ];

  return (
    <div
      ref={ref}
      className={`self-stretch flex flex-col items-start justify-start text-left text-[2.5rem] text-nero-3-findora font-gotham ${className}`}
      data-scroll-to="benefit"
    >
      <div className="self-stretch bg-nero-3-findora h-[3.75rem]" />
      {/* container di title e benefits */}
      <div className="flex flex-row items-start self-stretch justify-start md:flex-col">
        {/* container del title "BENEFITS" */}
        <div className="self-stretch flex-1 box-border overflow-hidden flex flex-row items-start justify-start py-[1.875rem] pr-[0rem] pl-[1.875rem] gap-[0.937rem] min-w-[33.3%] max-w-[41.25rem] border-[4px] border-solid border-nero-3-findora md:min-w-full sm:pl-[0rem]">
          {/* Numero nel titolo */}
          <div
            className={`relative font-medium z-[1] animate-fade-right animate-once animate-duration-500 animate-delay-0 animate-ease-out ${
              inView
                ? "animate-fade-right animate-once animate-duration-1000 animate-delay-0 animate-ease-out"
                : ""
            } sm:hidden`}
          >
            01
          </div>
          {/* Titolo */}
          <b
            className={`flex-1 relative text-[4rem] text-bianco-1-findora z-[0]} ${
              inView
                ? "animate-fade-right animate-once animate-duration-1000 animate-delay-0 animate-ease-out"
                : ""
            } sm:text-[3rem] sm:text-center`}
          >
            BENEFIT
          </b>
        </div>

        {/* Container spacer e cards per md screen */}
        <div className="w-full flex flex-row">
          {/* Spacer */}
          <div className="hidden md:block w-[120px] md:bg-nero-3-findora sm:hidden"></div>
          {/* Cards */}
          <div className="flex-1 flex flex-col items-start justify-start text-center text-[2rem]">
            {benefits.map((benefit, index) => (
              <BenefitCard
                key={index}
                prop={benefit.prop}
                ricercaImmediata={benefit.title}
                piUtilizziIlNostroIlProce={benefit.description}
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

export default BenefitPage;
