import { closeIcon } from "@/components/shared/ModalCloseIcon";
import Pagination from "@/components/shared/Pagination";
import { crownCardData, leaderListData } from "@/public/data/LeaderBoard";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Modal from "react-responsive-modal";
import { v4 as uuidv4 } from "uuid";
import LeaderBoardCrownCard from "./LeaderBoardCrownCard";
import LeaderBoardList from "./LeaderBoardList";
import LeaderBoardModal from "./LeaderBoardModal";

const AllLeaderBoard = () => {
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); //page
  const [postsPerPage] = useState(5); //no of posts you want to render in one page

  //get current Posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = leaderListData.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (number: number) => {
    setCurrentPage(number);
  };

  return (
    <div className="mt-5 md:mt-8 lg:mt-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 justify-between gap-3 sm:grid-cols-2 md:gap-5 xl:grid-cols-3 xl:gap-10"
      >
        {crownCardData.map(({ image, name, point, bonus, coin, position }) => (
          <React.Fragment key={uuidv4()}>
            <LeaderBoardCrownCard
              image={image}
              name={name}
              point={point}
              bonus={bonus}
              coin={coin}
              position={position}
              setLeaderBoardModalOpen={setOpen}
            />
          </React.Fragment>
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mt-5 space-y-3 md:mt-10 md:space-y-5 xl:mt-S60"
      >
        {currentPosts.map(({ image, name, point, bonus, coin, position }) => (
          <div
            key={uuidv4()}
            onClick={() => setOpen(true)}
            className="cursor-pointer"
          >
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
      </motion.div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        center
        classNames={{
          modal: "customModal leaderBoardModal",
        }}
        closeIcon={closeIcon}
      >
        <LeaderBoardModal />
      </Modal>
      <div className="mx-auto mt-5 max-w-[320px] font-bold md:mt-8 lg:mt-10 xxl:mt-S60">
        <Pagination
          totalPosts={leaderListData.length}
          postsPerPage={postsPerPage}
          paginate={paginate}
          view={5}
          color={"white"}
          selectBg={"#00FF8B"}
          selectColor={"#1A1F2C"}
          boxRadius={"15px"}
          bgColor={"#2C3346"}
          boxHeight={50}
          boxWidth={50}
        />
      </div>
    </div>
  );
};

export default AllLeaderBoard;
