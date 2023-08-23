import Link from "next/link";

type Props = {
  iconName: string;
  link: string;
};

const SocialIcon = ({ iconName, link }: Props) => {
  return (
    <Link
      href={link}
      className="group custom-transition-button flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-C000000 p-[13px] hover:border-CE0E4FF hover:bg-CFFFFFF md:h-S50 md:w-S50"
    >
      <i
        className={`fa-brands custom-transition group-hover:text-C02835B fa-${iconName}`}
      ></i>
    </Link>
  );
};

export default SocialIcon;
