import loader from "@/public/images/preloader.gif";
import Image from "next/image";

const Loading = () => {
  return (
    <div className="custom-transition absolute left-0 top-0 z-[50000] flex h-screen w-full items-center justify-center bg-black transition-transform">
      <Image src={loader} width={250} alt="Preloader" />
    </div>
  );
};

export default Loading;
