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
    <div className="flex justify-center items-center mt-44">
      <Link to="/signup"
        className={`w-48 py-2 px-4 rounded-bl-none rounded-tl-lg ${
          selected === '/signup'
            ? 'bg-lightGreen text-white border-darkGreen shadow-2xl shadow-darkGreen'
            : 'bg-black text-gray-300 border-lightBlack hover:bg-lightBlack'
        }`}
        onClick={() => handleSelect('/signup')}
      >
        SIGN UP
      </Link>
      <Link to = "/login"
        className={`w-48 py-2 px-4 rounded-br-none rounded-tr-lg ${
          selected === '/login'
          ? 'bg-lightGreen text-white border-darkGreen shadow-2xl shadow-darkGreen'
          : 'bg-black text-gray-300 border-lightBlack hover:bg-lightBlack'
        }`}
        onClick={() => handleSelect('/login')}
      >
        LOG IN
      </Link>
    </div>
    <div className="flex-col justify-center py-4">
      {selected === '/signup' ? <Signup /> : <Login />}
    </div>
  </>
  );
};

export default LoginPage;
