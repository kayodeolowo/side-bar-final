import React, { createContext, useState, useEffect } from "react";
 import axios from 'axios'




export const DataContext = createContext();
export const DataProvider = (props) => {

  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false)

   const url = `https://snapme-ng.com/api/v1/`


  const showMedia = async() => {
    try {
      const data = await axios 
      .get(url)
      .then(res=> {
        setFiles(res.data)
        console.log(res.data)
      });
      
      setLoading(true);
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(()=> {
    showMedia();
  }, []);
  




  const value = {
    files: [files, setFiles],
    loading: [loading, setLoading],
    
  };

  return (
    <DataContext.Provider value={value}>
      {props.children}
    </DataContext.Provider>
  );
};