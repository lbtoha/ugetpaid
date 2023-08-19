import Image, { StaticImageData } from "next/image";
import SecondaryButton from "./SecondaryButton";

type Props = {
  cardImage: StaticImageData;
  cardHeading: string;
  cardText: string;
  btnText: string;
};

const BigCard = ({ cardImage, cardHeading, cardText, btnText }: Props) => {
  return (
    <div className=" flex items-center justify-center rounded-xl bg-gradient-offer-walls-1 px-8 py-10 text-center xxl:px-10 xxl:py-S90">
      <div>
        <Image
          src={cardImage}
          alt="Card Image"
          className="w-[240px] rounded-full border border-C535E7C"
        />
        <h5 className="mt-10 text-3xl xxl:text-4xl">{cardHeading}</h5>
        <p className="mt-S10 text-sm text-CBDC4DA">{cardText}</p>
        <div className="mt-10">
          <SecondaryButton buttonText={btnText} />
        </div>
      </div>
    </div>
  );
};

export default BigCard;
