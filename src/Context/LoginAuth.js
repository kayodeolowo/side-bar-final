import React, { createContext, useState, useEffect } from "react";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


export const LoginContext = createContext();

export const AuthProvider = (props) => {
const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [login, setLogin] = useState(false);
  

  console.log({ email, password })
 
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleLogin = () => {
    axios.post('https://snapme-ng.com/api/v1/login', {
      email: email,
      password: password
    }).then(result => {
      setLogin(true)
      console.log(result.data, "login")
      localStorage.setItem('user', JSON.stringify(result?.data));
      localStorage.setItem('email', email );
      window.localStorage.setItem("isLoggedIn", true)
      navigate("/");
      
    })
      .catch(error => {
        alert('service error')
        console.log(error)
      })

  }

  const value = {
        login: [login],
        handleEmail: handleEmail,
        handlePassword: handlePassword,
        handleLogin: handleLogin

      };

      return (
        <LoginContext.Provider value={value} > 
            {props.children}
        </LoginContext.Provider>
      );
};
