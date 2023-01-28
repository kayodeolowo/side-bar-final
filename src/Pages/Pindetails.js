import React, { createContext, useState, useEffect } from "react";
 import axios from 'axios'
 import { useParams } from "react-router-dom";
 import {AiOutlineEye} from 'react-icons/ai'
 import {BsHandThumbsUp, BsBookmark} from 'react-icons/bs'
 import {FaRegComment} from 'react-icons/fa'
 import {TiArrowForward} from 'react-icons/ti' 
 import {TbDownload} from 'react-icons/tb'
 import moment from 'moment';

const Pindetails = () => {

        let params = useParams();

     useEffect(()=> {
         getPindetails()
    }, [])

     const [pindetails, setPinDetails] = useState({});
   
    
     const [loading, setLoading] = useState (false)
   

      const getPindetails = async ()=> {
         try {
            const res = await axios.get (`https://snapme-ng.com/api/v1/pin-details/${params.name}`)
            setPinDetails(res.data) 
            console.log(res.data, "Pindetails")
           
            setLoading(true)

        } catch (err) {
               
        }
    
    }

  return (
    <div>
       <div className="flex lg:flex-row rounded pt-12 lg:pt-4 lg:pb-4 lg:pl-2  lg:space-x-10 w-11/12 mx-auto lg:w-3/4  flex-col "> 
            <div> 
                 <img className="w-[20rem] rounded-xl" src={pindetails.media} alt=""/>
            </div>

            <div>

                <div className="flex space-x-2 mt-4"> 
                  <img className="h-6 w-6 rounded-full" src={pindetails?.user?.picture} alt="profile picture" />
                  <h1>{pindetails?.user?.username} </h1>
                  <button className="px-3 bg-purple-600 text-sm rounded-xl font-semibold "> Follow+ </button>
                </div>

                <div className="mt-4">
                  <h1 className="font-bold text-2xl"> {pindetails.caption} </h1>
                </div>

                <div className="flex text-xs space-x-4"> 
                   <h1 className=""> {moment(pindetails.date).format("LT")}  </h1>
                    <h1 className=""> {moment(pindetails.date).format("Do MMM YYYY")}  </h1>
                    
                    
                </div>

                <div className="mt-4"> 
                  <p> {pindetails.message} </p>
                </div>

                <div className="flex space-x-5 mt-4">
                   <div className='items-center flex flex-col'>
                      <AiOutlineEye/>
                      <p className='text-xs'> 1.9k </p> 
                   </div>

                    <div className='items-center flex flex-col'>
                      <BsHandThumbsUp/>
                      <p className='text-xs'> 5.2k </p> 
                   </div> 

                   <div className='items-center flex flex-col'>
                      <FaRegComment/>
                      <p className='text-xs'> 3.4k </p> 
                   </div>

                    <div className='items-center flex flex-col'>
                       <TiArrowForward/>
                      <p className='text-xs'> 4.2k </p> 
                   </div>

                    <div className='items-center flex flex-col'>
                       <BsBookmark/>
                      <p className='text-xs'> 2.4k </p> 
                   </div>

                     <div className='items-center flex flex-col'>
                       <TbDownload/>
                      <p className='text-xs'> 1.9k </p> 
                   </div>
                    
                 
                </div>

                <div className="mt-4">
                  <h1>  Comments </h1> 
                  
               </div>

               <div className="flex mt-2 space-x-2">  
                            <img className='h-6 w-6' src='/image/profile.png' alt='' /> 
                            <input className="rounded border"/> 
                    
               </div> 
            </div>


       </div>
    </div>
  )
}

export default Pindetails