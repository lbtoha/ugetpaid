import callAction from "@/public/images/call-action-Illus.png";
import Image from "next/image";
import PrimaryButton from "../../shared/PrimaryButton";

export const StartEarning = () => {
  return (
    <section className="section-gap">
      <div className="grid grid-cols-12 items-center justify-between">
        <div className="col-start-2 col-end-8">
          <Image src={callAction} alt="Call action " />
        </div>
        <div className="col-start-8 col-end-12">
          <div>
            <p className="text-2xl text-C00FF8B">What are you Waiting for?</p>
            <h2 className="mt-[10px] text-4xl">Start Earning Money Today</h2>
            <div className={`mt-[10px] text-sm text-CBDC4DA`}>
              <p>
                An average survey takes 10 minutes to complete and pays out $4,
                which equates to $24/hour.
              </p>
              <p className="mt-5">
                Getting paid to do surveys on the internet with ugetpaid is not
                only simple but also entertaining. Everyone who wants to join
                may do so without cost for their whole lives. On the internet,
                anybody can sign up and start making money right away at no
                cost.
                <p className="mt-5">
                  Participating in our online paid surveys does not need any
                  prior expertise on your part in any way. We are just
                  interested in hearing your completely honest opinion.
                </p>
              </p>
            </div>
          </div>
          <div className="mt-10">
            <PrimaryButton buttonText="Start Earning Now" />
          </div>
        </div>
      </div>
    </section>
  );
};
