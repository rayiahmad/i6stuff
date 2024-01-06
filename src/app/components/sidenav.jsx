"use client";

import Link from "next/link";
import XiconComp from "@/assets/svg/xicon.svg";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SIdeNav = () => {
  const [showModalDaftar, setShowmodalDaftar] = useState(false);
  const [showModalMasuk, setShowmodalMasuk] = useState(false);
  const router = useRouter();

  return (
    <>
      <div className="drawer-side z-40">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu space-y-5 font-body p-4 w-80 min-h-full bg-white text-base-content">
          <li>
            <label
              htmlFor="my-drawer"
              className="avatar"
              aria-label="close sidebar"
              onClick={() => router.push("/profil")}
            >
              <div className="w-16 rounded-full">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
              <p className="text-lg">Hai, Jenny</p>
            </label>
          </li>
          <li>
            <label
              htmlFor="my-drawer"
              className="text-xl"
              aria-label="close sidebar"
              onClick={() => router.push("/keranjang")}
            >
              Keranjang
            </label>
          </li>
          <li>
            <label
              htmlFor="my-drawer"
              className="text-xl"
              aria-label="close sidebar"
              onClick={() => router.push("/favorit")}
            >
              Favorit
            </label>
          </li>
          <li>
            <label
              htmlFor="my-drawer"
              className="text-xl"
              aria-label="close sidebar"
              onClick={() => router.push("/pria")}
            >
              Pria
            </label>
          </li>
          <li>
            <label
              htmlFor="my-drawer"
              className="text-xl"
              aria-label="close sidebar"
              onClick={() => router.push("/wanita")}
            >
              Wanita
            </label>
          </li>
          <li>
            <button
              onClick={() => setShowmodalDaftar(true)}
              className="bg-black text-white font-bold justify-center text-xl"
            >
              Daftar
            </button>
          </li>
          <li>
            <button
              onClick={() => setShowmodalMasuk(true)}
              className="bg-white text-black border border-black font-bold justify-center text-xl"
            >
              Masuk
            </button>
          </li>
        </ul>
      </div>
      {showModalDaftar ? (
        <>
          <div className="justify-center font-body items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start pt-5 px-7 justify-between">
                  <h3 className="text-3xl font-bold">Membuat Akun</h3>
                  <button
                    className="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowmodalDaftar(false)}
                  >
                    <Image src={XiconComp} width={20} />
                  </button>
                </div>
                {/*body*/}
                <div className="relative w-96 px-7 py-5 flex-auto">
                  <p className="text-md mb-5">
                    Dengan membuat akun di i6Stuff Anda akan dapat membeli,
                    menjual, berkomentar, dan banyak lagi.
                  </p>
                  <button className="w-full btn bg-blue-900 text-white normal-case">
                    Lanjutkan dengan Facebook
                  </button>
                  <button className="w-full btn bg-white text-black border normal-case">
                    Lanjutkan dengan Google
                  </button>
                  <p className="mt-5">
                    Sudah punya akun?{" "}
                    <a href="/" className="underline">
                      Masuk
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      {showModalMasuk ? (
        <>
          <div className="justify-center font-body items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start pt-5 px-7 justify-between">
                  <h3 className="text-3xl font-bold">Masuk</h3>
                  <button
                    className="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowmodalMasuk(false)}
                  >
                    <Image src={XiconComp} width={20} />
                  </button>
                </div>
                {/*body*/}
                <div className="relative w-96 px-7 py-5 flex-auto">
                  <p className="text-md mb-5">
                    Masuk ke akun i6Stuff Anda untuk membeli, menjual,
                    berkomentar, dan banyak lagi.
                  </p>
                  <button className="w-full btn bg-blue-900 text-white normal-case">
                    Lanjutkan dengan Facebook
                  </button>
                  <button className="w-full btn bg-white text-black border normal-case">
                    Lanjutkan dengan Google
                  </button>
                  <p className="mt-5">
                    Belum punya akun?{" "}
                    <a href="/" className="underline">
                      Daftar
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};
export default SIdeNav;
