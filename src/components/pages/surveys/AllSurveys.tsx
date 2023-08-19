import SurveysCardDetails from "@/components/shared/SurveysCardDetails";
import { allSurveysCardData } from "@/public/data/surveys";

const AllSurveys = () => {
  return (
    <div className="mt-4 space-y-4 md:mt-7 md:space-y-6 xl:mt-10">
      {allSurveysCardData.map(({ id, cardImage, cardTitle, detailText }) => (
        <SurveysCardDetails
          key={id}
          cardImage={cardImage}
          cardTitle={cardTitle}
          detailText={detailText}
        />
      ))}
    </div>
  );
};

export default AllSurveys;
