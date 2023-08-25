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
  parentUrl: string | undefined;
  handleClick: () => void;
};

const NavItem = ({
  iconName,
  menuTitle,
  linkUrl,
  menuOpen,
  subButtonStyles,
  subButton,
  parentUrl,
  handleClick,
}: Props) => {
  const pathname = usePathname();
  // this line check those url who have at list two // in the path name. then check with the parentUrl
  const matchValue = pathname.match(/\/.*\//)?.[0];
  console.log("matchValue", matchValue);
  return (
    <>
      {/* mobile menu item */}
      <li
        onClick={handleClick}
        className={`group custom-transition-button relative block rounded-[30px] p-[6px] hover:bg-C09B65E hover:text-CFFFFFF md:hidden  ${
          linkUrl == pathname ||
          (matchValue !== undefined && matchValue == parentUrl)
            ? "bg-C09B65E text-CFFFFFF"
            : "bg-C333A4E"
        }`}
      >
        <Link href={linkUrl} className={`flex items-center gap-x-[10px]`}>
          <div
            className={`custom-transition-button  flex max-h-[40px] min-h-[40px] min-w-[40px] max-w-[40px] items-center justify-center rounded-full bg-C373F56 p-2 text-2xl group-hover:bg-CFFFFFF group-hover:bg-opacity-30 ${
              linkUrl == pathname ||
              (matchValue !== undefined && matchValue == parentUrl)
                ? "bg-CFFFFFF bg-opacity-30"
                : ""
            }`}
          >
            <i className={`${iconName}`}></i>
          </div>
          <span className={` ${menuOpen ? "hidden" : "block"}`}>
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

      {/* large device menu item */}
      <li
        className={`group custom-transition-button relative hidden ${
          menuOpen ? "" : "w-fit"
        } rounded-[30px] p-[6px] hover:bg-C09B65E hover:text-CFFFFFF md:block  ${
          linkUrl == pathname ||
          (matchValue !== undefined && matchValue == parentUrl)
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
              linkUrl == pathname ||
              (matchValue !== undefined && matchValue == parentUrl)
                ? "bg-CFFFFFF bg-opacity-30"
                : ""
            }`}
          >
            <i className={`${iconName}`}></i>
          </div>
          <span className={` ${menuOpen ? "block " : "hidden"}`}>
            {menuTitle}
          </span>
        </Link>
        {subButton && menuOpen ? (
          <span
            className={` absolute right-[25px] top-[-9px] cursor-pointer rounded-[20px] px-2.5 text-xs ${subButtonStyles}`}
          >
            {subButton}
          </span>
        ) : (
          ""
        )}
      </li>
    </>
  );
};

export default NavItem;
