import ImageBanner from "@/assets/images/bannerlanding.jpg";
import Image from "next/image";
import Link from "next/link";

const BannerComponent = () => {
  return (
    <div className="w-full max-lg:h-80 flex justify-center">
      <Image src={ImageBanner} alt="banner" className="lg:bg-cover max-lg:bg-auto max-lg:w-full max-lg:h-64 lg:relative mt-20 top-0" />
      <div className="lg:mt-64 mt-36 justify-center absolute">
        <h1 className="lg:text-4xl text-md text-white uppercase font-body font-bold text-center">
          Your style journey starts here.
        </h1>
        <h1 className="lg:text-xl text-sm text-center text-white font-body font-bold">
          Look good, feel good, shop good
        </h1>
        <div className="flex justify-center text-center mt-10 space-x-10">
          <Link href="/pria" className="btn uppercase bg-transparent px-10 lg:text-lg font-body text-white border border-white hover:bg-white hover:text-black">
           Pria
          </Link>
          <Link href="/wanita" className="btn bg-transparent px-10 lg:text-lg uppercase font-body text-white border border-white hover:bg-white hover:text-black">
            Wanita
          </Link>
        </div>
      </div>
    </div>
  );
};
export default BannerComponent;
