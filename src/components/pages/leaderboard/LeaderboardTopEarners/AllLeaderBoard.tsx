import { ModalIsOpenOrNot } from "@/app/layout";
import { crownCardData, leaderListData } from "@/public/data/LeaderBoard";
import React, { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import LeaderBoardCrownCard from "./LeaderBoardCrownCard";
import LeaderBoardList from "./LeaderBoardList";

const AllLeaderBoard = () => {
  const { setLeaderBoardModalOpen } = useContext(ModalIsOpenOrNot);
  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 justify-between gap-7 sm:grid-cols-2 xl:grid-cols-3 xl:gap-10">
        {crownCardData.map(({ image, name, point, bonus, coin, position }) => (
          <React.Fragment key={uuidv4()}>
            <LeaderBoardCrownCard
              image={image}
              name={name}
              point={point}
              bonus={bonus}
              coin={coin}
              position={position}
              setLeaderBoardModalOpen={setLeaderBoardModalOpen}
            />
          </React.Fragment>
        ))}
      </div>
      <div className="mt-S60 space-y-5">
        {leaderListData.map(({ image, name, point, bonus, coin, position }) => (
          <div key={uuidv4()} onClick={() => setLeaderBoardModalOpen(true)}>
            <LeaderBoardList
              image={image}
              name={name}
              point={point}
              bonus={bonus}
              coin={coin}
              position={position}
            />
          </div>
        ))}
      </div>
      {/* <div className="mt-S60 flex items-center justify-center gap-2.5 ">
        <div className="inline-flex cursor-pointer flex-col items-center justify-center gap-2.5 rounded-[15px] bg-C00FF8B p-[15px]">
          <div className="text-center text-base font-bold leading-normal text-C1A1F2C">
            01
          </div>
        </div>
        <div className="inline-flex cursor-pointer flex-col items-center justify-center gap-2.5 rounded-[15px] bg-C2C3346 p-[15px] hover:bg-C00FF8B hover:text-C1A1F2C">
          <div className="text-center text-base font-bold leading-normal">
            02
          </div>
        </div>
        <div className="inline-flex cursor-pointer flex-col items-center justify-center gap-2.5 rounded-[15px] bg-C2C3346 p-[15px] hover:bg-C00FF8B hover:text-C1A1F2C">
          <div className="text-center text-base font-bold leading-normal">
            03
          </div>
        </div>
        <div className="inline-flex cursor-pointer flex-col items-center justify-center gap-2.5 rounded-[15px] bg-C2C3346 p-[15px] hover:bg-C00FF8B hover:text-C1A1F2C">
          <div className="text-center text-base font-bold leading-normal">
            04
          </div>
        </div>
        <div className="inline-flex cursor-pointer flex-col items-center justify-center gap-2.5 rounded-[15px] bg-C2C3346 p-[15px] hover:bg-C00FF8B hover:text-C1A1F2C">
          <div className="text-center text-base font-bold leading-normal">
            05
          </div>
        </div>
        <div className="inline-flex cursor-pointer flex-col items-center justify-center gap-2.5 rounded-[15px] bg-C2C3346 p-[15px] hover:bg-C00FF8B hover:text-C1A1F2C">
          <div className="text-center text-base font-bold leading-normal">
            06
          </div>
        </div>
        <div className="inline-flex cursor-pointer flex-col items-center justify-center gap-2.5 rounded-[15px] bg-C2C3346 p-[15px] hover:bg-C00FF8B hover:text-C1A1F2C">
          <div className="text-center text-base font-bold leading-normal">
            07
          </div>
        </div>
        <div className="inline-flex cursor-pointer flex-col items-center justify-center gap-2.5 rounded-[15px] bg-C2C3346 p-[15px] hover:bg-C00FF8B hover:text-C1A1F2C">
          <div className="text-center text-base font-bold leading-normal">
            08
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default AllLeaderBoard;
