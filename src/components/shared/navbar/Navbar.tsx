"use client";
import { MenuIsOpenOrNot } from "@/app/layout";
import { navItemsData } from "@/public/data/navbarItems";
import logoFav from "@/public/images/fav.png";
import logo from "@/public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import NavItem from "./NavItem";

const Navbar = () => {
  const [scrollHight, setScrollHight] = useState<number>(0);
  const { menuOpen, setMenuOpen } = useContext(MenuIsOpenOrNot);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setScrollHight(scrollY);
  };

  // Scroll stop when mobile menu open
  const stopScroll = () => {
    document.body.style.overflow = "hidden";
  };

  // Scroll reset when mobile menu closed
  const resetScroll = () => {
    document.body.style.overflow = "auto";
  };

  const handleClick = () => {
    setMenuOpen(!menuOpen);
    resetScroll();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        scrollHight > 100 ? "fixed z-[100] " : ""
      } custom-transition w-full`}
    >
      <div
        className={`custom-transition relative bg-CFFFFFF ${
          menuOpen
            ? "md:w-[calc(100% - 240px)] md:ms-[240px]"
            : "md:w-[calc(100% - 150px)] md:ms-[150px]"
        } `}
      >
        {/* top menu */}
        <div
          className={`custom-transition  ${
            scrollHight > 100
              ? "z-[100] backdrop-blur-2xl backdrop-brightness-100 backdrop-contrast-100"
              : "bg-C282F41"
          }  absolute left-0 top-0 w-[100%]  py-[10px] pe-2 ps-10 md:ps-10 lg:pe-6 lg:ps-[54px]`}
        >
          <div className="flex items-center justify-end max-xl:gap-x-5 sm:justify-between ">
            <div
              onClick={() => {
                stopScroll();
                setMenuOpen(!menuOpen);
              }}
              className="absolute left-1 z-20 flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-[15px] bg-C373F56 p-2 md:-left-[16px]"
            >
              <i className="icon-c-bar text-sm text-CBBC2FA "></i>
            </div>
            <form className=" hidden flex-auto items-center gap-x-[10px] rounded-[15px] border border-C3F4C71 bg-C212737 px-[30px] focus-within:outline focus-within:outline-1 focus-within:outline-C09B65E min-[500px]:max-w-[250px] sm:flex min-[900px]:max-w-[280px] lg:max-w-[463px] ">
              <i className="icon-m-search text-2xl text-C6B7093"></i>
              <input
                className="bg-transparent py-[13px] placeholder:text-C4B517A  placeholder-shown:text-ellipsis"
                type="text"
                placeholder="Offername, Offer wall, event, giveaway"
              />
            </form>

            <div className="flex items-center gap-x-3 md:gap-x-6">
              <button className="custom-transition-button flex items-center gap-x-2 rounded-[10px] bg-C373F56 px-3 py-2 text-base font-bold text-CFFFFFF hover:bg-C09B65E hover:text-C282F41 md:py-[10px] lg:px-5">
                <span className="hidden lg:block">
                  <i className="fas fa-user"></i>
                </span>
                <span>Sign in</span>
              </button>
              <button className="custom-transition-button flex items-center gap-x-2 rounded-[10px] bg-C09B65E px-3 py-2 text-base font-bold text-C282F41 hover:bg-C373F56 hover:text-white md:py-[10px] lg:px-5">
                <span className="hidden lg:block">
                  <i className="fas fa-user-plus"></i>
                </span>
                <span>Sign up</span>
              </button>
              <div className="flex max-h-[40px] min-h-[40px] min-w-[40px] max-w-[40px] cursor-pointer items-center justify-center rounded-full bg-C373F56 p-2 text-2xl text-C7886AE">
                <i className="icon-d-chat"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* sidebar menu */}
      <div
        onClick={() => {
          resetScroll(), setMenuOpen(!menuOpen);
        }}
        className={`custom-transition fixed  top-0 z-[199] h-screen w-full bg-black md:hidden  ${
          menuOpen
            ? "max-md:left-full max-md:opacity-0"
            : "bg-opacity-60  max-md:block"
        }`}
      ></div>
      <div
        className={` sidebar-menu custom-transition fixed left-0 top-0 h-screen overflow-y-auto bg-C2E3549  p-5 max-md:z-[200] ${
          menuOpen
            ? "max-md:left-[-390px] max-md:opacity-0"
            : "opacity-100  max-md:block"
        } ${menuOpen ? "w-[240px] md:w-[240px]" : "md:w-[150px]"} `}
      >
        <div
          onClick={() => {
            resetScroll();
            setMenuOpen(!menuOpen);
          }}
          className="absolute right-3 top-3 block text-2xl md:hidden"
        >
          <i className="fa-solid fa-xmark"></i>
        </div>
        <div>
          <Link
            href="/"
            className="flex h-[40px] max-w-[140px] items-center justify-center gap-x-2"
          >
            <Image src={logoFav} alt="Fav" />
            <Image
              src={logo}
              alt="LogoFav"
              className={`${menuOpen ? "lg:block" : "lg:hidden"}`}
            />
          </Link>
        </div>
        <div className="mt-11 text-base font-bold text-CBBC2FA ">
          <ul
            className={`flex flex-col  space-y-5 ${
              menuOpen ? "" : "md:items-center"
            }`}
          >
            {navItemsData.map(
              ({
                id,
                iconName,
                menuTitle,
                linkUrl,
                subButtonStyles,
                parentUrl,
                subButton,
              }) => (
                <NavItem
                  key={id}
                  handleClick={handleClick}
                  iconName={iconName}
                  menuTitle={menuTitle}
                  linkUrl={linkUrl}
                  menuOpen={menuOpen}
                  parentUrl={parentUrl}
                  subButtonStyles={subButtonStyles}
                  subButton={subButton}
                />
              ),
            )}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
