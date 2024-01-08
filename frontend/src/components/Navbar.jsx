import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen,setIsOpen] = useState(false);
    
    return (
        <nav className="w-full shadow-md shadow-[#71767c] z-10 absolute top-0 left-0 bg-[#474B4F]">
            <div className='md:flex max-w-[1300px] bg-[#474B4F] m-auto items-center justify-between py-[0.3rem] md:px-10 px-1'>
                <h1 className="font-bold textGradient text-2xl py-1 px-[2.1rem] md:px-8"><span className="text-4xl">CV</span>SAVVY</h1>
                <ul className={`absolute left-0 w-full md:w-auto md:flex md:items-center md:gap-6 pb-6 md:pb-0 md:static bg-[#474B4F] md:z-auto z-[-1] md:pl-0 pl-10 ${isOpen ? 'top-[3.5rem] transition-all duration-400 ease-in':'top-[-500px]'}`}>
                    <li className="'md:ml-8 text-lg md:my-0 my-6">
                        <Link to ="/" className="text-white hover:text-lightGreen">HOME</Link>
                    </li>
                    <li className="'md:ml-8 text-lg md:my-0 my-6">
                        <Link to="/" className="text-white hover:text-lightGreen">ABOUT</Link>
                    </li>
                    <li className="'md:ml-8 text-lg md:my-0 my-6">
                        <Link to="/" className="text-white hover:text-lightGreen">USER</Link>
                    </li>
                    <li className="'md:ml-8 text-lg md:my-0 my-6">
                        <Link to="/" className="text-white hover:text-lightGreen">COMPANIES</Link>
                    </li>
                        <Link to="/login" className="md:hidden bg-gradient-to-r from-lightGreen to-darkGreen py-2 my-1 px-6 text-xs rounded-3xl font-semibold">LOG IN</Link>
                        <Link to="/signup" className="md:hidden bg-[#263238] hover:bg-[#23292c] py-2 my-1 px-6 mr-4 rounded-3xl text-xs text-white border-2 border-white font-semibold">SIGN UP</Link>
                </ul>
                <div className="hidden md:flex"> 
                    <Link to="/login" className="bg-gradient-to-r from-lightGreen to-darkGreen py-2 my-1 px-6 text-xs rounded-3xl font-semibold hover:bg-gradient-to-r">LOG IN</Link>
                    <Link to="/signup" className="bg-[#263238] hover:bg-[#23292c] py-2 my-1 px-6 ml-6 rounded-3xl text-xs text-white border-2 border-white font-semibold">SIGN UP</Link>
                </div>
                <button onClick={() => setIsOpen(!isOpen)} className="text-4xl absolute right-8 top-3 cursor-pointer md:hidden">
                    {isOpen?<IoClose />:<IoMdMenu />}
                </button>
            </div>
        </nav>
    );
}

export default Navbar;


