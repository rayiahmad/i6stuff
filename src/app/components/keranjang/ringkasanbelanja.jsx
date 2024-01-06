import Link from "next/link";

const RingkasanBelanja = () => {
  return (
    <div className="w-full shadow rounded-md p-5">
      <h1 className="font-bold text-md">Ringkasan belanja</h1>
      <div className="mt-5">
        <div className="w-full justify-between flex">
          <p>Total harga barang</p>
          <p>Rp.315.000</p>
        </div>
        <div className="w-full justify-between flex">
          <p>Total Diskon</p>
          <p>-Rp.2.000</p>
        </div>
      </div>
      <div className="w-full mt-5 font-bold justify-between flex">
        <p>Total Harga</p>
        <p>Rp.313.000</p>
      </div>
      <Link href="/keranjang/checkout">
        <button className="btn w-full normal-case mt-5 bg-black text-white">
          Beli
        </button>
      </Link>
    </div>
  );
};
export default RingkasanBelanja;
