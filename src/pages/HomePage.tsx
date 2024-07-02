import { FunctionComponent } from "react";

export type HomePageType = {
  className?: string;
};

const HomePage: FunctionComponent<HomePageType> = ({ className = "" }) => {
  return (
    <div
      className={`w-full h-screen flex flex-col justify-between text-center text-[1rem] text-white font-gotham ${className}`}
      style={{ background: "linear-gradient(90deg, #1ab58a, #0e8cad)" }}
    >
      <div className="flex flex-col items-center justify-center flex-grow">
        <div className="flex flex-row items-center justify-center gap-[3.75rem] animate-fade-down animate-once animate-duration-1000 animate-ease-in-out md:gap-[0rem] sm:gap-[1rem]">
          <div className="flex flex-row items-center justify-center">
            <img
              className="w-[11.25rem] h-[11.25rem] md:h-[8.75rem] sm:w-[5rem] ss:w-[3rem]"
              alt=""
              src="vector.svg"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              className="w-[42.188rem] h-[9.375rem] md:w-[37.5rem] ml:w-[32.5rem] sm:w-[18.75rem] ss:w-[16rem] "
              alt=""
              src="group-136.svg"
            />
          </div>
        </div>
      </div>
      <div className="pb-8 opacity-75 animate-bounce">
        <div className="flex flex-row items-center justify-center p-[0.625rem]">
          <b className="relative">
            <p className="m-0">Scorri e scopri un mondo</p>
            <p className="m-0">di infinite opportunità</p>
          </b>
        </div>
        <div className="flex flex-col items-center justify-end">
          <img
            className="w-[0.938rem] h-[0.938rem] object-contain"
            alt=""
            src="polygon-5.svg"
          />
          <img
            className="w-[0.938rem] h-[0.938rem] object-contain"
            alt=""
            src="polygon-5.svg"
          />
          <img
            className="w-[0.938rem] h-[0.938rem] object-contain"
            alt=""
            src="polygon-5.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
