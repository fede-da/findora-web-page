import { FunctionComponent, useMemo, CSSProperties } from "react";

export type HowToWorkCardType = {
  className?: string;
  creaITuoiServizi?: string;
  offriLeTueCompetenzeEdIni?: string;
  src?: string;
  alt?: string;
  srcClassName?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  textClassName?: string;
};

const HowToWorkCard: FunctionComponent<HowToWorkCardType> = ({
  className = "",
  creaITuoiServizi,
  offriLeTueCompetenzeEdIni,
  propAlignSelf,
  textClassName = "",
  srcClassName = "",
  src,
  alt = "",
}) => {
  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  return (
    <div
      className={`self-stretch flex flex-col items-center justify-start gap-[0.937rem] text-center text-[1.5rem] text-bianco-1-findora font-gotham ${className}`}
      style={frameDiv2Style}
    >
      {/* icon */}
      <img
        className={`${srcClassName} relative h-[150px] overflow-hidden shrink-0 p-[1rem] md:h-[125px] sm:h-[100px]`}
        src={src}
        alt={alt}
      />
      {/* titolo */}
      <b
        className={`self-stretch relative flex items-center justify-center min-h-[3.375rem] max-h-full shrink-0 ${textClassName} `}
      >
        {creaITuoiServizi}
      </b>
      {/* description */}
      <div
        className={`w-full relative text-[1.25rem] text-white text-left inline-block max-w-[28.125rem] ${textClassName} sm:text-center`}
      >
        {offriLeTueCompetenzeEdIni}
      </div>
    </div>
  );
};

export default HowToWorkCard;
