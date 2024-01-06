const TambahProdukPage = () => {
  return (
    <div className="lg:mx-60 font-body space-y-4 mx-5 mt-20">
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Pilih foto produk</span>
        </div>
        <input
          type="file"
          className="file-input file-input-md file-input-bordered w-full max-w-xs"
        />
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Nama Produk</span>
        </div>
        <input
          type="text"
          placeholder="Sepatu"
          className="input input-bordered w-full max-w-xs"
        />
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Harga Produk</span>
        </div>
        <input
          type="text"
          placeholder="Rp.xx.xxxx"
          className="input input-bordered w-full max-w-xs"
        />
      </label>
      <label className="form-control">
        <div className="label">
          <span className="label-text">Deskripsi Produk</span>
        </div>
        <textarea
          className="textarea textarea-bordered h-24"
          placeholder="Deskripsi"
        ></textarea>
      </label>
      <label className="form-control">
        <div className="label">
          <span className="label-text">Info Produk</span>
        </div>
        <textarea
          className="textarea textarea-bordered h-24"
          placeholder="Info"
        ></textarea>
      </label>
      <button className="btn normal-case bg-black text-white">Tambah Produk</button>
    </div>
  );
};
export default TambahProdukPage;
