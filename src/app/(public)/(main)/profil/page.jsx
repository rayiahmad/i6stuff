import Link from "next/link";

const profilPage = () => {
  return (
    <div className="w-full lg:px-96 font-body mt-24">
      <div className="avatar mx-5 my-5 space-x-2 items-center">
        <div className="w-16 rounded-full">
          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
        <p className="text-lg font-semibold">Jenny</p>
      </div>

      <div className="w-full space-y-4 px-5">
        <Link
          href="/keranjang"
          className="btn normal-case justify-start w-full bg-white text-black"
        >
          Keranjang
        </Link>
        <Link href="/favorit" className="btn normal-case justify-start w-full bg-white text-black">
          Favorit
        </Link>
        <Link href="/profil/tambahproduk" className="btn normal-case justify-start w-full bg-white text-black">
          Tambah Produk
        </Link>
        <button className="btn mt-5 normal-case justify-center w-full bg-black text-white">
          Logout
        </button>
      </div>
    </div>
  );
};
export default profilPage;
