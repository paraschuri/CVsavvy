import React, { useEffect } from 'react';
import { useState } from 'react'
import Login from '../components/Login'
import Signup from '../components/Signup'
import {useLocation,Link} from 'react-router-dom'

const LoginPage = () => {
  const [selected, setSelected] = useState(null);
  
  const handleSelect = (tab) => {
    setSelected(tab);
  };
  const location = useLocation();
  useEffect(()=>{
    const path = location.pathname;
    setSelected(path)
  },[location])
  return (
    <>
    <div className="flex justify-center items-center mt-32 mb-0 py-0">
      <Link to="/signup"
        className={`w-48 py-2 rounded-bl-none rounded-tl-lg flex justify-center ${
          selected === '/signup'
            ? 'bg-green-500 text-black font-bold border-darkGreen shadow-lg shadow-darkGreen'
            : 'bg-black text-gray-300 border-lightBlack hover:bg-lightBlack'
        }`}
        onClick={() => handleSelect('/signup')}
      >
        SIGN UP
      </Link>
      <Link to = "/login"
        className={`w-48 py-2 rounded-br-none rounded-tr-lg flex justify-center ${
          selected === '/login'
          ? 'bg-green-500 text-black font-bold border-darkGreen shadow-lg shadow-darkGreen'
          : 'bg-black text-gray-300 border-lightBlack hover:bg-lightBlack'
        }`}
        onClick={() => handleSelect('/login')}
      >
        LOG IN
      </Link>
    </div>
    <div className="flex-row justify-center items-center">
      {selected === '/signup' ? <Signup /> : <Login />}
    </div>
  </>
  );
};

export default LoginPage;
