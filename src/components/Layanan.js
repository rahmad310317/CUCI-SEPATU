import React from "react";
import CardLayanan from "./CardLayanan";

const Layanan = ({ layanan }) => {
  // const actionKlik = () => {
  //   alert("tai");
  // };

  const data =  [
    {
      "id": 1,
      "recomend": false,
      "discount": false,
      "img": "/assets/repair.png",
      "newPrice": "Rp.50.000.00,-",
      "oldPrice": false,
      "title": "Repair",
      "desc": "Jasa memperbaiki sepatu yang rusak agar terlihat seperti baru."
    },
    {
      "id": 2,
      "recomend": false,
      "discount": false,
      "img": "/assets/cleaning2.png",
      "newPrice": "Rp.50.000.00,-",
      "oldPrice": false,
      "title": "Cleaning",
      "desc": "Jasa membersihkan sepatu dan mecerahkan kembali sepatu."
    },
    {
      "id": 3,
      "recomend": true,
      "discount": "10%",
      "img": "/assets/full-service.png",
      "newPrice": "Rp.90.000.00,-",
      "oldPrice": "Rp.100.000.00,-",
      "title": "Full Service",
      "desc": "Jasa perbaikan sekaligus pencucian sepatu untuk menghilangkan noda ."
    }
  ]
  return (
    <div className="flex flex-col gap-[5vh] ">
      <div className="flex  flex-col items-center align-middle justify-center pt-[25vh] gap-2">
        <h2 className="text-2xl font-bold ">Layanan</h2>
        <span className="text-gray-600">
          Ingin memperbaikki sepatu sekaligus membersihkannya? Kami bisa!
        </span>
      </div>
      <div className=" mx-auto  flex gap-10 justify-center pb-10">
        {data.map((item) => (
          <CardLayanan key={item.id} layanan={item} />
        ))}
      </div>
    </div>
  );
};

export default Layanan;
