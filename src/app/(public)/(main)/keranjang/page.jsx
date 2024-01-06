import CardProductComponent from "@/app/components/keranjang/cardproduct";
import RingkasanBelanja from "@/app/components/keranjang/ringkasanbelanja";
import CardProduct from "@/app/components/cardproduct";

const KeranjangPage = () => {
  return (
    <>
      <div className="mt-24 max-lg:px-5 lg:px-64 font-body lg:justify-between grid lg:flex w-full">
        <div className="w-full justify-center lg:pr-10">
          <h1 className="text-2xl font-bold">Keranjang</h1>
          <div className="flex mt-5 justify-between space-x-20">
            <div className="flex space-x-2">
              <input type="checkbox" className="checkbox" />
              <p>Pilih Semua</p>
            </div>
            <button className="font-bold">Hapus</button>
          </div>
          <CardProductComponent />
        </div>
        <RingkasanBelanja />
      </div>
      <div className="mt-24 max-lg:mx-5 lg:px-64 font-body grid">
        <h1 className="lg:text-3xl text-lg mt-10 font-body font-bold">
          Semua Produk
        </h1>
        {Array.from({ length: 5 }, () => (
          <div className="mt-10 space-x-5 lg:max-w-5xl no-scrollbar overflow-x-auto flex">
            {Array.from({ length: 10 }, () => (
              <CardProduct />
            ))}
          </div>
        ))}
      </div>
    </>
  );
};
export default KeranjangPage;
