import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";
import { LiaShoePrintsSolid } from "react-icons/lia";
const Footer = () => {
  return (
    <div className="flex w-ful h-[40vh] bg-gray-600  text-white ">
      <div className=" flex-col justify-center w-[50%] gap-8  flex p-10">
        <div className="flex  gap-12 ">
          <div className="flex  gap-2 ">
            <IoLogoWhatsapp className="  inline-block text-4xl align-middle" />
            <div className="flex flex-col ">
              <span>Whatsapp kami</span>
              <span>0895 0830 6786</span>
            </div>
          </div>
          <div className="flex  gap-2 ">
            <SlLocationPin className=" inline-block text-4xl align-middle" />
            <div className="flex flex-col ">
              <span>Workshop </span>
              <span>Jl. Raya Cinere 1 Blok AA No.2</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col ">
          <span className="font-bold text-2xl">Tentang Kami</span>
          <span className="italic">
            Sepatuku merupakan usaha yang bergerak dibidang jasa perbaikan
            sekaligus pencucian sepatu yang berasal dari kota Depok. Berbagai
            layanan seperti perbaikan dan pencucian sepatu kami tawarkan.
          </span>
        </div>
      </div>
      <h1 className="w-[50%] relative  flex  text-6xl  align-midle text-center justify-center items-center font-medium ">
        Sepatuku
        <span>
          <LiaShoePrintsSolid />
        </span>
      </h1>
    </div>
  );
};

export default Footer;
