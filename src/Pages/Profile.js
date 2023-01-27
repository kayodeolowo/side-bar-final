import React, { useState, useEffect } from 'react'
import axios from 'axios';





const Profile = () => {
    const [user, setUser] = useState([]);

    const url = `https://snapme-ng.com/api/v1/user/profile`
  
    const showUser = async() => {
    try {
      const data = await axios 
      .get(url)
      .then(res=> {
        setUser(res.data)
        console.log(res.data, "user")
      });
     // setLoading(true);
    } catch (e) {
      console.log(e)
    }
}


    useEffect(()=> {
        showUser()
    },[]);


    

  return (
    <div>Profile</div>
  )
}

export default Profile;

