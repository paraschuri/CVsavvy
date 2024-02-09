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
import { useAuthContext } from '../hooks/useAuthContext'
import { Link } from "react-router-dom";

const Home = () => {
    const {user} = useAuthContext()
    return (
        <>
            {/* <GetStarted /> */}
            <div className="text-white mx-auto md:px-14 md:pr-16 px-4 w-screen">
                <div className="flex flex-col lg:flex-row gap-4">
                    <div className="mt-7 flex justify-center lg:hidden ">
                        <img src={hero_img} alt="hello" className="h-[300px] w-[350px] " />
                    </div>
                    <div className="lg:mt-16 lg:w-[67%] lg:ml-10 lg:block flex flex-col items-center ">
                        <h1 className="text-xl min-[440px]:text-2xl min-[540px]:text-3xl sm:text-4xl font-medium lg:ml-0">Supercharge Your Career with 
                            <span className="textGradient mt-2 pr-8 text-xl min-[440px]:text-2xl min-[540px]:text-3xl sm:text-4xl font-semibold "> CVsavvy</span>
                        </h1>
                        <p className="mt-4 sm:mt-8 lg:max-w-[600px] text-xs sm:text-sm md:w-full lg:ml-0">Our free <span className="font-semibold">AI-powered</span> resume checker scores your resume on key criteria recruiters and hiring managers look for. Get actionable steps to revamp your resume and <span className="font-semibold">land more interviews.</span></p>
                        <div className="lg: mt-10">
                            {!user?<Link to="/start" className="bgGradient py-2 px-6 mt-6 lg:mt-8 lg:ml-40 text-sm rounded-3xl font-semibold text-black">Get Started</Link>:
                            user.user?<Link to="/user" className="bgGradient py-2 px-6 mt-6 lg:mt-8 lg:ml-40 text-sm rounded-3xl font-semibold text-black">Check your Resume</Link>:
                            <Link to="/recruiter" className="bgGradient py-2 px-6 mt-6 lg:mt-8 lg:ml-40 text-sm rounded-3xl font-semibold text-black">Rank the resume</Link>
                            }
                        </div>
                        
                    </div>
                    <div className="mt-7 hidden lg:block">
                        <img src={hero_img} alt="hello" className="h-[350px] w-[400px]" />
                    </div>
                </div>
                <div className="flex lg:ml-10 lg:my-8 mb-6 lg:flex-row mt-8 flex-col items-start">
                    <div className="lg:mr-2 text-2xl font-extrabold mb-4 flex flex-row items-center lg:flex lg:flex-row">WHY USE CVSAVVY
                        <img src={arrow} alt="" className="px-4 lg:object-scale-down h-20 w-48 m-0 hidden md:block lg:block"/>  
                        <div className="lg:text-sm text-xs font-light lg:flex lg:flex-col hidden">Discover the efficiency of CVsavvy, your go-to resource for resume enhancement and job search success. Our fast and free AI resume checker ensures your resume is primed for performance, providing actionable steps to boost your chances of securing interviews. <br /><br /> Optimize your resume for any job with fruitful insights, highlighting key experience and skills that recruiters value most. Instantly review your resume and compare it against others in our database. Elevate your resume with CVsavvy and <span className="font-bold">unlock new opportunities today!</span></div>
                    </div>
                    <div className="text-xs font-light lg:hidden">Discover the efficiency of CVsavvy, your go-to resource for resume enhancement and job search success. Our fast and free AI resume checker ensures your resume is primed for performance, providing actionable steps to boost your chances of securing interviews. <br /><span />Optimize your resume for any job with fruitful insights, highlighting key experience and skills that recruiters value most. Instantly review your resume and compare it against others in our database. Elevate your resume with CVsavvy and <span className="font-bold">unlock new opportunities today!</span></div>
                </div>
             
                <div className="relative items-center w-full px-5 py-12 mx-auto md:px-0 lg:px-0 max-w-7xl">
                    <div class="grid w-full grid-cols-1 gap-6 mx-auto md:grid-cols-2 min-[1300px]:grid-cols-4">
                    {
                        features.map(feature=>(
                            <SingleFeature key={feature.name} name={feature.name} img={feature.img} info={feature.info} />
                        ))
                    }
                    </div>
                </div>

                <div className="flex lg:ml-10 lg:my-8 mb-6 lg:flex-row mt-6 flex-col items-start">
                    <div className="lg:mr-2 text-2xl font-extrabold mb-4 flex flex-row items-center lg:flex lg:flex-row">INTRODUCTION 
                        <img src={arrow} alt="" className="px-4 lg:object-scale-down h-20 w-48 m-0 hidden md:block lg:block"/>  
                        <div className="lg:text-sm text-xs font-light lg:flex lg:flex-col hidden">From simple spelling mistakes to more hard-to-notice issues like passive language, there's a lot that could be wrong with your resume. <br /> The average job seeker might not notice these issues - <span className="font-bold">but employers do.</span> <br /> We enhance resumes with scores, comparisons, and course recommendations, while also suggesting ideal companies for application. Let us guide you towards your next great opportunity.</div>
                    </div>
                    <div className="text-xs font-light lg:hidden">From simple spelling mistakes to more hard-to-notice issues like passive language, there's a lot that could be wrong with your resume. <br /> The average job seeker might not notice these issues - <span className="font-bold">but employers do.</span> <br /> We enhance resumes with scores, comparisons, and course recommendations, while also suggesting ideal companies for application. Let us guide you towards your next great opportunity.</div>
                </div>
                <About user={user} className='w-full'/>
                <div className="flex flex-col lg:flex-row lg:gap-10">
                    <div className="my-4 mb-10 flex gap-4 lg:justify-end bg-gradient-radial transform hover:scale-105 transition duration-500">
                        <img src={developer} alt="" />
                        <div className="flex flex-col gap-4 lg:w-1/2">
                            <div className="flex gap-2">
                                <FaCircleChevronRight className="text-[#22A75D] mt-4"/>
                                <p className="font-semibold text-xl mt-[0.6rem]">For <span className="text-[#22A75D] underline">Users</span></p>
                            </div>
                            <p className="text-sm lg:w-3/4 lg:pl-4">"We enhance resumes with scores, comparisons, and course recommendations, ensuring you're fully equipped for success. Additionally, our personalized company suggestions help you target ideal employers. Let CVSavvy be your compass to a brighter future."</p>
                        </div>
                    </div>
                    <div className="mb-10 lg:mt-0 flex gap-4 transform hover:scale-105 transition duration-500">
                        <img src={company} alt="" className=""/>
                        <div className="flex flex-col lg:w-1/2 mt-3 lg:mt-0 p-4">
                            <div className="flex gap-2">
                                <FaCircleChevronRight className="text-[#2278D4] mt-4"/>
                                <p className="font-semibold text-xl mt-[0.6rem]">For <span className="text-[#2278D4] underline">Companies</span></p>
                            </div>
                            <p className="text-sm lg:w-3/4 lg:pl-4">"Streamline your recruitment process with our innovative resume ranker and scorer, simplifying candidate evaluation and providing tailored recommendations. Make confident hiring decisions with CVSavvy at your side." </p>
                        </div>
                    </div>
                </div>
                <Testimonials />
            </div>
            
        </>
    );
}

export default Home;