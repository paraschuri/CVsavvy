import React from 'react';


const Tab = ({ selected, onSelect }) => {
  return (
    <div className="flex justify-center items-center mt-44">
      <button
        className={`w-48 py-2 px-4 rounded-bl-none rounded-tl-lg ${
          selected === 'Sign In'
            ? 'bg-lightGreen text-white border-darkGreen shadow-2xl shadow-darkGreen'
            : 'bg-black text-gray-300 border-lightBlack hover:bg-lightBlack'
        }`}
        onClick={() => onSelect('Sign In')}
      >
        SIGN IN
      </button>
      <button
        className={`w-48 py-2 px-4 rounded-br-none rounded-tr-lg ${
          selected === 'Log In'
          ? 'bg-lightGreen text-white border-darkGreen shadow-2xl shadow-darkGreen'
          : 'bg-black text-gray-300 border-lightBlack hover:bg-lightBlack'
        }`}
        onClick={() => onSelect('Log In')}
      >
        LOG IN
      </button>
    </div>
  );
};

export default Tab;
