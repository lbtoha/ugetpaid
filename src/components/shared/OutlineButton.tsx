type Prop = {
  buttonText: string;
};

const OutlineButton = ({ buttonText }: Prop) => {
  return (
    <button className="custom-transition-button w-fit cursor-pointer rounded-xl border border-C09B65E bg-C09B65E bg-opacity-10 px-5 py-[10px] text-sm font-bold text-C09B65E hover:bg-opacity-30">
      <span>{buttonText}</span>
    </button>
  );
};

export default OutlineButton;
