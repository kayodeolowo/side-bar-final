import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const UserProfile = () => {
    const [user , setUser] = useState(typeof window !== 'undefined'?JSON.parse(localStorage.getItem('user'))
    : {}
    )
    
    

    console.log(user)
  


  return (
    <div>
      <h1>  {user?.username}</h1>
      <h1> {user?.email} </h1> 
    </div>
  )
}
