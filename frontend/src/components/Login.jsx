import React from 'react';
import { LockKeyhole } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <div className="min-h-max sm:w-96 flex items-center justify-center mt-0 mx-auto py-4 px-6 w-[20.5rem] mb-72
     border-green-500 border-2 rounded-md rounded-t-none backdrop-blur-3xl shadow-md shadow-green-400">
      <div className="max-w-md w-full space-y-6">
        <div>
          <h4 className="mt-3 text-center text-balance font-extrabold text-white text-sm">   
            Dont have an account? <Link to="/signup" className='text-darkGreen cursor-pointer hover:text-lightGreen' >Sign Up</Link> 
          </h4>
        </div>
        <form className="mt-4 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="text-white flex py-2">Email address</label>
              <div className='flex items-center'>
                <Mail className='bg-white rounded-r-none rounded-l-3xl h-10 sm:h-9 w-8 pl-2 pr-2'/>
                <input id="email-address" name="email" type="email" autoComplete="email"  required className="rounded-3xl rounded-l-none relative w-full h-auto px-3 py-2 border border-darkBlack placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-lightGreen focus:border-darkGreen focus:z-10 focus:-outline-offset-8 sm:text-sm" placeholder="Email address" />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="text-white flex py-2">Password</label>
              <div className='flex items-center'>
                <LockKeyhole className='bg-white h-10 sm:h-9 rounded-r-none rounded-l-3xl w-8 pl-2 pr-2'/>
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
              <a href="#" className="flex justify-center items-end font-medium text-darkGreen hover:text-lightGreen">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button type="submit" className="group relative w-full flex justify-center pt-2 pb-1 px-4 border border-transparent text-sm font-medium rounded-3xl text-white bgGradient focus:outline-none focus:ring-2 focus:ring-offset-black focus:ring-green-600">
              LOG IN 
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
    