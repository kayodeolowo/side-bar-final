import React, { useContext } from "react";
import { DataContext } from "../Context/DataProvider";
import { Link } from "react-router-dom";

const Home = () => {
     const [datas] = useContext(DataContext).datas;
       const [loading] = useContext(DataContext).loading;

  return (
    <div className=" grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-5  lg:grid-cols-4 items-center  border-2 mx-auto w-11/12 max-w-[1280px] ">
       { (datas.map((mediadatas)=>(
        <div key={mediadatas._id}> 
        
              <div className="flex items-center space-x-2"> 
                    <img className="h-10 w-10 rounded-full border-2 border-green-800" src={mediadatas.user.picture}/>
                    <h1 className="font-semibold"> {mediadatas.user.username} </h1> 
                    
               </div>
                <Link to={"/pin/" + mediadatas._id} > 
                <img className="max-h-[15rem] max-w-[15rem]" src={mediadatas.media} />  
                </Link>          
            </div>
       )))}
    </div>
  )
}

export default Home