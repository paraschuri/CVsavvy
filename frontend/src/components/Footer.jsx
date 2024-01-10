import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import { BiLogoPinterestAlt } from "react-icons/bi";

function Footer() {
  const iconsTab = [
    { icon: <FaFacebookF /> },
    { icon: <AiOutlineTwitter /> },
    { icon: <AiFillYoutube /> },
    { icon: <BiLogoPinterestAlt /> },
  ];
  return (
    <>
      <footer className="bg-lightBlack h-auto flex justify-center">
        <div className="flex items-center container py-8 px-8">
          {/* footer div all */}
          <div className="flex justify-between flex-col md:flex-row  items-center md:items-start  md:gap-[5rem] text-left">
            {/* logo side */}
            <div className="flex flex-col w-1/2 md:p-0 py-4 gap-8 lg:mt-4"> 
                <h1 className="textGradient text-4xl pb-2 lg:text-5xl">CVsavvy</h1>
              
              <p className="text-[15px] font-medium text-white">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis at ut, eveniet accusantium ex cumque ratione veritatis facere rerum modi laboriosam officiis similique autem aliquid minus quae consectetur molestiae vel!
              </p>
              {/* socials */}
              <div className="flex gap-7 text-[18px] text-[#646464] justify-center md:justify-start">
                {iconsTab.map(({ icon }, index) => {
                  return (
                    <div
                      key={index}
                      className="text-2xl bg-[#efefef] p-2 rounded-full hover:bg-gradient-to-r hover:from-lightGreen hover:via-green-500 hover:to-darkGreen hover:text-white"
                      style={{ transition: "all 1s", animation: "ease-in-out" }}
                    >
                      {icon}
                    </div>
                  );
                })}
              </div>
              <p className="text-[16px] font-medium text-white">
                Privacy Policy | © {new Date().getFullYear()} 
                <span className="text-lightGreen"> CVsavvy</span>
              </p>
            </div>

            <div className="flex flex-row">
                <div className="flex flex-col gap-4 relative mt-4 lg:mr-12 mr-8">
                <p className="text-[22px] font-bold footer-main text-white">Comapany</p>

                <span className="top-[33px] absolute w-[7rem] h-[4px] bg-lightGreen"></span>

                <p className="text-[16px] hover:text-lightGreen cursor-pointer text-white font-medium hover:font-bold" style={{ transition: "all 0.3s "}} >
                    About Us 
                </p>
                <p className="text-[16px] hover:text-lightGreen cursor-pointer text-white font-medium hover:font-bold" style={{ transition: "all 0.3s "}}>
                    Blog
                </p>
                <p className="text-[16px] hover:text-lightGreen cursor-pointer text-white font-medium hover:font-bold" style={{ transition: "all 0.3s "}}>
                    Contact Us
                </p>
                <p className="text-[16px] hover:text-lightGreen cursor-pointer text-white font-medium hover:font-bold" style={{ transition: "all 0.3s "}}>
                    Pricing
                </p>
                <p className="text-[16px] hover:text-lightGreen cursor-pointer text-white font-medium hover:font-bold" style={{ transition: "all 0.3s "}}>
                    Testimonials
                </p>
                </div>

                {/* right div */}
                <div className="flex flex-col gap-4 relative mt-4 lg:ml-12 ml-8">
                <p className="text-[22px] font-bold footer-main text-white">Support</p>

                <span className="top-[33px] absolute w-[7rem] h-[4px] bg-darkGreen"></span>

                <p className="text-[16px] hover:text-darkGreen cursor-pointer text-white font-medium hover:font-bold" style={{ transition: "all 0.3s "}} >
                    Help center
                </p>
                <p className="text-[16px] hover:text-darkGreen cursor-pointer text-white font-medium hover:font-bold" style={{ transition: "all 0.3s "}}>
                    Terms Of Services
                </p>
                <p className="text-[16px] hover:text-darkGreen cursor-pointer text-white font-medium hover:font-bold" style={{ transition: "all 0.3s "}}>
                    Legal
                </p>
                <p className="text-[16px] hover:text-darkGreen cursor-pointer text-white font-medium hover:font-bold" style={{ transition: "all 0.3s "}}>
                    Privacy Policy 
                </p>
                <p className="text-[16px] hover:text-darkGreen cursor-pointer text-white font-medium hover:font-bold" style={{ transition: "all 0.3s "}}>
                    Status
                </p>
                </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;