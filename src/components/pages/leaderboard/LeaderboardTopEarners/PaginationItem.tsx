import React from "react";
type Props = {
  pageNumber: number;
  activeOrNot: boolean;
};

const PaginationActive = ({ pageNumber, activeOrNot }: Props) => {
  return (
    <div
      className={`p-[15px] cursor-pointer ${
        activeOrNot ? "bg-C00FF8B text-C1A1F2C" : "bg-C2C3346"
      }  hover:bg-C00FF8B hover:text-C1A1F2C rounded-[15px] flex-col justify-center items-center gap-2.5 inline-flex`}
    >
      <div className="text-center text-C1A1F2C text-base font-bold leading-normal">
        {pageNumber}
      </div>
    </div>
  );
};

export default PaginationActive;
