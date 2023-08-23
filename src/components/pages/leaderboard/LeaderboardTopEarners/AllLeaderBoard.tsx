import { closeIcon } from "@/components/shared/ModalCloseIcon";
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

  return (
    <div className="mt-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 justify-between gap-7 sm:grid-cols-2 xl:grid-cols-3 xl:gap-10"
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
        className="mt-S60 space-y-5"
      >
        {leaderListData.map(({ image, name, point, bonus, coin, position }) => (
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
    </div>
  );
};

export default AllLeaderBoard;
