import React from 'react';
import { CircleUser } from 'lucide-react';
import { LockKeyhole } from 'lucide-react';
import { Mail } from 'lucide-react';
import { FacebookLoginButton } from "react-social-login-buttons";
import { GoogleLoginButton } from "react-social-login-buttons";
import { GithubLoginButton } from "react-social-login-buttons";

const SignUp = () => {
  return (
    <div className="min-h-max w-96 flex items-center justify-center m-auto py-4 px-4 sm:px-6 lg:px-8
     border-green-500 border-2 rounded-md rounded-t-none shadow-md shadow-lightGreen shadow-t-none">
      <div className="max-w-md w-full space-y-8 ">
        <div>
          <h4 className="mt-auto mb-2 text-center text-balance font-extrabold text-white text-xs">
            Dont have an account, <span className='text-darkGreen cursor-pointer hover:text-lightGreen' >Sign Up</span> 
          </h4>
        </div>
        <form className="mt-4 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className="text-white flex py-2">Name</label>
              <div className='flex items-center'>
                <CircleUser className='bg-white rounded-r-none rounded-l-3xl h-9 w-8 pl-2 pr-2'/>
                <input id="name" name="name" type="text" autoComplete="text"  required className="rounded-3xl rounded-l-none relative w-full h-auto px-3 py-2 border border-darkBlack placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-lightGreen focus:border-darkGreen focus:z-10 focus:-outline-offset-8 sm:text-sm" placeholder="Name" />
              </div>
            </div>
            <div>
              <label htmlFor="email-address" className="text-white flex py-2">Email address</label>
              <div className='flex items-center'>
                <Mail className='bg-white rounded-r-none rounded-l-3xl h-9 w-8 pl-2 pr-2'/>
                <input id="email-address" name="email" type="email" autoComplete="email"  required className="rounded-3xl rounded-l-none relative w-full h-auto px-3 py-2 border border-darkBlack placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-lightGreen focus:border-darkGreen focus:z-10 focus:-outline-offset-8 sm:text-sm" placeholder="Email address" />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="text-white flex py-2">Password</label>
              <div className='flex items-center'>
                <LockKeyhole className='bg-white rounded-r-none rounded-l-3xl h-9 w-8 pl-2 pr-2'/>
                <input id="password" name="password" type="password" autoComplete="current-password" required className="rounded-3xl rounded-l-none relative w-full h-auto px-3 py-2 border border-darkBlack placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-lightGreen focus:border-darkGreen focus:z-10 focus:-outline-offset-8 sm:text-sm" placeholder="Password" />
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
              <a href="#" className="font-medium text-darkGreen hover:text-lightGreen">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-3xl text-white bgGradient  focus:outline-none focus:ring-2 focus:ring-offset-black focus:ring-green-600">
              SIGN UP 
            </button>
          </div>
          
          <div className='block relative'>
            <div className='text-white text-xs flex items-center justify-center'>
              Or continue with
            </div>
            <hr className='w-80 h-1 my-4 bg-gray-200 border-0 rounded dark:bg-white'/>
            <div className='flex-col items-center justify-center'>
              <GoogleLoginButton size='40px' iconSize='20px'/>
              <FacebookLoginButton size='40px' iconSize='20px'/>
              <GithubLoginButton size='40px' iconSize='20px'/>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
    