import React from "react";
import SinglePesanan from "./Cleaning";
import { Link } from "react-router-dom";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import Cleaning from "./Cleaning";
import Repair from "./Repair";
import fullService from "./fullService";



const Pesanan = ({ cleaning , fullService, repair, onDelete }) => {
 
  return (
    <div className=" h-auto  overflow-hidden  flex flex-col items-center justify-center ">
      <div className="flex flex-col w-full h-full px-[30vh]  gap-10 items-center justify-between  pt-5">
        <div className=" w-[60%] flex flex-col gap-6">
          <div className="flex gap-4 flex-col items-center">
            <h1 className="text-4xl  ">Daftar Pesanan</h1>
          </div>

          {cleaning.map((pesan) => (
            <Cleaning key={cleaning.id} cleaning={cleaning} onDelete={onDelete} />
          ))}
          {repair.map((pesan) => (
            <Repair key={repair.id} repair={repair} onDelete={onDelete} />
          ))}
          {fullService.map((fullser) => (
            <fullService key={fullser.id} fullService={fullser} onDelete={onDelete} />
          ))}
        </div>

        <div className="flex w-[40%] flex-col justify-between align-middle gap-4">
          <div className="border-[2px] gap-2 flex  justify-center border-black p-2">
            <h1 className="text-center text-xl ">Total Harga :</h1>
            <h1 className="text-center text-xl ">{`Rp.75000`}</h1>
          </div>

          <div className="bg-gray-500 h-8 rounded-md flex text-center">
            <Link to="/pembayaran" className="w-full">
              <button className="text-white">Bayar Sekarang</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-between  w-full p-8 ">
        <Link to="/">
          <div className="flex justify-center items-center cursor-pointer align-middle gap-2 hover:text-gray-500 ">
            <BsArrowLeft />
            <h3>Kembali ke Beranda</h3>
          </div>
        </Link>
        {/* <Link to="/pesanan">
        <div className="flex justify-center items-center cursor-pointer align-middle gap-2 hover:text-gray-500 ">
          <h3>Lanjut ke Pesanan</h3>
          <BsArrowRight />
        </div>
      </Link> */}
      </div>
    </div>
  );
};

export default Pesanan;
