import CardproductCo from "@/app/components/keranjang/checkout/cardproductco";
import RingkasanCheckout from "@/app/components/keranjang/checkout/ringkasancheckout";

const CheckouPage = () => {
  return (
    <div className="mt-24 px-4 md:px-64 font-body flex flex-col md:flex-row justify-between w-full">
      <div className="w-full pr-0 md:pr-10">
        <h1 className="text-2xl font-bold">Checkout</h1>
        <div className="mt-5">
          <h2 className="text-md font-bold">Alamat Pengiriman</h2>
          <div className="mt-5 rounded-md shadow p-5">
            <h2 className="text-md font-bold">Jenny</h2>
            <h2 className="text-md">085726352877</h2>
            <h2 className="text-sm">
              Jalan Pramuka Selatan No.02A RT 02 RW 11. Salemba, Jakarta Timur,
              12810
            </h2>
            <button className="btn normal-case btn-sm mt-5 bg-white border border-black">
              Pilih Alamat Lain
            </button>
          </div>
          <div className="mt-5 rounded-md shadow p-5">
            <CardproductCo />

            <h2 className="text-sm font-bold my-5">Pilih Pengiriman</h2>
            <select className="select select-bordered border-black w-full max-w-xs">
              <option className="text-center" disabled selected>
                Pengiriman
              </option>
              <option>Next Day : Rp.22.000</option>
              <option>Kargo : Rp : 12.000</option>
            </select>
          </div>
        </div>
      </div>

      <RingkasanCheckout />
    </div>
  );
};
export default CheckouPage;
