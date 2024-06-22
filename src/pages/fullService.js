import React, { useState } from 'react';
import { RiDeleteBin2Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";

const FullService = ({ fullService, onDelete, onToggle, select }) => {

  console.log(fullService)  
  // const [editing, setEditing] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div className="h-auto w-full flex flex-col bg-gray-300 rounded-xl gap-2 p-4 shadow-xl duration-300">
      <div
        className="flex flex-row cursor-pointer w-full gap-8 items-center"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onDoubleClick={() => onToggle(fullService[0].id)}
      >
        <div className="flex w-full">
          <div className="w-[80%]">
            <h1 className="font-semibold xl:text-md md:text-md">{`Jenis Sepatu : ${fullService[0].jenis_sepatu}`}</h1>
            <p className="italic">{`Keluhan : ${fullService[0].keluhan}`}</p>
            <h3 className="font-semibold">{`Total Baju : ${fullService[0].jumlah_sepatu}`}</h3>
          </div>
          <div className="flex flex-col w-[20%] items-end">
            <div className="flex items-center justify-center">
              {isHovering && (
                <RiDeleteBin2Line
                  className="text-black text-3xl duration-300 h-[40px] cursor-pointer"
                  onClick={() => onDelete(fullService[0].id)}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-400 w-full flex justify-between py-1 px-2 rounded-b-md">
        <h3 className="text-right text-black">Harga :</h3>
        <h3 className="text-right text-black">Rp.25000</h3>
      </div>
    </div>
  );
};

export default FullService;
