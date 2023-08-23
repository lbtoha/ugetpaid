import { StaticImageData } from "next/image";
import OfferWallsSideCard from "./OfferwallsSideCard";
type Prop = {
  sectionTitle: string;
  sectionDescription: string;
  sideCardData: {
    id: string | number;
    cardImage: StaticImageData;
    top: boolean;
    heading: string;
    popularity: number;
    countryFlag: StaticImageData;
  }[];
};
const OfferWallsSidebar = ({
  sectionTitle,
  sectionDescription,
  sideCardData,
}: Prop) => {
  return (
    <div className="rounded-[10px] bg-C2E3549 max-3xl:px-4 max-3xl:py-5 3xl:p-5 ">
      <p className="text-center text-2.3xl">{sectionTitle}</p>
      <p className="mt-S10 pb-5 text-center text-sm text-CBDC4DA">
        {sectionDescription}
      </p>
      <div>
        {sideCardData.map(
          ({ id, cardImage, top, heading, popularity, countryFlag }) => (
            <OfferWallsSideCard
              key={id}
              cardImage={cardImage}
              top={top}
              heading={heading}
              countryFlag={countryFlag}
              popularity={popularity}
            />
          ),
        )}
      </div>
    </div>
  );
};

export default OfferWallsSidebar;
