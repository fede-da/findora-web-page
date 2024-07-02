import { FunctionComponent, useState } from "react";

export type FAQCardType = {
  className?: string;
  prop?: string;
  cosFindora?: string;
  findoraUnaMarketplaceCheM?: string;

  /** Style props */
  textClassName?: string;
};

const FAQCard: FunctionComponent<FAQCardType> = ({
  className = "",
  prop,
  cosFindora,
  findoraUnaMarketplaceCheM,
  textClassName = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start py-[1.875rem] pr-[3.75rem] pl-[1.875rem] text-center text-[2rem] text-nero-3-findora font-gotham border-[4px] border-solid border-nero-3-findora ${className} sm:pr-[1.875rem]`}
      onClick={toggleOpen}
    >
      {/* container di tutta la card */}
      <div
        className={`self-stretch flex flex-col items-start justify-start gap-[0.937rem] ${textClassName}`}
      >
        <div className="flex flex-row items-start self-stretch justify-start md:hidden">
          {/* Numerino */}
          <div
            className={`w-[4.688rem] relative font-medium flex items-center justify-center shrink-0`}
          >
            {prop}
          </div>
        </div>
        {/* container domanda + risposta */}
        <div className="self-stretch flex flex-col items-start justify-start py-[0rem] pr-[3.75rem] pl-[1.875rem] gap-[0.937rem] text-left text-[1.5rem] text-bianco-1-findora md:px-[0rem] ">
          <div className="self-stretch flex flex-row items-start justify-start gap-[1.875rem]">
            {/* Stanghetta */}
            <div className="flex flex-col items-center self-stretch justify-center ml:hidden sm:hidden">
              <div className="w-[4rem] relative box-border h-[0.25rem] border-t-[4px] border-solid border-verde-1-findora" />
            </div>
            <b className="relative flex-1">{cosFindora}</b>
            <div className="flex flex-row items-center self-stretch justify-center cursor-pointer">
              <div className="flex flex-col items-start justify-start">
                <img
                  className="w-[1.875rem] relative"
                  alt=""
                  src={isOpen ? "/vector1.svg" : "/vector2.svg"}
                />
              </div>
            </div>
          </div>
          {isOpen && (
            //testo risposta
            <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[3.75rem] pl-[7.5rem] text-[1.25rem] transition-max-height duration-500 ease-in-out ml:pl-[1.875rem] sm:p-[0rem]">
              <div className="relative flex-1">{findoraUnaMarketplaceCheM}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQCard;
