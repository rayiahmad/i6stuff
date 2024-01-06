import Image from "next/image";
import ImageProductSepatu from "@/assets/images/products/productsepatu.jpg"

const CardproductCo =()=>{
    return (
        <div className="w-full flex flex-col md:flex-row items-center space-y-5 md:space-y-0 md:space-x-5 mt-5">
          <div className="flex flex-row space-x-2 space-y-2 md:space-y-0 md:space-x-2">
            <Image
              src={ImageProductSepatu}
              width={80}
              alt="Product"
              className="rounded-md"
            />
            <div className="font-body">
              <h1 className="font-bold">Sepatu Sneakers wanita</h1>
              <h1 className="text-sm">1 barang</h1>
              <div className="flex space-x-2 items-center">
                <p className="font-body font-bold">Total Harga :</p>
                <p className="font-body font-bold">Rp.315.000</p>
              </div>
            </div>
          </div>
        </div>
    )
}
export default CardproductCo
