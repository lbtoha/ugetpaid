type Prop = {
  buttonText: string;
};

const SecondaryButton = ({ buttonText }: Prop) => {
  return (
    <button className="shadow-[0px  4px 16px 0px rgba(0, 0, 0, 0.25)] custom-transition-button w-fit cursor-pointer rounded-xl border border-transparent bg-C09B65E px-5 py-[10px] text-sm font-bold text-C282F41 hover:border hover:border-C09B65E hover:bg-opacity-10 hover:text-white">
      {buttonText}
    </button>
  );
};

export default SecondaryButton;
