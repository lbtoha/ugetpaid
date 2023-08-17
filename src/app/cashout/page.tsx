import Withdraw from "@/components/pages/cashOut/Withdraw";
import PageNavigationHeader from "@/components/shared/PageNavigationHeader";
import SocialSection from "@/components/shared/SocialSection";
import {
  withdrawCashImages,
  withdrawGiftCardImages,
  withdrawSkinsImages,
} from "@/public/data/cashout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cashout | UGETPAID",
  description: "NextJs Template",
};

const Earn1 = () => {
  return (
    <>
      <PageNavigationHeader title="Cashout" items={["Home", "Cashout"]} />
      <Withdraw titleText="Withdraw Cash" imageArray={withdrawCashImages} />
      <Withdraw
        titleText="Withdraw Giftcards"
        imageArray={withdrawGiftCardImages}
      />
      <Withdraw titleText="Withdraw Skins" imageArray={withdrawSkinsImages} />
      <SocialSection />
    </>
  );
};

export default Earn1;
