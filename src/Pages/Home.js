import React, { useContext } from "react";
import { DataContext } from "../Context/DataProvider";
import { Link } from "react-router-dom";

const Home = () => {
     const [datas] = useContext(DataContext).datas;
       const [loading] = useContext(DataContext).loading;

  return (
   <div> 
    home
    </div>
  )
}

export default Home