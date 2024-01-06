import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
    const [isOpen,setIsOpen] = useState(false);
    let Links =[
        {name:"HOME",link:"/"},
        {name:"ABOUT",link:"/"},
        {name:"USER",link:"/"},
        {name:"COMPANIES",link:"/"},
    ];
  
    return (
        <nav className="shadow-md shadow-[#71767c] w-full fixed top-0 left-0 bg-[#474B4F]">
            <div className='md:flex max-w-[1300px] bg-[#474B4F] m-auto items-center justify-between py-4 md:px-10 px-1'>
                <div>
                    <h1 className="font-bold textGradient text-xl py-2 px-8"><span className="text-3xl">CV</span>SAVVY</h1>
                </div>
                <button onClick={() => setIsOpen(!isOpen)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
                    {isOpen?<IoClose />:<IoMdMenu />}
                </button>
                <ul className={`md:flex md:items-center md:gap-6 md:pb-0 pb-6 absolute md:static bg-[#474B4F] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${isOpen ? 'top-[4.5rem] ':'top-[-400px]'}`}>
                    {
                        Links.map((link)=>(
                            <li key={link.name} className="'md:ml-8 text-lg md:my-0 my-7">
                                <a href={link.link} className="text-white hover:text-lightGreen">{link.name}</a>
                            </li>
                        ))
                    }
                    <button className="md:hidden bg-[#263238] py-2 my-1 px-6 mr-4 rounded-3xl text-xs text-white border-2 border-white font-semibold">SIGN UP</button>
                    <button className="md:hidden bgGradient py-2 my-1 px-6 text-xs rounded-3xl font-semibold">LOG IN</button>
                </ul>
                <div className="hidden md:flex">
                    <button className="bg-[#263238] py-2 my-1 px-6 mr-4 rounded-3xl text-xs text-white border-2 border-white font-semibold">SIGN UP</button>
                    <button className="bgGradient py-2 my-1 px-6 text-xs rounded-3xl font-semibold">LOG IN</button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;


