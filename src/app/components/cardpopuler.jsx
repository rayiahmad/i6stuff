
import Image from "next/image";

const CardPopuler = ({alt, src, title, desk}) => {
  return (
    <div className="card card-compact lg:w-96 bg-base-100 shadow">
      <figure>
        <Image 
            src={src}
            alt={alt}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{desk}</p>
        <div className="card-actions justify-center">
          <button className="btn bg-black text-white w-full">Beli</button>
        </div>
      </div>
    </div>
  );
};
export default CardPopuler;