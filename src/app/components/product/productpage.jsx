"use client";

import ProductSepatu from "@/assets/images/products/productsepatu.jpg";
import MoreIcon from "@/assets/svg/more.svg";
import StarProduct from "@/assets/svg/starproduct.svg";
import StarComponent from "../star";
import Image from "next/image";
import { useState } from "react";

const ProductPageComponent = () => {
  const [tabSelected, setTabSelected] = useState(0);
  const [tabmenuSelected, setTabmenuSelected] = useState(0);
  const [modalKomen, setModalKomen] = useState(false);
  const [count, setCount] = useState(0);
    const plusCount =()=>{
        setCount (count => count + 1)
    }
    const minCount =()=>{
        setCount (count => count - 1)
    }

  return (
    <>
    <div className="space-x-4 sm:space-x-20 flex flex-col sm:flex-row mt-6 sm:mt-24 mx-4 sm:mx-32">
      <div className="rounded-md top-20 overflow-hidden">
        <Image
          className="max-md:sticky max-lg:mt-20 max-lg:z-10 max:lgtop-20"
          width={500}
          src={ProductSepatu}
          alt="Sepatu"
        />
      </div>
      <div className="grid sticky">
        <div className="tabs my-2">
          <button
            className={`tab tab-bordered ${
              tabmenuSelected == 0 ? "tab-active" : ""
            }`}
            onClick={() => setTabmenuSelected(0)}
          >
            Detail Produk
          </button>
          <button
            className={`tab tab-bordered ${
              tabmenuSelected == 1 ? "tab-active" : ""
            }`}
            onClick={() => setTabmenuSelected(1)}
          >
            Ulasan
          </button>
        </div>
        {tabmenuSelected == 0 ? (
          //Detail Produk
          <>
            <div className="mt-4 sm:mt-8 h-80 no-scrollbar overflow-y-auto">
              <span className="py-1 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                Diskon 30%
              </span>
              <h1 className="mt-3 font-body font-bold text-3xl">
                Sepatu Sneakers wanita
              </h1>
              <p className="font-body">Terjual 3</p>
              <div className="flex items-center space-x-2">
                <Image src={StarProduct} alt="Star" width={30} />
                <p className=" font-body ">5.0</p>
              </div>
              <div className="flex mt-3 space-x-2 items-center">
                <h1 className="font-body font-bold text-2xl">Rp.315.000</h1>
                <h2 className="text-sm line-through ">Rp.450.000</h2>
              </div>
              <div className="space-x-2 font-body">
                <button className={`w-7 h-7 items-center rounded-full text-xl ${count === 0 ? "text-gray-400 btn-disabled" : "text-white bg-black" } `} disabled={count === 0} onClick={minCount}>-</button>
                <span className="font-semibold">{count}</span>
                <button className="w-7 h-7 rounded-full text-xl text-white bg-black" onClick={plusCount}>+</button>
              </div>
              <div className="tabs my-2">
                <button
                  className={`tab tab-bordered ${
                    tabSelected == 0 ? "tab-active" : ""
                  }`}
                  onClick={() => setTabSelected(0)}
                >
                  Detail
                </button>
                <button
                  className={`tab tab-bordered ${
                    tabSelected == 1 ? "tab-active" : ""
                  }`}
                  onClick={() => setTabSelected(1)}
                >
                  Info
                </button>
              </div>
              <div className=" w-48">
                {tabSelected == 0 ? (
                  <p>
                    Kondisi: Baru <br />
                    Min. Pemesanan: 1 Buah <br /> Etalase: Sports Wear
                    Perlengkapan Olahraga <br /> <br /> Sepatu Sneakers Running
                    Pria Sepatu Sport Shoes Casual Young Lifestyle <br /> Warna
                    : Cream, Gray, Black <br /> Ukuran : 38,39,40,41,42,43,44{" "}
                    <br /> <br /> Panjang Insole <br /> <br /> Size 39 : 24.5 cm{" "}
                    <br /> Size 40 : 25.5 cm <br /> Size 41 : 26.5 cm <br />{" "}
                    Size 42 : 27.5 cm <br /> Size 43 : 28 cm <br /> Size 44 :
                    28.5 cm <br /> Desain sepatu bergaya dinamis dan aktif, bisa
                    digunakan untuk Sport maupun aktifitas sehari - hari. <br />{" "}
                    Sol nya Kuat dan ringan, Upper nya dari bahan Sintetis
                    Leather yang berkualitas pastinya. <br />
                    Fitur: Ringan, tidak licin, nyaman. <br /> <br /> *Ukuran
                    Harap melihat gambar produk* <br /> <br /> Pengiriman
                    dilakukan setiap hari, untuk orderan diatas jam 5 sore akan
                    kami proses di hari berikutnya
                  </p>
                ) : (
                  <>
                    <h1 className=" font-bold">
                      Kebijakan Pengembalian Produk
                    </h1>
                    <br />
                    <p>
                      Syarat Pengajuan Klaim, 1.Wajib Melampirkan Video
                      Unboxing. 2.Tidak Menerima Returan atas murni kesalahan
                      pembeli(tidak cek ukuran dan deskripsi produk) 3.Produk
                      bisa di komplain apabila disertai video unboxing dan foto
                      4 sisi.(syarat pengajuan klaim bila rusak). 4.Kondisi
                      Barang Yang diretur/dikembalikan, harus sama saat barang
                      awal diterima.
                    </p>
                  </>
                )}
              </div>
            </div>
            <div className="grid space-y-2">
              <button className="btn bg-white text-black border-2 border-black">
                Keranjang
              </button>
              <button className="btn bg-black text-white">Beli</button>
            </div>
          </>
        ) : (
          //Ulasan
          <>
            <div className="mt-5 h-80 no-scrollbar overflow-y-auto">
              <h1 className="uppercase font-body font-bold">Ulasan Pembeli</h1>
              <div className="flex mt-5">
                <Image src={StarProduct} width={40} />
                <div className="flex items-center space-x-2 font-body">
                  <p className="text-6xl font-medium">5.0</p>
                  <div>
                    <p className="text-gray-400">/5.0</p>
                    <p className="text-sm">100% pembeli merasa puas.</p>
                  </div>
                </div>
              </div>
              <h1 className="uppercase mt-7 font-body font-bold">
                Ulasan Pilihan
              </h1>

              {Array.from({ length: 10 }, () => (
                <div className="mt-2">
                  <div className="flex items-center space-x-1">
                    <div className="flex justify-between space-x-20">
                      <div className="flex items-center space-x-1">
                        <StarComponent />
                        <p className="text-sm text-gray-600">3 hari lalu</p>
                      </div>
                      <details className="dropdown">
                        <summary className="btn bg-white">
                          <Image src={MoreIcon} width={20} />
                        </summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-20">
                          <li>
                            <a>Lapor</a>
                          </li>
                          <li>
                            <a>Suka</a>
                          </li>
                        </ul>
                      </details>
                    </div>
                  </div>
                  <div className="avatar my-2 items-center space-x-3">
                    <div className="w-8 rounded-full">
                      <img
                        src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                        alt="Tailwind-CSS-Avatar-component"
                      />
                    </div>
                    <p className=" font-body font-bold">Jenny</p>
                  </div>
                  <p className=" font-body text-sm font-medium">
                    Bagus Bangett!!!
                  </p>
                </div>
              ))}
            </div>
              <button
                className="btn normal-case bg-white max-lg:mt-5 text-black border-2 border-black"
                onClick={() => setModalKomen(true)}
              >
                Tulis Komentar
              </button>
            
          </>
        )}
      </div>
    </div>
      {modalKomen ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Filter Ulasan</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setModalKomen(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text">Unggah foto atau video</span>
                    </div>
                    <input
                      type="file"
                      className="file-input file-input-md file-input-bordered w-full max-w-xs"
                    />
                  </label>
                  <h1 className="font-semibold">Pilih Rating :</h1>
                  <div className="flex max-lg:grid max-lg:grid-cols-2 lg:space-x-5 my-4">
                    <div className="flex items-center space-x-2">
                      <Image src={StarProduct} width={30} />
                      <p className="text-md">1</p>
                      <input type="radio" name="radio-1" className="radio" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Image src={StarProduct} width={30} />
                      <p className="text-md">2</p>
                      <input type="radio" name="radio-1" className="radio" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Image src={StarProduct} width={30} />
                      <p className="text-md">3</p>
                      <input type="radio" name="radio-1" className="radio" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Image src={StarProduct} width={30} />
                      <p className="text-md">4</p>
                      <input type="radio" name="radio-1" className="radio" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Image src={StarProduct} width={30} />
                      <p className="text-md">5</p>
                      <input type="radio" name="radio-1" className="radio" />
                    </div>
                  </div>
                  <div>
                    <label className="form-control w-full max-w-xs">
                      <div className="label">
                        <span className="label-text">
                          Tulis Komentar disini
                        </span>
                      </div>
                      <input
                        type="text"
                        placeholder="Komentar"
                        className="input input-bordered w-full max-w-xs"
                      />
                    </label>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-black background-transparent font-bold normal-case px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setModalKomen(false)}
                  >
                    Tutup
                  </button>
                  <button
                    className="bg-black text-white active:bg-black font-bold normal-case text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setModalKomen(false)}
                  >
                    Kirim Ulasan
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};
export default ProductPageComponent;
