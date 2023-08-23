type Props = {
  number: number;
  title: string;
};
const ProfileInfoBtn = ({ number, title }: Props) => {
  return (
    <div className="rounded-[15px] bg-C2E3549 p-4 max-md:w-full md:p-5">
      <p className="self-stretch text-center text-2xl font-semibold leading-[33.60px] text-C109F5A">
        {number}
      </p>
      <p className="self-stretch text-center">{title}</p>
    </div>
  );
};

export default ProfileInfoBtn;
