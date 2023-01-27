import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import {MdDarkMode} from 'react-icons/md'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  return (
    <header> 
         <div className='  justify-between   mx-auto lg:w-11/12  max-w-[1280px]  lg:flex flex-row  items-center'>
            <div className=' md:flex  hidden justify-between'> 
               <Link to='/'> 
                     <h1 className='text-[4rem]'> SNAPME </h1>
               </Link>
            </div>

            <div className=' hidden md:flex space-x-6 items-center'> 

             <div> 
              <ThemeToggle/>
            </div>

                <h1 className=' px-4 rounded-md font-semibold bg-purple-500 text-white py-[1px]'> Live </h1>
                
                <div className="mt-4 w-fit">
                    <div className=" flex  items-stretch w-full mb-4">
                    <input type="search" className="form-control  flex-auto min-w-0 block w-full px-3  text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2"/>
                    <button className="btn inline-block px-6 py-1.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out  items-center" type="button" id="button-addon2">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                        </svg>
                    </button>
                    </div>
                
                </div>

                <div className='hidden lg:flex'> 
                    <Link to='/user'> 
                            <img className='h-10 w-10' src='./image/profile.png' alt='' />  
                    </Link>  
                 </div>

                <div className='items-center flex'> 
                    <AiOutlinePlusCircle className='text-4xl'> </AiOutlinePlusCircle>
                 </div>

                
            </div>
         </div>
    </header>
   
  )
}

export default Navbar