import Link from "next/link";
import React from "react";
type Props = {
  iconName: string;
  menuTitle?: string;
  linkUrl: string;
  menuOpen: boolean;
};

const NavItem = ({ iconName, menuTitle, linkUrl, menuOpen }: Props) => {
  return (
    <li className="bg-C333A4E p-[6px] rounded-[30px] group hover:bg-C09B65E hover:text-CFFFFFF">
      <Link
        href={linkUrl}
        className={`flex items-center gap-x-[10px] ${
          menuOpen ? "justify-start" : "md:justify-center"
        }`}
      >
        <div className="text-2xl  min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px] p-2 group-hover:bg-CFFFFFF group-hover:bg-opacity-30 bg-C373F56 flex items-center rounded-full justify-center">
          <i className={`${iconName}`}></i>
        </div>
        <span className={`${menuOpen ? "hidden md:block" : "block md:hidden"}`}>
          {menuTitle}
        </span>
      </Link>
    </li>
  );
};

export default NavItem;
