import React, { useState } from "react";
import developer from "../assets/developer.png";
import company from "../assets/company.png";
import { Search, CornerDownRight } from "lucide-react";

const GetStarted = () => {
  const [selectedImage, setSelectedImage] = useState("");

  const images = {
    hire: company,
    practice: developer,
  };

  const isOptionSelected = selectedImage !== "";

  return (
    <div className="flex flex-row items-start justify-start bg-darkBlack mt-36 mb-8 mx-12 lg:ml-72">
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
              onClick={() => setSelectedImage(images.hire)}
              className="bg-white text-black font-bold p-3 rounded-md mb-8 flex border-2 border-transparent hover:border-lightGreen focus:border-darkGreen"
            >
              <Search size={40} className="lg:mx-4" />
              <div className="flex">I am here to hire some talent</div>
            </button>
            <button
              onClick={() => setSelectedImage(images.practice)}
              className="bg-white text-black font-bold p-3 rounded-md mb-6 flex border-2 border-transparent hover:border-lightGreen focus:border-darkGreen"
            >
              <CornerDownRight size={40} className="lg:mx-4" />I am here to
              improve my resume
            </button>
          </div>
          <button
            type="submit"
            className={`w-48 p-2 rounded-md ${
              isOptionSelected
                ? "bgGradient text-white hover:bg-darkGreen"
                : "bg-gray-400 text-gray-600 cursor-not-allowed"
            }`}
            disabled={!isOptionSelected}
          >
            Create Account
          </button>
          {/* <button type="submit" className="w-full bg-lightGreen text-black font-bold p-2 rounded-md hover:bg-darkGreen">Create Account</button> */}
        </div>

        {/* Image on the right */}
      </div>
      <div className="lg:flex justify-start w-[600px] h-[600px] pb-16 hidden">
        {selectedImage && (
          <img src={selectedImage} alt="Selected" className="object-contain" />
        )}
      </div>
    </div>
  );
};

export default GetStarted;
