import ImageProduct from "@/assets/images/products/productsepatu.jpg";
import StarProduct from "@/assets/svg/starproduct.svg";
import Link from "next/link";
import Image from "next/image";

const CardProduct = () => {
  return (
    <Link
      href="/1"
      className="relative rounded-xl pb-4 mb-5 bg-white shadow sm:w-52 w-full"
    >
      <span className="absolute z-10 top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
        Diskon 30%
      </span>
      <div className="relative block overflow-hidden rounded-lg">
        <Image
          className="hover:scale-150 transition-transform duration-150 ease-in"
          src={ImageProduct}
          alt="Sepatu"
        />
      </div>
      <div className="mt-2 mx-5">
        <div className="font-body font-medium text-lg">
          Sepatu Sneakers wanita
        </div>
        <div className="flex space-x-2 items-center">
          <p className="font-body font-bold mt-2">Rp.315.000</p>
          <p className="font-body line-through text-xs mt-2">Rp.450.000</p>
        </div>
        <div className="flex space-x-3 mt-2 items-center">
          <Image src={StarProduct} alt="Star" width={30} />
          <p className="font-body text-sm">5.0</p>
        </div>
      </div>
    </Link>
  );
};
export default CardProduct;
