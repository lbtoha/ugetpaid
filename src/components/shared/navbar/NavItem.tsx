"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
type Props = {
  iconName: string;
  menuTitle?: string;
  linkUrl: string;
  menuOpen: boolean;
  subButtonStyles?: string;
  subButton?: string;
  handleClick: () => void;
};

const NavItem = ({
  iconName,
  menuTitle,
  linkUrl,
  menuOpen,
  subButtonStyles,
  subButton,
  handleClick,
}: Props) => {
  const pathname = usePathname();
  console.log(pathname.slice(1));
  return (
    <li
      onClick={handleClick}
      className={`group custom-transition-button relative rounded-[30px] p-[6px] hover:bg-C09B65E hover:text-CFFFFFF  ${
        pathname == linkUrl || pathname.slice(1).includes(linkUrl)
          ? "bg-C09B65E text-CFFFFFF"
          : "bg-C333A4E"
      }`}
    >
      <Link
        href={linkUrl}
        className={`flex items-center gap-x-[10px] ${
          menuOpen ? "justify-start" : "md:justify-center"
        }`}
      >
        <div
          className={`custom-transition-button  flex max-h-[40px] min-h-[40px] min-w-[40px] max-w-[40px] items-center justify-center rounded-full bg-C373F56 p-2 text-2xl group-hover:bg-CFFFFFF group-hover:bg-opacity-30 ${
            pathname == linkUrl ? "bg-CFFFFFF bg-opacity-30" : ""
          }`}
        >
          <i className={`${iconName}`}></i>
        </div>
        <span
          className={` ${menuOpen ? "hidden md:block " : "block md:hidden"}`}
        >
          {menuTitle}
        </span>
      </Link>
      {subButton && (
        <span
          className={` absolute right-[25px] top-[-9px] cursor-pointer rounded-[20px] px-2.5 text-xs ${subButtonStyles}`}
        >
          {subButton}
        </span>
      )}
    </li>
  );
};

export default NavItem;
