import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Search from '../components/Search'
import SideBar from '../components/SideBar'
import Register from '../Auth/Register'

import Home from './Home'
import { UserProfile } from './UserProfile'
import Pindetails from './Pindetails'
import Navbar from '../components/Navbar'

const Layout = () => {
  return (
    <div className='lg:flex'>
        <SideBar/>

        <div className='w-full'> 
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>} /> 
                  <Route path="/register" element={<Register/>} /> 
                  <Route path="/user" element={<UserProfile/>} /> 
                  <Route path="/pin/:name" element={<Pindetails/>} />
            </Routes>
        </div>
    </div>
  )
}

export default Layout