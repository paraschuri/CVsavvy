import React from 'react';
import { LockKeyhole,Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {useLogin} from "../hooks/useLogin"
import { IoClose } from 'react-icons/io5';


const Login = ({isUser}) => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const {login,error,setError,isLoading} = useLogin()
  const handleSubmit = async(e)=>{
    e.preventDefault();
    await login(email,password,isUser)
  }
  return (
    <div className="min-h-max sm:w-96 flex items-center justify-center mx-auto py-4 px-6 w-[20.5rem] mb-72
     border-green-500 border-2 rounded-md rounded-t-none backdrop-blur-3xl shadow-md shadow-green-400">
      <div className="max-w-md w-full space-y-6">
        <div>
          <h4 className="mt-3 text-center text-balance font-extrabold text-white text-sm">   
            Dont have an account? <Link to={`${isUser?"/user":"/recruiter"}/signup`} className='text-darkGreen cursor-pointer hover:text-lightGreen' >Sign Up</Link> 
          </h4>
        </div>
        <form className="mt-4 space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="text-white flex py-2">Email address</label>
              <div className='flex items-center'>
                <Mail className='bg-white rounded-r-none rounded-l-3xl h-10 sm:h-9 w-8 pl-2 pr-2'/>
                <input id="email-address" name="email" onChange={(e)=>{setEmail(e.target.value)}} className="rounded-3xl rounded-l-none relative w-full h-auto px-3 py-2 border border-darkBlack placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-lightGreen focus:border-darkGreen focus:z-10 focus:-outline-offset-8 sm:text-sm" placeholder="Email address" />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="text-white flex py-2">Password</label>
              <div className='flex items-center'>
                <LockKeyhole className='bg-white h-10 sm:h-9 rounded-r-none rounded-l-3xl w-8 pl-2 pr-2'/>
                <input id="password" name="password" type="password" onChange={(e)=>{setPassword(e.target.value)}} autoComplete="current-password" required className="rounded-3xl rounded-l-none relative w-full h-auto px-3 py-2 border border-darkBlack placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-lightGreen focus:border-darkGreen focus:z-10 focus:-outline-offset-8 sm:text-sm" placeholder="Password" />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4" />
              <label htmlFor="remember_me" className="ml-2 block text-sm text-white rounded-3xl">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="flex justify-center items-end font-medium text-darkGreen hover:text-lightGreen">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button type="submit" disabled={isLoading} className={`${isLoading?"bg-gray-400 text-gray-600":"bgGradient"}group relative w-full flex justify-center pt-2 pb-1 px-4 border border-transparent text-sm font-medium rounded-3xl text-white bgGradient focus:outline-none focus:ring-2 focus:ring-offset-black focus:ring-green-600`}>
              LOG IN 
            </button>
          </div>
        </form>
      </div>
      {error &&
        (<div   
          className="absolute -top-24 py-2 flex rounded-lg w-80 sm:w-96 px-6 bg-red-500 text-white">
          <div className="shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              <path fill-rule="evenodd"
                d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                clip-rule="evenodd"></path>
            </svg>
          </div>
          <div className="ml-3 sm:text-base text-sm">
            {error}
          </div>
          <button
            className="text-lg font-bold text-white absolute right-4 top-[0.65rem]"
            onClick={()=>{setError(null)}}
            >
            <IoClose />
          </button>
        </div>)
      }
    </div>
  );
}

export default Login;
    