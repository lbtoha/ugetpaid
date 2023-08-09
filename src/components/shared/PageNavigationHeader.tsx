"use client";
import React from "react";

type Props = {
  title: string;
  items: string[];
};

const PageNavigationHeader = ({ title, items }: Props) => {
  return (
    <div className="flex items-center justify-between bg-C2E3549 p-S30">
      <p className="text-[48px] font-semibold capitalize text-white md:text-[50px] lg:text-[64px]">
        {title}
      </p>
      <div className="flex items-center">
        <ul className="align-items-center flex gap-x-2 max-sm:text-base">
          {items.map((item, i) => (
            <React.Fragment key={item}>
              <li>
                <a
                  href={item == "Home" ? "/" : "#"}
                  className={` ${
                    i === items.length - 1
                      ? "text-primary-color-2"
                      : "text-white"
                  }`}
                >
                  {item}
                </a>
              </li>
              {i !== items.length - 1 && (
                <li className="text-white">
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </li>
              )}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PageNavigationHeader;
