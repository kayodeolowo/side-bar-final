import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { json, Link,  } from "react-router-dom";
import { LoginContext } from "../Context/LoginAuth";

function Login() {
 const handleEmail = useContext(LoginContext).handleEmail;
 const  handlePassword = useContext(LoginContext).handlePassword;
 const handleLogin= useContext(LoginContext).handleLogin;
  


  return (
    // <div classNameName="App">
    //   Email : <input value={email} onChange={handleEmail} type="text" /> <br />
    //   Password : <input value={password} onChange={handlePassword} type="text" /> <br />
    //   <button onClick={handleApi} >Login</button>


    //   {/* { login ? (
    //     <div>  
    //       welcome 
    //       </div> 
    //   ) : <div> getout </div> } */}
    // </div>
    <section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
              <div className="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email" id="email" onChange={handleEmail} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                  </div>
                  <div>
                      <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input onChange={handlePassword} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                          </div>
                          <div className="ml-3 text-sm">
                            <label  className="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                      <h1 href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</h1>
                  </div>
                  <button type="submit" onClick={handleLogin} className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>

                  <Link to="/register"> 
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <span className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</span>
                  </p>
                  </Link>
                  
              </div>
          </div>
      </div>
  </div>
</section>
  );
}

export default Login;