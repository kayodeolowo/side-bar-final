import React, { useContext } from "react";
import { DataContext } from "../Context/DataProvider";

const Home = () => {
     const [files, setFiles] = useContext(DataContext).files;
       const [loading] = useContext(DataContext).loading;

  return (
    <div>
       { (files.map((mediafiles)=>(
        <div key={mediafiles._id}> 
                <h1> {mediafiles.caption} </h1>
                <img className="max-h-[15rem] max-w-[15rem]" src={mediafiles.media} />
                
            </div>
       )))}
    </div>
  )
}

export default Home