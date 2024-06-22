import { useNavigate } from "react-router-dom";


const LayananKamiCard = ({ layanan }) => {

  const navigate = useNavigate();
  const id = layanan.title;
  const idString = (id) => {
    return String(id).toLowerCase().split(" ").join("");
  };
  const rootId = idString(id);
  const handleDetails = () => {
    navigate(`/layanan/${rootId}`, {
      state: {
        item: layanan,
      },
    });
  };
  return (
    <div
      onClick={handleDetails}
      className="h-[65vh] w-[25%] border-[1px] border-gray-400  items-center flex flex-col align-middle  gap-2 rounded-lg hover:bg-gray-400 drop-shadow-lg duration-700 p-2 lg:text-center cursor-pointer"
    >
      <div className="h-[50%]">
        <img
          src={layanan.img}
          alt=""
          className="h-[30vh] object-cover hover:scale-125 duration-700 "
        />
      </div>
      <div className="h-[50%] flex flex-col gap-4 items-center align-middle pt-8">
        <h4 className="text-4xl font-bold">{layanan.title}</h4>
        <span className="text-gray-600">{layanan.desc}</span>
      </div>
      <div className="flex justify-center  gap-4 bg-black rounded-md shadow-md w-[80%]">
        {layanan.discount && (
          <span className="text-white line-through">{layanan.oldPrice}</span>
        )}
        <span className="text-white ">
          {layanan.discount === "true"
            ? `${layanan.oldPrice} `
            : `${layanan.newPrice}`}
        </span>
      </div>
      <div className="absolute top-2 right-0">
        {layanan.recomend && (
          <p className="bg-black text-white font-semibold font-titleFont px-6 py-1">
            Recomended
          </p>
        )}
      </div>
    </div>
  );
};

export default LayananKamiCard;
