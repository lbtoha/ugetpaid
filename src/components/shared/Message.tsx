import profileImage1 from "@/public/images/profile-1.png";
import profileImage2 from "@/public/images/profile-2.png";
import profileImage3 from "@/public/images/profile-3.png";
//@ts-ignore
import { Rating } from "@smastrom/react-rating";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import Xmark from "./Xmark";

const Message = ({
  messageOpen,
  setMessageOpen,
}: {
  messageOpen: boolean;
  setMessageOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div
      className={`sidebar-menu custom-transition fixed  right-0 top-[60px] z-[200] h-screen overflow-y-auto rounded-md bg-C2E3549  ${
        messageOpen
          ? " translate-x-[150px] opacity-0"
          : "translate-y-0 opacity-100"
      } `}
    >
      <div className="relative mb-10 px-5 pb-10 pt-12">
        <div
          onClick={() => {
            setMessageOpen(!messageOpen);
          }}
        >
          <Xmark />
        </div>
        <div className="space-y-4">
          <div className="flex max-w-[290px] gap-3 rounded-md bg-C212737 p-3">
            <div className="my-auto min-w-[80px] space-y-4">
              <Image
                src={profileImage1}
                width={60}
                height={60}
                alt="Image"
                className="mx-auto block"
              />
              <div className="w-[50px]">
                <Rating
                  style={{ maxWidth: 100 }}
                  value={4.5}
                  readOnly
                  transition="none"
                  spaceInside="none"
                  radius="none"
                  className="message-rating-star-style"
                />
              </div>
            </div>
            <div>
              <p className="text-2xl">Reza Dave</p>
              <p className="mt-4 text-CBDC4DA">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </div>
          </div>
          <div className="flex max-w-[290px] gap-3 rounded-md bg-C212737 p-3">
            <div className="my-auto min-w-[80px] space-y-4">
              <Image
                src={profileImage2}
                width={60}
                height={60}
                alt="Image"
                className="mx-auto block"
              />
              <div className="w-[50px]">
                <Rating
                  style={{ maxWidth: 100 }}
                  value={4.5}
                  readOnly
                  transition="none"
                  spaceInside="none"
                  radius="none"
                  className="message-rating-star-style"
                />
              </div>
            </div>
            <div>
              <p className="text-2xl">Vincent Porter</p>
              <p className="mt-4 text-CBDC4DA">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </div>
          </div>
          <div className="flex max-w-[290px] gap-3 rounded-md bg-C212737 p-3">
            <div className="my-auto min-w-[80px] space-y-4">
              <Image
                src={profileImage1}
                width={60}
                height={60}
                alt="Image"
                className="mx-auto block"
              />
              <div className="w-[50px]">
                <Rating
                  style={{ maxWidth: 100 }}
                  value={4.5}
                  readOnly
                  transition="none"
                  spaceInside="none"
                  radius="none"
                  className="message-rating-star-style"
                />
              </div>
            </div>
            <div>
              <p className="text-2xl">Reza Dave</p>
              <p className="mt-4 text-CBDC4DA">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </div>
          </div>
          <div className="flex max-w-[290px] gap-3 rounded-md bg-C212737 p-3">
            <div className="my-auto min-w-[80px] space-y-4">
              <Image
                src={profileImage3}
                width={60}
                height={60}
                alt="Image"
                className="mx-auto block"
              />
              <div className="w-[50px]">
                <Rating
                  style={{ maxWidth: 100 }}
                  value={4.5}
                  readOnly
                  transition="none"
                  spaceInside="none"
                  radius="none"
                  className="message-rating-star-style"
                />
              </div>
            </div>
            <div>
              <p className="text-2xl">Dave Fields</p>
              <p className="mt-4 text-CBDC4DA">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </div>
          </div>
          <div className="flex max-w-[290px] gap-3 rounded-md bg-C212737 p-3">
            <div className="my-auto min-w-[80px] space-y-4">
              <Image
                src={profileImage3}
                width={60}
                height={60}
                alt="Image"
                className="mx-auto block"
              />
              <div className="w-[50px]">
                <Rating
                  style={{ maxWidth: 100 }}
                  value={4.5}
                  readOnly
                  transition="none"
                  spaceInside="none"
                  radius="none"
                  className="message-rating-star-style"
                />
              </div>
            </div>
            <div>
              <p className="text-2xl">Dave Fields</p>
              <p className="mt-4 text-CBDC4DA">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </div>
          </div>
          <div className="flex max-w-[290px] gap-3 rounded-md bg-C212737 p-3">
            <div className="my-auto min-w-[80px] space-y-4">
              <Image
                src={profileImage2}
                width={60}
                height={60}
                alt="Image"
                className="mx-auto block"
              />
              <div className="w-[50px]">
                <Rating
                  style={{ maxWidth: 100 }}
                  value={4.5}
                  readOnly
                  transition="none"
                  spaceInside="none"
                  radius="none"
                  className="message-rating-star-style"
                />
              </div>
            </div>
            <div>
              <p className="text-2xl">Vincent Porter</p>
              <p className="mt-4 text-CBDC4DA">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
