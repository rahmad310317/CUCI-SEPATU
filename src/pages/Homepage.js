import JumboAbout from "../components/JumboAbout";
import Layanan from "../components/Layanan";


import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";

const Homepage = () => {
  
  const [layanan, setLayanan] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    setLayanan(data);
  }, [data]);
  return (
    <div>
      <JumboAbout />
      <Layanan layanan={layanan} />
    </div>
  );
};

export default Homepage;
