import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import { useEffect } from "react";

const Navbar = () => {
    const location = useLocation();
    const [isOpen,setIsOpen] = useState(false);
    const [active,setActive] = useState("Null");
    const {logout} = useLogout()
    const {user} = useAuthContext()
    useEffect(()=>{
        let path = location.pathname.split('/')
        path = path[path.length-1]
        setActive(path)
    },[])
    return (
        <nav className="w-full shadow-md shadow-[#71767c] z-10 sticky top-0 left-0 bg-[#474B4F]">
            <div className='md:flex mx-auto bg-[#474B4F] m-auto items-center justify-between py-[0.3rem] px-4 md:px-12 lg:px-24'>
                <Link to="/"  className="font-bold textGradient text-2xl py-1 cursor-pointer"><span className="text-4xl">CV</span>SAVVY</Link>
                <ul className={`absolute left-0 w-full lg:w-auto lg:flex lg:items-center lg:gap-4 pb-6 lg:pb-0 lg:static bg-[#474B4F] lg:z-auto z-[-1] lg:pl-24 pl-10 ${isOpen ? 'top-12 transition-all duration-400 ease-in':'top-[-500px]'}`}>
                    <li className="'lg:ml-8 lg:my-0 my-6">
                        <Link to ="/" className={` hover:text-lightGreen ${active==="home"?"text-lightGreen":"text-white"}`} onClick={()=>{setIsOpen(false);setActive("home")}}>HOME</Link>
                    </li>
                    {
                        user && (
                            user.user?
                            <li className="'lg:ml-8 lg:my-0 my-6">
                                <Link to="/user" className={` hover:text-lightGreen ${active==="user"?"text-lightGreen":"text-white"}`} onClick={()=>{setIsOpen(false);setActive("user")}}>USER</Link>
                            </li>:
                            <li className="'lg:ml-8 lg:my-0 my-6">
                                <Link to="/recruiter" className={` hover:text-lightGreen ${active==="recruiter"?"text-lightGreen":"text-white"}`} onClick={()=>{setIsOpen(false);setActive("user")}}>RECRUITER</Link>
                            </li>
                        )
                    }
                    <li className="'lg:ml-8 lg:my-0 my-6">
                        <Link to="/about" className={` hover:text-lightGreen ${active==="about"?"text-lightGreen":"text-white"}`} onClick={()=>{setIsOpen(false);setActive("user")}}>ABOUT US</Link>
                    </li>
                    <li className="'lg:ml-8 lg:my-0 my-6">
                        <Link to="/ContactUs" className={`hover:text-lightGreen ${active==="contact"?"text-lightGreen":"text-white"}`} onClick={()=>{setIsOpen(false);setActive("contact")}}>CONTACT US</Link>
                    </li>
                    {
                        user && <>
                        <button onClick={logout} className="lg:hidden bg-[#263238] hover:bg-[#23292c] py-2 my-1 px-6 rounded-3xl text-xs text-white border-2 border-white font-semibold">Log out</button>
                        </>
                    }
                    {
                        !user && <>
                        <Link to="/start" className="lg:hidden bgGradient py-2 mr-4 my-1 px-6 text-xs rounded-3xl text-black font-semibold" onClick={()=>{setIsOpen(false);setActive("")}}>GET STARTED</Link>
                        <Link to="/login" className="lg:hidden bg-[#263238] hover:bg-[#23292c] py-2 my-1 px-6 rounded-3xl text-xs text-white border-2 border-white font-semibold" onClick={()=>{setIsOpen(false);setActive("")}}>LOG IN</Link>
                        </>
                    }
                </ul>
                <div className="hidden md:flex mt-1"> 
                    {
                        user && <>
                        <span className="text-white py-2 text-xl px-2 text-center">{user.name.split(' ')[0]}</span>
                        <button onClick={logout} className={`bg-[#263238] ${isOpen?"hidden":""} hover:bg-[#23292c] py-2 my-1 mr-14 lg:mr-0 px-6 ml-4 rounded-3xl text-xs text-white border-2 border-white font-semibold`}>Log out</button>
                        </>
                    }
                    {
                        !user && (<>    
                            <Link to="/start" className={`bgGradient ${isOpen?"hidden":""} py-2 my-1 px-6 text-xs text-black rounded-3xl font-bold`} onClick={()=>{setActive("")}}>GET STARTED</Link>
                            <Link to="/login" className={`bg-[#263238] ${isOpen?"hidden":""} hover:bg-[#23292c] py-2 my-1 mr-14 lg:mr-0 px-6 ml-4 rounded-3xl text-xs text-white border-2 border-white font-semibold`} onClick={()=>{setActive("")}}>LOG IN</Link>
                        </>)
                    }
                </div>
                <button onClick={() => setIsOpen(!isOpen)} className="text-4xl absolute right-8 md:right-12 top-2 md:top-3 cursor-pointer lg:hidden">
                    {isOpen?<IoClose />:<IoMdMenu />}
                </button>
            </div>
        </nav>
    );
}
 
export default Navbar;