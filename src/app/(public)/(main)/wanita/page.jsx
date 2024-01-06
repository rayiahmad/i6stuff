import dynamic from "next/dynamic";

const CategoryWanitaComponent = dynamic(() =>
  import("@/app/components/categorywanita")
);
const CardProductComponent = dynamic(() =>
  import("@/app/components/cardproduct")
);

const WanitaPage = () => {
  return (
    <div className="lg:mx-60 mx-5 mt-20">
      <div className="grid space-x-2">
        <h1 className="lg:text-3xl text-xl mt-10 font-body font-bold">
          Produk Wanita
        </h1>
        <CategoryWanitaComponent />
        {Array.from({ length: 5 }, () => (
          <div className="mt-10 space-x-5 lg:max-w-5xl no-scrollbar overflow-x-auto flex">
            {Array.from({ length: 10 }, () => (
              <CardProductComponent />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
export default WanitaPage;
