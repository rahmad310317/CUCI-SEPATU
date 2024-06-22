import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import ReactWhatsapp from 'react-whatsapp'

const Pembayaran = () => {
  const [toogle, setToogle] = useState(false);
  const [toogleSelesaiPembayaran, setToogleSelesaiPembayaran] = useState(false);

  const toogleClick = () => {
    setToogle((toogle) => !toogle);
  };

  const selesaiPembayaran = () => {
    setToogleSelesaiPembayaran(
      (toogleSelesaiPembayaran) => !toogleSelesaiPembayaran
    );
  };
  return (
    <div className="h-auto flex flex-col ">
      <div className=" pb-10  flex items-center flex-col    ">
        <div className=" max-w-screen-xl x ">
          <div className="flex flex-col  p-10  w-full h-auto   rounded-xl gap-5  items-center align-middle text-center  ">
            <h1 className="font-bold text-xl text-center">PEMBAYARAN </h1>
            <div className="flex flex-col gap-4  ">
              <div className="flex flex-col gap-4 ">
                <div className=" h-[59vh]  ">
                  <div className="flex flex-col gap-8 ">
                    <div className="flex justify-center  rounded-md cursor-point bg-cover  cursor-pointer items-center align-middle  ">
                      <img
                        src="./assets/qris-bayar.jpg"
                        alt="qris"
                        className="h-[50vh]"
                      />
                    </div>
                    <div>
                      <ReactWhatsapp className=" bg-green-400 h-[7vh] w-full hover:text-white hover:bg-green-700 duration-700 rounded-xl" number='+6289508306786 ' message='saya telah melakukan pembayaran'>
                        <div className="flex gap-4 items-center align-middle font-medium text-xl justify-center">
                        <h1>Konfirmasi Pembayaran</h1>
                        <FaWhatsapp />
                        </div>
                      </ReactWhatsapp>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Link to="/pesanan">
        <div className="flex justify-start   absolute bottom-5 p-6 items-center cursor-pointer align-middle gap-2 hover:text-gray-500 ">
          <BsArrowLeft />
          <h3>Kembali ke Pesanan</h3>
        </div>
      </Link>
    </div>
  );
};

export default Pembayaran;
