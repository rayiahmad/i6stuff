"use client"

import Image from "next/image";
import ImageProductSepatu from "@/assets/images/products/productsepatu.jpg";
import { useState } from "react";

const CardProductComponent =()=>{
    const [count, setCount] = useState(0);
    const plusCount =()=>{
        setCount (count => count + 1)
    }
    const minCount =()=>{
        setCount (count => count - 1)
    }
    return(
        <div className="w-full p-5 shadow rounded-md flex items-center space-x-5 mt-5">
          <input type="checkbox" className="checkbox" />
          <div className="flex space-x-2">
            <Image
              src={ImageProductSepatu}
              width={80}
              alt="Product"
              className="rounded-md"
            />
            <div className="font-body">
              <h1 className="font-bold">Sepatu Sneakers wanita</h1>
              <div className="flex space-x-2 items-center">
                <p className="font-body font-bold">Rp.315.000</p>
                <p className="font-body line-through text-xs">Rp.450.000</p>
              </div>
              <div className="space-x-2">
                <button className={`w-7 h-7 items-center rounded-full text-xl ${count === 0 ? "text-gray-400 btn-disabled" : "text-white bg-black" } `} disabled={count === 0} onClick={minCount}>-</button>
                <span className="font-bold">{count}</span>
                <button className="w-7 h-7 rounded-full text-xl text-white bg-black" onClick={plusCount}>+</button>
              </div>
            </div>
          </div>
        </div>
    )
}
export default CardProductComponent
