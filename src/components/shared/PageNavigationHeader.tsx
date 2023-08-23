"use client";
import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  items: string[];
};

const PageNavigationHeader = ({ title, items }: Props) => {
  return (
    <div className="flex items-center justify-between gap-4 bg-C2E3549 max-sm:flex-wrap max-sm:px-3 max-sm:py-7 sm:p-S30">
      <h2 className="text-2.3xl font-semibold capitalize leading-[130%] text-white md:text-[50px] xl:text-[64px]">
        {title}
      </h2>

      <ul className="flex flex-wrap items-center gap-1 text-CBBC2FA max-sm:text-base md:gap-2">
        {items.map((item, i) => (
          <React.Fragment key={item}>
            <li>
              <Link
                href={item == "Home" ? "/" : "#"}
                className={` ${
                  i === items.length - 1 ? "text-primary-color-2" : "text-white"
                }`}
              >
                {item}
              </Link>
            </li>
            {i !== items.length - 1 && (
              <li className="flex items-center">
                <span className="material-symbols-outlined ">
                  chevron_right
                </span>
              </li>
            )}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default PageNavigationHeader;
