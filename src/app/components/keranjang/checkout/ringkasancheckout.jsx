"use client";
import { useState } from "react";
import XiconComp from "@/assets/svg/xicon.svg";
import MandiriIcon from "@/assets/images/mandiri.png";
import AlfaIcon from "@/assets/images/alfamart.png";
import Image from "next/image";

const RingkasanCheckout = () => {
  const [modalPembayaran, setModalPembayaran] = useState(false);
  const [modalSuccess, setModalsuccsess] = useState(false);

  return (
    <div className="w-full shadow rounded-md p-5">
      <h1 className="font-bold text-md">Ringkasan belanja</h1>
      <div className="mt-5">
        <div className="flex flex-col sm:flex-row justify-between">
          <p>Total Harga Barang</p>
          <p>Rp.313.000</p>
        </div>
        <div className="flex flex-col sm:flex-row justify-between">
          <p>Total Ongkos Kirim</p>
          <p>Rp.12.000</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row mt-5 font-bold justify-between">
        <p>Total Belanja</p>
        <p>Rp.325.000</p>
      </div>
      <button
        onClick={() => setModalPembayaran(true)}
        className="btn w-full normal-case mt-5 bg-black text-white"
      >
        Pilih Pembayaran
      </button>
      {modalPembayaran ? (
        <>
          <div className="justify-center font-body items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start pt-5 px-7 justify-between">
                  <h3 className="text-xl font-bold">Pembayaran</h3>
                  <button
                    className="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setModalPembayaran(false)}
                  >
                    <Image src={XiconComp} width={20} alt="close" />
                  </button>
                </div>
                {/*body*/}
                <div className="relative space-y-4 w-full px-7 py-5 flex-auto">
                  {modalSuccess ? (
                    <>
                      <div role="alert" className="alert alert-success">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="stroke-current shrink-0 h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>Pembayaran Berhasil!</span>
                      </div>
                    </>
                  ) : null}
                  <h1 className="text-md font-bold">Metode Pembayaran</h1>
                  <div className="flex border p-5 rounded-md items-center space-x-5">
                    <Image
                      className="max-lg:w-10"
                      src={AlfaIcon}
                      width={70}
                      height={20}
                      alt="alfamart"
                    />
                    <p className="font-bold max-lg:text-sm">
                      Alfamart / Alfamidi / Lawson / Dan+Dan
                    </p>
                    <input type="radio" name="radio-1" className="radio" />
                  </div>
                  <div className="flex border p-5 w-full rounded-md items-center space-x-48">
                    <div className="flex space-x-5 items-center">
                      <Image
                        className="max-lg:w-10"
                        src={MandiriIcon}
                        width={70}
                        height={20}
                        alt="Mandiri"
                      />
                      <p className="font-bold max-lg:text-sm">Mandiri</p>
                    </div>
                    <input type="radio" name="radio-1" className="radio" />
                  </div>
                  <div>
                    <h1 className="text-md font-bold">Ringkasan Pembayaran</h1>
                    <div className="w-full max-lg:flex max-lg:flex-col mt-5 font-bold justify-between flex">
                      <p>Total Belanja</p>
                      <p>Rp.325.000</p>
                    </div>
                    <div className="w-full max-lg:flex max-lg:flex-col mt-5 font-bold justify-between flex">
                      <p>Biaya Layanan</p>
                      <p>Rp.2.500</p>
                    </div>
                    <button
                      onClick={() => setModalsuccsess(true)}
                      className="btn w-full normal-case mt-5 bg-black text-white"
                    >
                      Bayar Sekarang
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
};
export default RingkasanCheckout;
