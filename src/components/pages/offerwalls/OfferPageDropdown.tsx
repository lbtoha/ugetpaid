"use client";
import React from "react";
import { useState } from "react";
import { Listbox } from "@headlessui/react";
type Props = {
  categoryArray: Array<{
    id: number | string;
    option: string;
  }>;
  filterFunction: any;
  buttonSideText?: string;
};

const OfferPageDropdown = ({
  categoryArray,
  buttonSideText,
  filterFunction,
}: Props) => {
  const [selectedOption, setSelectedOption] = useState(categoryArray[0].option);

  return (
    <Listbox value={selectedOption} onChange={setSelectedOption}>
      <div className="relative">
        <Listbox.Button className="bg-C144339 px-5 py-S10 flex items-center gap-x-5 leading-[150%] rounded-[5px] text-xs">
          {buttonSideText} {selectedOption}
          <span className="material-symbols-outlined">arrow_drop_down</span>
        </Listbox.Button>
        <Listbox.Options className="absolute bg-C144339  top-full left-0 min-w-full  px-S30 py-S10 rounded-bl-[15px] rounded-br-[15px] pb-5">
          {categoryArray.map(({ id, option }) => (
            <Listbox.Option
              className="cursor-pointer"
              key={id}
              value={option}
              onClick={() => {
                filterFunction(option);
                setSelectedOption(option);
              }}
            >
              {option}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  );
};

export default OfferPageDropdown;
