"use client";
import SearchIcon from "@/assets/svg/search.svg";
import LogoIcon from "@/assets/svg/logo.svg";
import CartIcon from "@/assets/svg/cart.svg";
import Image from "next/image";
import { useState } from "react";
import XiconComp from "@/assets/svg/xicon.svg";
import Link from "next/link";
import BurgerIcon from "@/assets/svg/burgericon.svg";
import FavIcon from "@/assets/svg/fav.svg";

const NavbarComponent = () => {
  const [showModalDaftar, setShowmodalDaftar] = useState(false);
  const [showModalMasuk, setShowmodalMasuk] = useState(false);

  return (
    <>
      <div className="w-full z-40 fixed bg-white border-2 items-center justify-center max-xl:space-x-20 lg:space-x-16 h-20 lg:h-20 flex">
        <label htmlFor="my-drawer" className="lg:hidden drawer-button ">
          <Image
            src={BurgerIcon}
            alt="side icon"
            className=" max-md:w-16 btn bg-white border-0"
          />
        </label>
        <Link href="/">
          <Image
            className="max-xl:w-16"
            src={LogoIcon}
            alt="logo"
            width={80}
            height={80}
          />
        </Link>
        <div className="relative mx-auto text-gray-600 lg:block hidden">
          <button className="absolute right-0 top-0 mt-3 mr-2">
            <Image src={SearchIcon} alt="iconsearch" width={20} height={20} />
          </button>
          <input
            className="border-2 w-96 border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Cari di i6Stuff"
          />
        </div>
        <div className="flex items-center space-x-5">
          <Link href="/keranjang" className="btn bg-white border-0">
            <Image src={CartIcon} width={25} alt="carticon" height={30} />
          </Link>
          <Link href="/favorit" className="btn max-md:hidden bg-white border-0">
            <Image src={FavIcon} width={25} alt="favicon" height={30} />
          </Link>
          <button
            onClick={() => setShowmodalMasuk(true)}
            className="btn max-lg:hidden bg-white text-black border border-black"
          >
            Masuk
          </button>
          <button
            onClick={() => setShowmodalDaftar(true)}
            className="btn max-lg:hidden bg-black text-white"
          >
            Daftar
          </button>
          <Link href="/profil" className="btn max-md:hidden bg-white border-0">
            <div className="avatar">
              <div className="w-8 rounded-full ring ring-black ring-offset-base-100 ring-offset-2">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
          </Link>
        </div>
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
                    <Image src={XiconComp} alt="xicon" width={20} />
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
                    <Image src={XiconComp} alt="xicon" width={20} />
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
export default NavbarComponent;
