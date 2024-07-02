import { FunctionComponent, useMemo, CSSProperties } from "react";

export type BenefitCardType = {
  className?: string;
  prop?: string;
  ricercaImmediata?: string;
  piUtilizziIlNostroIlProce?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propWidth?: CSSProperties["width"];
  propFlex?: CSSProperties["flex"];
  textClassName?: string;
};

const BenefitCard: FunctionComponent<BenefitCardType> = ({
  className = "",

  prop,
  ricercaImmediata,
  piUtilizziIlNostroIlProce,
  propPadding,
  propWidth,
  propFlex,
  textClassName = "",
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      flex: propFlex,
    };
  }, [propWidth, propFlex]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start py-[1.875rem] pr-[3.75rem] pl-[1.875rem] gap-[1.875rem] text-center text-[2rem] text-nero-3-findora font-gotham border-[4px] border-solid border-nero-3-findora ${className} md:pr-[1.85rem]`}
    >
      {/* container di tutta la card */}
      <div className="self-stretch flex flex-row items-start justify-start gap-[0.937rem]">
        {/* Numerino */}
        <div
          className={`w-[4.688rem] relative font-medium flex items-center justify-center shrink-0 ${textClassName} md:hidden`}
        >
          {prop}
        </div>
        {/* Titolo */}
        <b
          className={`flex-1 relative text-[2.25rem] text-bianco-1-findora text-left ${textClassName}`}
        >
          {ricercaImmediata}
        </b>
      </div>
      {/* Contenuto */}
      <div
        className="self-stretch flex flex-row items-start justify-start py-[0rem]  pl-[7.5rem] text-left text-[1.25rem] text-white md:pl-[1.875rem]"
        style={frameDivStyle}
      >
        {/* Descizione */}
        <div className={` relative flex-1 ${textClassName} max-w-[52.5rem]`}>
          {piUtilizziIlNostroIlProce}
        </div>
      </div>
    </div>
  );
};

export default BenefitCard;
