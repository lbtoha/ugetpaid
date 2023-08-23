"use client";
import { useRef } from "react";
import { toast } from "react-hot-toast";

const AffiliateLink = () => {
  const textAreaRef = useRef<HTMLSpanElement | null>(null);

  async function copyToClipboard() {
    if (textAreaRef.current) {
      try {
        const copyText = await navigator.clipboard.writeText(
          textAreaRef?.current?.innerText,
        );

        toast.success("Copy Successfully.");
      } catch (err) {
        console.error("Failed to copy: ", err);
      }
    }
  }

  return (
    <div className="rounded-p-S15 mt-6 inline-flex w-full gap-5 bg-C2E3549 p-[30px]">
      <div className="inline-flex shrink grow basis-0 flex-col gap-2">
        <p className="self-stretch">Affiliates Link</p>
        <div className="items-center gap-2.5  self-stretch max-xl:space-y-5 xl:inline-flex">
          <div className="flex h-[51px] shrink grow basis-0 items-center gap-2.5 rounded-[15px] border border-C3F4C70 px-2.5 py-1 md:py-4 xl:px-[30px]">
            <div className="grow basis-0">
              <span className="text-sm text-CBDC4DA">
                Your referral code :{" "}
              </span>
              <span className="text-sm text-C00D675" ref={textAreaRef}>
                7f66f48062
              </span>
            </div>
          </div>
          <button
            onClick={() => {
              copyToClipboard();
            }}
            className="flex items-center justify-center gap-x-2 self-stretch rounded-[10px] bg-C00D675 px-5 py-2 font-bold text-C282F41 shadow xl:px-10"
          >
            Copy link
          </button>
        </div>
      </div>
    </div>
  );
};

export default AffiliateLink;
