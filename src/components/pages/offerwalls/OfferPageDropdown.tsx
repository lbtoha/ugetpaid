"use client";
import { Listbox } from "@headlessui/react";
import { useState } from "react";
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
        <Listbox.Button className="flex items-center gap-x-5 rounded-[5px] bg-C144339 px-5 py-S10 text-xs leading-[150%]">
          {buttonSideText} {selectedOption}
          <span className="material-symbols-outlined">arrow_drop_down</span>
        </Listbox.Button>
        <Listbox.Options className="absolute left-0 top-full min-w-full rounded-bl-[15px]  rounded-br-[15px] bg-C144339 px-S30 py-S10 pb-5">
          {categoryArray.map(({ id, option }) => (
            <Listbox.Option
              className="mb-2 cursor-pointer border-b border-C1B5C4E pb-2  last-of-type:border-hidden"
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
