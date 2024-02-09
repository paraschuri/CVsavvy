import React, { useState,useEffect } from "react";
import user from "../assets/developer.png";
import recruiter from "../assets/company.png";
import { Search, CornerDownRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const GetStarted = () => {
  const [selected, setSelected] = useState("");

  const location = useLocation();
  const path = location.pathname.slice(-5);
  
  return (
    <div className="flex flex-row items-start justify-start bg-darkBlack mt-[5%] mb-8 mx-12 lg:ml-[15%]">
      <div className="flex flex-col w-full max-w-4xl">
        <div className="text-white flex text-xl lg:text-4xl w-2/3 lg:w-[450px] font-bold">
          HOW DO YOU WANT TO USE CVSAVVY
        </div>
        <div className="text-white flex text-md py-4 font-thin">
          We'll personlize your setup experience accordingly.
        </div>
        <div className="flex flex-col lg:w-96 md:w-1/2 w-[300px] py-8">
          <div className="flex flex-col mb-6">
            <button
              onClick={() => setSelected("recruiter")}
              className={`${selected==="recruiter"?"bgGradient":"bg-white"} text-black font-bold p-3 rounded-md mb-8 flex border-2 border-transparent hover:border-lightGreen focus:border-darkGreen`}
            >
              <Search size={40} className="lg:mx-4" />
              <div className="flex">I am here to hire some talent</div>
            </button>
            <button
              onClick={() => setSelected("user")}
              className={`${selected==="user"?"bgGradient":"bg-white"} text-black font-bold p-3 rounded-md mb-6 flex border-2 border-transparent hover:border-lightGreen focus:border-darkGreen`}
            >
              <CornerDownRight size={40} className="lg:mx-4" />I am here to
              improve my resume
            </button>
          </div>
          {path==="start" && <Link
            to={selected==='user'?"/user/signup":"/recruiter/signup"}
            type="submit"
            className={`w-48 p-2 text-center rounded-md ${
              selected
                ? "bgGradient text-white hover:bg-darkGreen"
                : "bg-gray-400 text-gray-600 cursor-not-allowed"
            }`}
            disabled={!selected}
          >
            Create Account
          </Link>}
          {path==="login" && <Link
            to={selected==='user'?"/user/login":"/recruiter/login"}
            type="submit"
            className={`w-48 p-2 text-center rounded-md ${
              selected
                ? "bgGradient text-white hover:bg-darkGreen"
                : "bg-gray-400 text-gray-600 cursor-not-allowed"
            }`}
            disabled={!selected}
          >
            Login
          </Link>}
          {/* <button type="submit" className="w-full bg-lightGreen text-black font-bold p-2 rounded-md hover:bg-darkGreen">Create Account</button> */}
        </div>

        {/* Image on the right */}
      </div>
      <div className="lg:flex justify-start pb-16 hidden">
        {selected && (
          <img src={selected==='user'?user:recruiter} alt="Selected" className="object-contain transition-all duration-500" />
        )}
      </div>
    </div>
  );
};

export default GetStarted;
