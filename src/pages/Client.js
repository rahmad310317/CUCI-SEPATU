import React from "react";
import { UserAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { MdVerifiedUser } from "react-icons/md";

import Login from "./Login";
const Client = () => {
  const { user, logOut } = UserAuth();
   const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await logOut();
      // Clear user data and navigate to login page
      // Assuming logOut() already clears user data, you might not need this step
      // Uncomment the line below if needed
      // setUser(null);

      // Navigate to login page 
      navigate('/beranda');
    } catch (error) {
      console.log(error);
    }
  };

  
  return (
    <div>
      {user?.displayName ? (
        <div className="flex   items-center justify-center align-middle p-10 ">
          <div className="flex text-center  rounded-lg flex-col border-[2px] w-[50vh] h-[70vh] p-12 items-center gap-2 shadow-xl ">
            <img
              className="rounded-full   hover:opacity-50 border-[1px] border-black p-1  h-[200vh] cursor-pointer object-fit "
              alt="client-img"
              src={user.photoURL}
            />
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl">{user.displayName}</h1>
              <div className="flex items-center align-middle gap-2"> 
              <h4 className="font-thin">{user.email}</h4>
              {
                user?.emailVerified === true ? 
                <div    >
                    <MdVerifiedUser />
                </div>: 'empty'


              }

              </div>
             
              
              
            </div>
            <div className="pt-40">
              <button
                onClick={handleSignOut}
                className=" relative border-2 border-gray-800 bg-transparent py-2.5 px-5  text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-gray-800 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 flex gap-2 items-center  "
              >
                Keluar
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Login />
      )}
      <Link to="/">
        <div className="flex justify-start  items-center cursor-pointer align-middle gap-2 hover:text-gray-500 p-4  ">
          <BsArrowLeft />
          <h3>Kembali Ke Beranda</h3>
        </div>
      </Link>
    </div>
  );
};

export default Client;