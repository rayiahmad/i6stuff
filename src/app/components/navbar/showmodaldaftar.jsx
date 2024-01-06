import XiconComp from "@/assets/svg/xicon.svg";
import Image from "next/image";
import NavbarComponent from "../navbar";

const ShowModalDaftarComponent = () => {
  return (
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
                Dengan membuat akun di i6Stuff Anda akan dapat membeli, menjual,
                berkomentar, dan banyak lagi.
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
  );
};
export default ShowModalDaftarComponent