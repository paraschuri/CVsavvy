import React, { useEffect } from 'react';
import { useState } from 'react'
import UserLogin from '../components/UserLogin'
import UserSignup from '../components/UserSignup'
import RecruiterLogin from '../components/RecruiterLogin'
import RecruiterSignup from '../components/RecruiterSignup'
import {useLocation,Link} from 'react-router-dom'
import Footer from '../components/Footer';

const LoginPage = ({isUser,isLogin}) => { 

  // const [selected, setSelected] = useState(null);
  
  // const handleSelect = (tab) => {
  //   setSelected(tab);
  // };

  // const location = useLocation();
  // useEffect(()=>{
  //   const path = location.pathname;
  //   setSelected(path)
  // },[location])
  // const selected = (isUser?"user":"recruiter")

  return (
    <>
    <div className="flex justify-center items-center mt-24 py-0 mx-auto sm:w-auto w-[20.5rem] ">
      <Link to = {isUser?"/user/login":"/recruiter/login"}
        className={`w-48 py-2 rounded-br-none rounded-tl-lg flex justify-center ${
          isLogin
          ? 'bg-green-500 text-black font-bold border-darkGreen shadow-lg shadow-darkGreen'
          : 'bg-black text-gray-300 border-lightBlack hover:bg-lightBlack'
        }`}
        
      >
        LOG IN
      </Link>
      <Link to = {isUser?"/user/signup":"/recruiter/signup"}
        className={`w-48 py-2 rounded-bl-none rounded-tr-lg flex justify-center ${
          !isLogin
            ? 'bg-green-500 text-black font-bold border-darkGreen shadow-lg shadow-darkGreen'
            : 'bg-black text-gray-300 border-lightBlack hover:bg-lightBlack'
        }`}
        
      >
        SIGN UP
      </Link>
    </div>
    <div className="flex-row justify-center items-center">
      {
        isLogin && (isUser?<UserLogin />:<RecruiterLogin />)
      }
      {
        !isLogin && (isUser?<UserSignup />:<RecruiterSignup />)
      }
    </div>
    <Footer />
  </>
  );
};

export default LoginPage;
