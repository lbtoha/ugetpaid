"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import logoFav from "@/public/images/fav.png";
import logo from "@/public/images/logo.png";
import NavItem from "./navbar/NavItem";
import { navItemsData } from "@/public/data";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <header>
      <div
        className={`relative bg-CFFFFFF ${
          menuOpen
            ? "md:w-[calc(100% - 240px)] md:ms-[240px]"
            : "md:w-[calc(100% - 150px)] md:ms-[150px]"
        } `}
      >
        {/* top menu */}
        <div className="bg-C282F41 absolute left-0 top-0 py-[10px] ps-10 md:ps-10 lg:ps-[54px] pe-2 lg:pe-6 w-[100%]">
          <div className="flex items-center max-xl:gap-x-5 justify-end sm:justify-between ">
            <div
              onClick={() => setMenuOpen(!menuOpen)}
              className="bg-C373F56 p-2 rounded-[15px] cursor-pointer absolute w-[30px] h-[30px] z-20 flex items-center justify-center left-1 md:-left-[10px]"
            >
              <i className="icon-c-bar text-sm text-CBBC2FA "></i>
            </div>
            <form className="flex-auto max-w-[200px] lg:max-w-[463px] hidden sm:flex items-center px-[30px] border border-C3F4C71 focus-within:outline focus-within:outline-1 focus-within:outline-C09B65E gap-x-[10px] b bg-C212737 rounded-[15px]">
              <i className="icon-m-search text-2xl text-C6B7093"></i>
              <input
                className="placeholder:text-C4B517A bg-inherit py-[13px]"
                type="text"
                placeholder="Offername, Offer wall, event, giveaway"
              />
            </form>

            <div className="flex items-center gap-x-3 md:gap-x-6">
              <button className="flex items-center text-CFFFFFF text-base font-bold gap-x-2 px-3 lg:px-5 py-2 xl:py-[10px] bg-C373F56 rounded-[10px]">
                <div className="lg:block hidden">
                  <i className="fas fa-user"></i>
                </div>
                <span>Sign in</span>
              </button>
              <button className="flex items-center text-C282F41 text-base font-bold gap-x-2 px-3 lg:px-5 py-2 xl:py-[10px] bg-C09B65E rounded-[10px]">
                <div className="lg:block hidden">
                  <i className="fas fa-user-plus"></i>
                </div>
                <span>Sign up</span>
              </button>
              <div className="text-2xl  min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px] text-C7886AE p-2 cursor-pointer bg-C373F56 flex items-center rounded-full justify-center">
                <i className="icon-d-chat"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* sidebar menu */}
      <div
        className={`bg-C2E3549 p-5 absolute top-0 left-0 max-md:z-50 ${
          menuOpen ? "max-md:hidden" : "max-md:block"
        } ${menuOpen ? "w-[240px] md:w-[240px]" : "md:w-[150px]"}`}
      >
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          className="absolute top-3 text-2xl right-3 block md:hidden"
        >
          <i className="fa-solid fa-xmark"></i>
        </div>
        <div>
          <Link
            href="/"
            className="flex gap-x-2 justify-center items-center max-w-[140px] h-[40px]"
          >
            <Image src={logoFav} alt="Fav" />
            <Image
              src={logo}
              alt="LogoFav"
              className={`${menuOpen ? "lg:block" : "lg:hidden"}`}
            />
          </Link>
        </div>
        <div className="text-CBBC2FA font-bold mt-11 text-base ">
          <ul className="space-y-5">
            {navItemsData.map(({ id, iconName, menuTitle, linkUrl }) => (
              <NavItem
                key={id}
                iconName={iconName}
                menuTitle={menuTitle}
                linkUrl={linkUrl}
                menuOpen={menuOpen}
              />
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
