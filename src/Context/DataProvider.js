import React, { createContext, useState, useEffect } from "react";
 import axios from 'axios'

export const DataContext = createContext();
export const DataProvider = (props) => {

  const [datas, setdatas] = useState([]);
  const [loading, setLoading] = useState(false)

   const url = `https://snapme-ng.com/api/v1/`


  const showMedia = async() => {
    try {
      const data = await axios 
      .get(url)
      .then(res=> {
        setdatas(res.data)
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
    datas: [datas, setdatas],
    loading: [loading, setLoading],
    
  };

  return (
    <DataContext.Provider value={value}>
      {props.children}
    </DataContext.Provider>
  );
};