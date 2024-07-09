import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import axios from "axios";

const SingleService = ({ createFullService }) => {
  const [details, setDetails] = useState({});
  const [jenis, setJenis] = useState("");
  const [keluhan, setKeluhan] = useState("");
  const [jumlah, setJumlah] = useState(1);

  console.log(jenis);
  console.log(keluhan);
  console.log(jumlah);

  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.item) {
      setDetails(location.state.item);
    }
  }, [location.state]);

  const kurangClick = () => {
    setJumlah(jumlah === 1 ? 1 : jumlah - 1);
  };

  const tambahClick = () => {
    setJumlah(jumlah + 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      service_id: details.service_id,  // Assuming service_id is part of details
      unit: jumlah,
      shoes_type: jenis,
      complain: keluhan,
    };
    
    try {
      const response = await axios.post('http://localhost:8000/api/transactions', data);
      console.log(response.data);
      // Handle success (e.g., show a success message, navigate to another page, etc.)
    } catch (error) {
      console.error('Error posting data', error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <div className="h-auto flex-col flex justify-center p-6">
      {details.recomend ? (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
          <div className="relative w-full p-6 m-auto bg-white rounded-md shadow-xl ring-1 ring-black lg:max-w-xl">
            <h1 className="text-2xl font-semibold text-center text-black underline uppercase">
              {details.title}
            </h1>

            <form className="mt-6" onSubmit={handleSubmit}>
              <div className="mb-2">
                <label>
                  <span className="text-gray-700">Jenis Sepatu</span>
                  <input
                    name="jenis sepatu"
                    type="text"
                    className="block w-full mt-2 px-16 py-2 border-black border-[1px] rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    placeholder="kulit , sneakers , etc"
                    onChange={(e) => setJenis(e.target.value)}
                    required
                  />
                </label>
              </div>
              <div className="mb-2">
                <label>
                  <span className="text-gray-700">Keluhan</span>
                  <textarea
                    name="message"
                    className="block w-full mt-2 px-16 py-8 border-black border-[1px] rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    required
                    rows="5"
                    onChange={(e) => setKeluhan(e.target.value)}
                  ></textarea>
                </label>
              </div>

              <div className="mb-6"></div>
              <div className="mt-6 flex items-center justify-between gap-x-6">
                <div className="w-58 flex items-center justify-between rounded-md text-gray-500 gap-4 border p-3">
                  <p className="text-sm">Jumlah Sepatu</p>
                  <div className="flex items-center gap-4 text-sm font-semibold">
                    <button
                      type="button"
                      onClick={kurangClick}
                      className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                    >
                      -
                    </button>
                    <span>{jumlah}</span>
                    <button
                      type="button"
                      onClick={tambahClick}
                      className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  type="submit"
                  className="rounded-md bg-[#272829] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-400 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 duration-700"
                >
                  Tambahkan ke Pesanan
                </button>
              </div>
              <div className="absolute top-2 right-0">
                {details.recomend && (
                  <p className="bg-black text-white font-semibold font-titleFont px-6 py-1">
                    Recomended
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      ) : (
        // RECOMENDED FALSE
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
          <div className="relative w-full p-6 m-auto bg-white rounded-md shadow-xl ring-1 ring-black lg:max-w-xl">
            <h1 className="text-2xl font-semibold text-center text-black underline uppercase">
              {details.title}
            </h1>

            <form className="mt-6" onSubmit={handleSubmit}>
              <div className="mb-2">
                <label>
                  <span className="text-gray-700">Jenis Sepatu</span>
                  <input
                    name="jenis sepatu"
                    type="text"
                    className="block w-full mt-2 px-16 py-2 border-black border-[1px] rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    placeholder="kulit , sneakers , etc"
                    onChange={(e) => setJenis(e.target.value)}
                    required
                  />
                </label>
              </div>
              <div className="mb-2">
                <label>
                  <span className="text-gray-700">Keluhan</span>
                  <textarea
                    name="message"
                    className="block w-full mt-2 px-16 py-8 border-black border-[1px] rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    required
                    rows="5"
                    onChange={(e) => setKeluhan(e.target.value)}
                  ></textarea>
                </label>
              </div>

              <div className="mb-6"></div>
              <div className="mt-6 flex items-center justify-between gap-x-6">
                <div className="w-58 flex items-center justify-between rounded-md text-gray-500 gap-4 border p-3">
                  <p className="text-sm">Jumlah Sepatu</p>
                  <div className="flex items-center gap-4 text-sm font-semibold">
                    <button
                      type="button"
                      onClick={kurangClick}
                      className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                    >
                      -
                    </button>
                    <span>{jumlah}</span>
                    <button
                      type="button"
                      onClick={tambahClick}
                      className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  type="submit"
                  className="rounded-md bg-[#272829] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-400 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 duration-700"
                >
                  Tambahkan ke Pesanan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <div className="flex justify-between p-8">
        <Link to="/beranda">
          <div className="flex justify-center items-center cursor-pointer align-middle gap-2 hover:text-gray-500">
            <BsArrowLeft />
            <h3>Kembali ke Beranda</h3>
          </div>
        </Link>

        <Link to="/pesanan">
          <div className="flex justify-center items-center cursor-pointer align-middle gap-2 hover:text-gray-500">
            <h3>Lanjut ke Pesanan</h3>
            <BsArrowRight />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SingleService;
