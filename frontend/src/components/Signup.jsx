import React from 'react';
import { CircleUser, LockKeyhole, Mail  } from 'lucide-react';
import { useState } from 'react';
import { useSignup } from '../hooks/useSignup';
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import {githubLogin,googleLogin} from "../components/FirebaseLogin"
import { useAuthContext } from '../hooks/useAuthContext'

const SignUp = ({isUser}) => {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const {signup, error, setError,setIsLoading, isLoading} = useSignup()
  const { dispatch } = useAuthContext()
  const handleSubmit = async(e)=>{
    e.preventDefault();
    await signup(name,email,password,isUser)
  }
  const handleSignup = async (social) => {
    let user = null
    if(social === "google"){
      user = await googleLogin()
    }
    else{
      user = await githubLogin()
    }
    const response = await fetch(`/api/login/${isUser?"user":"recruiter"}/${social}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({user})
    })
    const json = await response.json()
    json.user = isUser
    if (!response.ok){
      setIsLoading(false)
      setError(response.error)
    }
    else {
      localStorage.setItem("data", JSON.stringify(json))
      dispatch({ type: 'LOGIN', payload: json })
      setIsLoading(false)
    }
  };
  return (
    <div className="min-h-max sm:w-96 flex items-center justify-center m-auto py-4 px-6 mb-60 w-[20.5rem]
     border-green-500 border-2 rounded-md rounded-t-none shadow-md shadow-lightGreen shadow-t-none">
      <div className="max-w-md w-full space-y-6 ">
        <div>
          <h4 className="mt-2 text-center text-balance font-extrabold text-white text-sm">
            Have an account? <Link to={`${isUser?"/user":"/recruiter"}/login`} className='text-darkGreen cursor-pointer hover:text-lightGreen' >Log in</Link> 
          </h4>
        </div>
        <form className="mt-4 space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className="text-white flex pb-2">Name</label>
              <div className='flex items-center'>
                <CircleUser className='bg-white rounded-r-none rounded-l-3xl h-10 md:h-9 w-8 pl-2 pr-2'/>
                <input id="name" name="name" type="text" onChange={(e)=>{setName(e.target.value)}} autoComplete="text" className="rounded-3xl rounded-l-none relative w-full h-auto px-3 py-2 border border-darkBlack placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-lightGreen focus:border-darkGreen focus:z-10 focus:-outline-offset-8 sm:text-sm" placeholder="Name" />
              </div>
            </div>
            <div>
              <label htmlFor="email-address" className="text-white flex py-2">Email address</label>
              <div className='flex items-center'>
                <Mail className='bg-white rounded-r-none rounded-l-3xl h-10 md:h-9 w-8 pl-2 pr-2'/>
                <input id="email-address" name="email" onChange={(e)=>{setEmail(e.target.value)}} className="rounded-3xl rounded-l-none relative w-full h-auto px-3 py-2 border border-darkBlack placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-lightGreen focus:border-darkGreen focus:z-10 focus:-outline-offset-8 sm:text-sm" placeholder="Email address" />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="text-white flex py-2">Password</label>
              <div className='flex items-center'>
                <LockKeyhole className='bg-white rounded-r-none rounded-l-3xl h-10 md:h-9 w-8 pl-2 pr-2'/>
                <input id="password" name="password" type="password" onChange={(e)=>{setPassword(e.target.value)}} className="rounded-3xl rounded-l-none relative w-full h-auto px-3 py-2 border border-darkBlack placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-lightGreen focus:border-darkGreen focus:z-10 focus:-outline-offset-8 sm:text-sm" placeholder="Password" />
              </div>
            </div>
          </div>

          <div className="flex justify-evenly">
            <div className="flex justify-evenly">
              <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4" />
              <label htmlFor="remember_me" className="ml-2 inline text-xs md:text-sm text-white rounded-3xl">
                Remember me
              </label>
            </div>

            <div className="">
              <a href="#" className="font-medium text-xs md:text-sm text-darkGreen hover:text-lightGreen">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button disabled={isLoading} type="submit" className={`${isLoading?"bg-gray-400 text-gray-600":"bgGradient"} group relative w-full flex justify-center pt-2 pb-1 px-4 border border-transparent text-sm font-medium rounded-3xl text-white`}>
              SIGN UP 
            </button>
          </div>
          <div className='text-white flex justify-center'> 
            <hr className='w-[70%] my-auto font-thin'/> 
            <div className='w-full text-xs md:text-sm flex justify-center'> Or continue with </div>
            <hr className='w-[70%] my-auto font-thin'/>
          </div>
          <div className='flex justify-center items-center m-0'>
            <AiFillGoogleCircle onClick={()=>{handleSignup("google")}} size={45} className='hover:text-lightGreen mr-2 cursor-pointer transition-all duration-500'/>
            <FaGithub size={45} onClick={()=>{handleSignup("github")}} className='hover:text-lightGreen cursor-pointer ml-2 transition-all duration-500'/>
          </div>
        </form>
      </div>
      {error &&
        (<div   
          className="absolute top-20 md:top-24 py-2 flex rounded-lg w-80 sm:w-96 px-6 bg-red-500 text-white">
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

export default SignUp;
    