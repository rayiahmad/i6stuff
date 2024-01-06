import LogoIcon from "@/assets/svg/logo.svg";
import Image from "next/image";
import FacebookIcon from "@/assets/svg/facebook.svg";
import TwitterIcon from "@/assets/svg/twitter.svg";

const FooterComponent = () => {
  return (
    <div className="mx-5 lg:mx-20">
      <footer className="footer w-full flex flex-col lg:flex-row justify-center lg:space-x-80 p-10 bg--white font-body">
        <div>
          <h1 className="footer-title">I6Stuff</h1>
          <p className="link link-hover">Tentang I6Stuff</p>
          <p className="link link-hover">Karir</p>
          <p className="link link-hover">Blog</p>
          <p className="link link-hover">Mitra</p>
        </div>
        <div>
          <h1 className="footer-title">Layanan Pelanggan</h1>
          <p className="link link-hover">Hubungi Kami</p>
          <p className="link link-hover">Metode Pembayaran</p>
          <p className="link link-hover">Garansi I6Stuff</p>
          <p className="link link-hover">Pengembalian Dana dan Barang</p>
        </div>
        <div>
          <h1 className="footer-title">Bantuan dan Panduan</h1>
          <p className="link link-hover">I6Stuff Care</p>
          <p className="link link-hover">Syarat dan Ketentuan</p>
          <p className="link link-hover">Kebijakan Privasi</p>
        </div>
      </footer>
      <div className="footer px-10 py-4 pb-10 border-t font-body bg-white border-base-300">
        <div className="items-center grid-flow-col">
          <Image src={LogoIcon} width={120} alt="logo" height={50} />
          <h1 className="ml-5">
            I6Stuff Indonesia. <br />
            Jakarta, Indonesia 2023
          </h1>
        </div>
        <div className="md:place-self-center md:justify-self-end">
          <h1 className="link link-hover">Ikuti Kami</h1>
          <div className="grid grid-flow-col gap-4">
            <Image src={FacebookIcon} alt="facebook" width={24} height={24} />
            <Image src={TwitterIcon} width={24} height={24} alt="twitter" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default FooterComponent;