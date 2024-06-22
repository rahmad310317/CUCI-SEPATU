import React from "react";

const JumboAbout = () => {
  return (
    <div className="flex flex-col justify-center  align-middle items-center  pt-10 ">
      <div className="flex flex-col gap-3 m-5  ">
        <h1 className=" text-xl font-bold font-fontA text-center">
          Kenapa Harus Laundry sepatu di Sepatuku?
        </h1>
        <h3 className="text-center align-middle justify-end top-[20px]  text-gray-500 tracking-wide">
          Sepatuku merupakan usaha yang bergerak dibidang jasa laundry cuci
          sepatu dan perbaikan sepatu yang berasal dari kota Depok. Berbagai
          pelayanan seperti pencucian dan perbaikan sepatu kami tawarkan untuk
          mengembalikan sepatu seperti baru.
        </h3>
      </div>

      <div className="w-full   flex px-10 ">
        <div class="w-[50%] flex flex-col  gap-[10vh] p-8">
          <div class="flex flex-col row-span-4 items-end  w-[55%] ">
            <div className="w-[60px] h-[60px]">
              <img
                src="./assets/dompet.png"
                alt="./assets/dompet.png"
                className=""
              />
            </div>
            <div className="text-right ">
              <h1 className="text-xl font-semibold">Harga Terjangkau</h1>
              <p className="text-sm text-gray-500">
                Layanan kami memiliki harga yang terjangkau, baik untuk
                pelajar/mahasiswa maupun pekerja.
              </p>
            </div>
          </div>

          <div class="flex flex-col row-span-4 items-end  w-[55%] ">
            <div className="w-[60px] h-[60px]">
              <img
                src="./assets/teknisi.png"
                alt="./assets/gambar teknisi.png"
                className=""
              />
            </div>
            <div className="text-right ">
              <h1 className="text-xl font-semibold">Teknisi Berpengalaman</h1>
              <p className="text-sm text-gray-500">
                Tim kami yang sudah berpengalaman dapat anda percaya untuk
                permasalahan sepatu anda.
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-[50%] justify-end  items-center">
          <div class="flex flex-col row-span-4   w-[55%] ">
            <div className="w-[60px] h-[60px]">
              <img
                src="./assets/bahan.png"
                alt="./assets/bahan alami.png"
                className=""
              />
            </div>
            <div className=" ">
              <h1 className="text-xl font-semibold">Bahan Alami</h1>
              <p className="text-sm text-gray-500">
                Kami menggunakan bahan-bahan alami yang aman dan dikhususkan
                untuk sepatu.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute left-0 right-0   mx-auto  bottom-[50vh] sm:top-[40vh] flex border-[2px]  border-gray-500  rounded-full h-[55vh] w-[55vh]  items-center text-center align-center justify-center   ">
        <img
          src="./assets/spatu.png"
          alt="imgJumbo"
          className="h-[50vh] w-[50vh] rounded-[50%]   object-cover items-center self-center image-center   "
        />
      </div>
    </div>
  );
};

export default JumboAbout;
