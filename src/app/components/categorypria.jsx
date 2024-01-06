import KaosPria from "@/assets/images/man/kaospria.png";
import JaketPria from "@/assets/images/man/jaketpria.png"
import FlannelPria from "@/assets/images/man/flannel.png"
import JeansPria from "@/assets/images/man/jeans.png"
import SweaterPria from "@/assets/images/man/sweater.png"
import HoddiePria from "@/assets/images/man/hoddie.png"
import SepatuPria from "@/assets/images/man/sepatu.png"
import Image from "next/image";

const CategoryPria = () => {
  return (
    <div className="w-full mt-10 grid grid-cols-2 sm:grid-cols-3 lg:flex lg:space-x-5">
      <div className=" w-32 text-center">
        <Image src={KaosPria} alt="kaos pria" width={200} height={100} />
        <h1 className="lg:text-xl text-sm font-bold font-body mt-2">Kaos</h1>
      </div>
      <div className=" w-32 text-center">
        <Image src={JaketPria} alt="Jaket Pria" width={200} height={100} />
        <h1 className="lg:text-xl text-sm font-bold font-body mt-2">Jaket</h1>
      </div>
      <div className=" w-32 text-center">
        <Image src={FlannelPria} alt="Flannel Pria" width={200} height={100} />
        <h1 className="lg:text-xl text-sm font-bold font-body mt-2">Flannel</h1>
      </div>
      <div className=" w-32 text-center">
        <Image src={JeansPria} alt="Jeans Pria" width={200} height={100} />
        <h1 className="lg:text-xl text-sm font-bold font-body mt-2">Jeans</h1>
      </div>
      <div className=" w-32 text-center">
        <Image src={SweaterPria} alt="Sweater Pria" width={200} height={100} />
        <h1 className="lg:text-xl text-sm font-bold font-body mt-2">Sweater</h1>
      </div>
      <div className=" w-32 text-center">
        <Image src={HoddiePria} alt="Hoddie Pria" width={200} height={100} />
        <h1 className="lg:text-xl text-sm font-bold font-body mt-2">Hoddie</h1>
      </div>
      <div className=" w-32 text-center">
        <Image src={SepatuPria} alt="Sepatu Pria" width={200} height={100} />
        <h1 className="lg:text-xl text-sm font-bold font-body mt-2">Sepatu</h1>
      </div>
    </div>
  );
};
export default CategoryPria;
