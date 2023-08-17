"use client";
import React from "react";

type Props = {
  title: string;
  items: string[];
};

const PageNavigationHeader = ({ title, items }: Props) => {
  return (
    <div className="flex items-center justify-between bg-C2E3549 p-S30">
      <div>
        <h2 className="text-[48px] font-semibold capitalize text-white md:text-[50px] leading-[130%] lg:text-[64px]">
          {title}
        </h2>
      </div>
      <div className="flex items-center">
        <ul className="align-items-center flex gap-x-2 max-sm:text-base text-CBBC2FA">
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
                <li>
                  <span className="material-symbols-outlined">
                    chevron_right
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
