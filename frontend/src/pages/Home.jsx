import hero_img from "../assets/hero_img.png"
import arrow from "../assets/arrow.png"
import developer from "../assets/developer.png"
import company from "../assets/company.png"
import { FaCircleChevronRight } from "react-icons/fa6";
import SingleFeature from "../components/SingleFeature";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import features from "../components/features"
import Footer from "../components/Footer";

const Home = () => {
    
    return (
        <>
            {/* <GetStarted /> */}
            <div className="text-white max-w-[1300px] px-10 pr-16 mx-auto w-screen">
                <div className="flex flex-col lg:flex-row gap-4">
                    <div className="mt-7 flex justify-center lg:hidden">
                        <img src={hero_img} alt="hello" className="h-[300px] w-[350px]" />
                    </div>
                    <div className="lg:mt-16 lg:w-[67%] lg:ml-10 lg:block flex flex-col items-center ">
                        <h1 className="text-xl min-[440px]:text-2xl min-[540px]:text-3xl sm:text-4xl font-medium ml-2 lg:ml-0">Supercharge Your Career with 
                            <span className="textGradient mt-2 pr-8 text-xl min-[440px]:text-2xl min-[540px]:text-3xl sm:text-4xl font-semibold "> CVsavvy</span>
                        </h1>
                        <p className="mt-4 sm:mt-8 lg:max-w-[600px] text-xs sm:text-sm md:w-full ml-2 lg:ml-0">Our free <span className="font-semibold">AI-powered</span> resume checker scores your resume on key criteria recruiters and hiring managers look for. Get actionable steps to revamp your resume and <span className="font-semibold">land more interviews.</span></p>
                        <button className="bgGradient py-2 px-6 mt-6 lg:mt-8 lg:ml-40 text-sm rounded-3xl font-semibold text-black">Check your Resume</button>
                    </div>
                    <div className="mt-7 hidden lg:block">
                        <img src={hero_img} alt="hello" className="h-[350px] w-[400px]" />
                    </div>
                </div>
                <div className="flex lg:ml-10 lg:my-8 mb-6 lg:flex-row mt-8 flex-col items-start ml-2">
                    <div className="lg:mr-2 text-2xl font-extrabold mb-4 flex flex-row items-center lg:flex lg:flex-row">WHY USE CVSAVVY
                        <img src={arrow} alt="" className="px-4 lg:object-scale-down h-20 w-48 m-0 hidden md:block lg:block"/>  
                        <div className="lg:text-sm text-xs font-light lg:flex lg:flex-col hidden">From simple spelling mistakes to more hard-to-notice issues like passive language, there's a lot that could be wrong with your resume. <br /> The average job seeker might not notice these issues - <span className="font-bold">but employers do.</span> <br /> Our resume checker was designed by NALLE LOG and VELLE LOG to scan for all the details that hiring managers look for when reviewing a job applicant. Then it gives you immediate feedback on ways you can improve your resume.</div>
                    </div>
                    <div className="text-xs font-light lg:hidden">From simple spelling mistakes to more hard-to-notice issues like passive language, there's a lot that could be wrong with your resume. <br /> The average job seeker might not notice these issues - <span className="font-bold">but employers do.</span> <br /> Our resume checker was designed by NALLE LOG and VELLE LOG to scan for all the details that hiring managers look for when reviewing a job applicant. Then it gives you immediate feedback on ways you can improve your resume.</div>
                </div>
                <div className="flex flex-wrap justify-evenly lg:mx-4">
                    {
                        features.map(feature=>(
                            <SingleFeature key={feature.name} name={feature.name} img={feature.img} info={feature.info} />
                        ))
                    }
                </div>
                <div className="flex lg:ml-10 lg:my-8 mb-6 lg:flex-row mt-6 flex-col items-start">
                    <div className="lg:mr-2 text-2xl font-extrabold mb-4 flex flex-row items-center lg:flex lg:flex-row">INTRODUCTION 
                        <img src={arrow} alt="" className="px-4 lg:object-scale-down h-20 w-48 m-0 hidden md:block lg:block"/>  
                        <div className="lg:text-sm text-xs font-light lg:flex lg:flex-col hidden">From simple spelling mistakes to more hard-to-notice issues like passive language, there's a lot that could be wrong with your resume. <br /> The average job seeker might not notice these issues - <span className="font-bold">but employers do.</span> <br /> Our resume checker was designed by NALLE LOG and VELLE LOG to scan for all the details that hiring managers look for when reviewing a job applicant. Then it gives you immediate feedback on ways you can improve your resume.</div>
                    </div>
                    <div className="text-xs font-light lg:hidden">From simple spelling mistakes to more hard-to-notice issues like passive language, there's a lot that could be wrong with your resume. <br /> The average job seeker might not notice these issues - <span className="font-bold">but employers do.</span> <br /> Our resume checker was designed by NALLE LOG and VELLE LOG to scan for all the details that hiring managers look for when reviewing a job applicant. Then it gives you immediate feedback on ways you can improve your resume.</div>
                </div>
                <About />
                <div className="flex flex-col lg:flex-row lg:gap-10">
                    <div className="my-4 mb-10 flex gap-4 lg:justify-end bg-gradient-radial">
                        <img src={developer} alt="" />
                        <div className="flex flex-col gap-4 lg:w-1/2">
                            <div className="flex gap-2">
                                <FaCircleChevronRight className="text-[#22A75D] mt-4"/>
                                <p className="font-semibold text-xl mt-[0.6rem]">For <span className="text-[#22A75D] underline">Developers</span></p>
                            </div>
                            <p className="text-sm lg:w-3/4 lg:pl-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum harum minima sed sapiente. Quasi saepe nemo ex maiores doloremque sapiente assumenda cumque quidem! Vero accusamus iste suscipit, quidem molestiae reiciendis?</p>
                        </div>
                    </div>
                    <div className="mb-10 lg:mt-0 flex gap-4">
                        <img src={company} alt="" />
                        <div className="flex flex-col lg:w-1/2 mt-3 lg:mt-0 p-4">
                            <div className="flex gap-2">
                                <FaCircleChevronRight className="text-[#2278D4] mt-4"/>
                                <p className="font-semibold text-xl mt-[0.6rem]">For <span className="text-[#2278D4] underline">Companies</span></p>
                            </div>
                            <p className="text-sm lg:w-3/4 lg:pl-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum harum minima sed sapiente. Quasi saepe nemo ex maiores doloremque sapiente assumenda cumque quidem! Vero accusamus iste suscipit, quidem molestiae reiciendis?</p>
                        </div>
                    </div>
                </div>
                <Testimonials />
            </div>
            <Footer />
            
        </>
    );
}

export default Home;