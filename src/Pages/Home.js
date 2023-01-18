import React, { useContext } from "react";
import { DataContext } from "../Context/DataProvider";

const Home = () => {
     const [files, setFiles] = useContext(DataContext).files;
       const [loading] = useContext(DataContext).loading;

  return (
    <div className="container mx-auto">
       { (files.map((mediafiles)=>(
        <div key={mediafiles._id}> 
              <div className="flex items-center"> 
                    <img className="h-10 w-10 rounded-full border-2 border-green-800" src={mediafiles.user.picture}/>
                    <h1 className="font-semibold"> {mediafiles.user.username} </h1> 
                    
               </div>
                <img className="max-h-[15rem] max-w-[15rem]" src={mediafiles.media} />            
            </div>
       )))}
    </div>
  )
}

export default Home