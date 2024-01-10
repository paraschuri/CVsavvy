import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
 
const Navbar = () => {
    const [isOpen,setIsOpen] = useState(false);
 
    return (
        <nav className="w-full shadow-md shadow-[#71767c] z-10 sticky top-0 left-0 bg-[#474B4F]">
            <div className='md:flex max-w-[1300px] bg-[#474B4F] m-auto items-center justify-between py-[0.3rem] px-10 lg:px-20'>
                <Link to="/"  className="font-bold textGradient text-2xl py-1 cursor-pointer"><span className="text-4xl">CV</span>SAVVY</Link>
                <ul className={`absolute left-0 w-full lg:w-auto lg:flex lg:items-center lg:gap-4 pb-6 lg:pb-0 lg:static bg-[#474B4F] lg:z-auto z-[-1] lg:pl-0 pl-10 ${isOpen ? 'top-12 transition-all duration-400 ease-in':'top-[-500px]'}`}>
                    <li className="'lg:ml-8 lg:my-0 my-6">
                        <Link to ="/" className="text-white hover:text-lightGreen" onClick={()=>{setIsOpen(false)}}>HOME</Link>
                    </li>
                    <li className="'lg:ml-8 lg:my-0 my-6">
                        <Link to="/" className="text-white hover:text-lightGreen" onClick={()=>{setIsOpen(false)}}>ABOUT</Link>
                    </li>
                    <li className="'lg:ml-8 lg:my-0 my-6">
                        <Link to="/" className="text-white hover:text-lightGreen" onClick={()=>{setIsOpen(false)}}>USER</Link>
                    </li>
                    <li className="'lg:ml-8 lg:my-0 my-6">
                        <Link to="/" className="text-white hover:text-lightGreen" onClick={()=>{setIsOpen(false)}}>COMPANIES</Link>
                    </li>
                    <li className="'lg:ml-8 lg:my-0 my-6">
                        <Link to="/" className="text-white hover:text-lightGreen"onClick={()=>{setIsOpen(false)}}>CONTACT US</Link>
                    </li>
                    <Link to="/login" className="lg:hidden bgGradient py-2 mr-4 my-1 px-6 text-xs rounded-3xl font-semibold" onClick={()=>{setIsOpen(false)}}>LOG IN</Link>
                    <Link to="/signup" className="lg:hidden bg-[#263238] hover:bg-[#23292c] py-2 my-1 px-6 rounded-3xl text-xs text-white border-2 border-white font-semibold" onClick={()=>{setIsOpen(false)}}>SIGN UP</Link>
                </ul>
                <div className="hidden md:flex mt-1"> 
                    <Link to="/login" className={`bgGradient ${isOpen?"hidden":""} py-2 my-1 px-6 text-xs rounded-3xl font-semibold`}>LOG IN</Link>
                    <Link to="/signup" className={`bg-[#263238] ${isOpen?"hidden":""} hover:bg-[#23292c] py-2 my-1 mr-14 lg:mr-0 px-6 ml-4 rounded-3xl text-xs text-white border-2 border-white font-semibold`}>SIGN UP</Link>
                </div>
                <button onClick={() => setIsOpen(!isOpen)} className="text-4xl absolute right-8 md:right-12 top-2 md:top-3 cursor-pointer lg:hidden">
                    {isOpen?<IoClose />:<IoMdMenu />}
                </button>
            </div>
        </nav>
    );
}
 
export default Navbar;