import React, { useState, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { TbMenu2 } from 'react-icons/tb';
import {MdDarkMode} from 'react-icons/md'


import { NavLink, Link } from 'react-router-dom';
import {AiOutlinePlusCircle, AiOutlineSearch} from 'react-icons/ai'
import ThemeToggle from './ThemeToggle';






const SideBar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false)
  
  const activeLink = " text-primaryblue transition duration-300 font-semibold border-b-[2px]  ";
  const normalLink = "";


  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo)
  };




 
  
    return (
      <header className=' lg:w-[12rem] '> 
         <div className="flex flex-col lg:h-screen  lg:ml-8 lg:mt-8   lg:px-1     
              lg:fixed   "> 
          
                    
                    <div className='px-2  md:px-0 ' >
                     
                        
                     </div> 
                     

                     <div    className='md:flex flex-col  '> 
                        <ul id='nav' className=' text-sm   text-[#000000] hidden   md:flex flex-col    mt-1   '> 
                        
                                <NavLink to='/'  className={({ isActive }) => (isActive ? activeLink : normalLink)}    >  <p className=' hover:text-primarygreen mt-1 hover:cursor-pointer transition  hover:text-primaryblue duration-200 hover:text-semibold'>Home </p>   </NavLink>
                            <NavLink to='/about'  className={({ isActive }) => (isActive ? activeLink : normalLink)}    >  <p className=' hover:text-primarygreen mt-1 hover:cursor-pointer transition  hover:text-primaryblue duration-200 hover:text-semibold'>About Us </p>   </NavLink>
                              <NavLink to='/features'  className={({ isActive }) => (isActive ? activeLink : normalLink)}    >  <p className=' hover:text-primarygreen mt-1 hover:cursor-pointer transition  hover:text-primaryblue duration-200 hover:text-semibold'>Features </p>   </NavLink>
                              <NavLink to='/safety'  className={({ isActive }) => (isActive ? activeLink : normalLink)}    >  <p className=' hover:text-primarygreen mt-1 hover:cursor-pointer transition  hover:text-primaryblue duration-200 hover:text-semibold'>Safety </p>   </NavLink>
                            
                             
                          
                            </ul> 
                     </div>


                     

                
                            
                       

              
               
            
           

        
            {/* hamburger */} 
            <div    className=' lg:hidden fixed h-14    w-screen px-4 sm:px-6 flex flex-row-reverse   justify-between  items-center z-10 '> 

            
            
             <div className='flex  md:hidden space-x-6 sm:space-x-10 items-center'> 
                <h1 className=' px-4 rounded-md font-semibold bg-purple-500 text-white py-[1px]'> Live </h1>
                
                 <div>
                    <AiOutlineSearch className='text-xl '> </AiOutlineSearch>  
                </div> 




                <div className=''> 
                    <AiOutlinePlusCircle className='text-xl'> </AiOutlinePlusCircle>
                 </div>

                

                <div className=' '> 
                    <Link to='/user'> 
                            <img className='h-6 w-6 ' src='/image/profile.png' alt='' />  
                    </Link>  
                 </div>

                 <div> 
                <ThemeToggle/>
            </div>

               
            </div>
           
          <div> 

                {nav ? <AiOutlineClose onClick={handleNav}  className='  text-2xl sm:text-3xl items-center  mt-1' /> :   <TbMenu2 onClick={handleNav} className=' text-2xl sm:text-3xl items-center mt-1 left-0  duration-50 ' />}

            </div>

            
              
            </div>


             <div   onClick={handleNav} className={nav ? ' leading-loose text-start bg-white   text-2xl  absolute text-[#000000]  left-0 top-0    w-9/12  mx-auto z-10   duration-300 flex h-full       flex-col' : 'absolute left-[-100%] '}>
              <div > 
                  <div  id='bold'> 
                      <ul  className=' lg:hidden text-xl  font-bold  flex flex-col space-y-4  text-[#000000]   w-fit ml-4  '>         
                                <img className='w-[7rem] mt-10' src='./image/logo.png' alt='' />
                                <NavLink to='/'  className={({ isActive }) => (isActive ? activeLink : normalLink)}  > <p className=' hover:text-primarygreen mt-1 hover:cursor-pointer transition   duration-200'>Home</p>      </NavLink>
                            
                              <NavLink to='/about'  className={({ isActive }) => (isActive ? activeLink : normalLink)}  > <p className=' hover:text-primarygreen mt-1 hover:cursor-pointer transition   duration-200'>About Us </p>      </NavLink>
                              <NavLink to='/features'  className={({ isActive }) => (isActive ? activeLink : normalLink)}  > <p className=' hover:text-primarygreen mt-1 hover:cursor-pointer transition   duration-200'>Features </p>      </NavLink>
                               <NavLink to='/safety'  className={({ isActive }) => (isActive ? activeLink : normalLink)}  > <p className=' hover:text-primarygreen mt-1 hover:cursor-pointer transition   duration-200'>Safety </p>      </NavLink>
                               
                            
                            </ul>
                  </div>

                  
        </div>
      </div>
            
        </div>


        
      </header>
       
    )
}

export default SideBar;