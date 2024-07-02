import { FunctionComponent } from "react";

export type ListaDattesaType = {
  className?: string;
};

const ListaDattesa: FunctionComponent<ListaDattesaType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-center justify-center text-center text-[4rem] text-white font-gotham ${className}`}
    >
      <div className="self-stretch bg-verde-1-findora h-[11.25rem] flex flex-row items-center justify-center">
        <b className="relative flex items-center self-stretch justify-center flex-1 md:text-[3rem]">
          LISTA D’ATTESA
        </b>
      </div>
    </div>
  );
};

export default ListaDattesa;
