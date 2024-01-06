import KaosWanita from "@/assets/images/women/kaoswanita.png";
import JaketWanita from "@/assets/images/women/jaketwanita.png"
import OuterWanita from "@/assets/images/women/outer.png"
import SweaterWanita from "@/assets/images/women/sweater.png"
import HoddieWanita from "@/assets/images/women/hoddie.png"
import SepatuWanita from "@/assets/images/women/sepatu.png"
import Image from "next/image";

const CategoryWanita = () => {
  return (
    <div className="w-full mt-10 lg:flex grid grid-cols-2 sm:grid-cols-3 lg:space-x-5">
      <div className=" w-32 text-center">
        <Image src={KaosWanita} alt="Kaos Wanita" width={200} height={100} />
        <h1 className="lg:text-xl text-sm font-bold font-body mt-2">Kaos</h1>
      </div>
      <div className=" w-32 text-center">
        <Image src={JaketWanita} alt="Jaket Wanita" width={200} height={100} />
        <h1 className="lg:text-xl text-sm font-bold font-body mt-2">Jaket</h1>
      </div>
      <div className=" w-32 text-center">
        <Image src={OuterWanita} alt="Outer" width={200} height={100} />
        <h1 className="lg:text-xl text-sm font-bold font-body mt-2">Outer</h1>
      </div>
      <div className=" w-32 text-center">
        <Image src={SweaterWanita} alt="Sweater Wanita" width={200} height={100} />
        <h1 className="lg:text-xl text-sm font-bold font-body mt-2">Sweater</h1>
      </div>
      <div className=" w-32 text-center">
        <Image src={HoddieWanita} alt="Hoddie" width={200} height={100} />
        <h1 className="lg:text-xl text-sm font-bold font-body mt-2">Hoddie</h1>
      </div>
      <div className=" w-32 text-center">
        <Image src={SepatuWanita} alt="Sepatu Wanita" width={200} height={100} />
        <h1 className="lg:text-xl text-sm font-bold font-body mt-2">Sepatu</h1>
      </div>
    </div>
  );
};
export default CategoryWanita;
