import Link from "next/link";
type Props = {
  iconName: string;
  menuTitle?: string;
  linkUrl: string;
  menuOpen: boolean;
  subButtonStyles?: string;
  subButton?: string;
};

const NavItem = ({
  iconName,
  menuTitle,
  linkUrl,
  menuOpen,
  subButtonStyles,
  subButton,
}: Props) => {
  return (
    <li className="group relative rounded-[30px] bg-C333A4E p-[6px] hover:bg-C09B65E hover:text-CFFFFFF">
      <Link
        href={linkUrl}
        className={`flex items-center gap-x-[10px] ${
          menuOpen ? "justify-start" : "md:justify-center"
        }`}
      >
        <div className="flex  max-h-[40px] min-h-[40px] min-w-[40px] max-w-[40px] items-center justify-center rounded-full bg-C373F56 p-2 text-2xl group-hover:bg-CFFFFFF group-hover:bg-opacity-30">
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
          className={` absolute right-[25px] top-[-9px] rounded-[20px] px-2.5 text-xs ${subButtonStyles}`}
        >
          {subButton}
        </span>
      )}
    </li>
  );
};

export default NavItem;
