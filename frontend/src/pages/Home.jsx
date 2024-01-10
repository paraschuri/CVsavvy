import img1 from "../assets/img1.png"
import arrow from "../assets/arrow.png"
import SingleFeature from "../components/SingleFeature";
import About from "../components/About";

const Home = () => {
    return (
        <>
            <div className="text-white max-w-[1300px] px-10 mx-auto w-screen">
                <div className="flex gap-4">
                    <div className="mt-16 lg:w-[67%] lg:ml-10 lg:block flex flex-col items-center ">
                        <h1 className="text-xl min-[440px]:text-2xl min-[540px]:text-3xl sm:text-4xl font-medium ml-2 lg:ml-0">Supercharge Your Career with 
                            <span className="textGradient mt-2 pr-8 text-xl min-[440px]:text-2xl min-[540px]:text-3xl sm:text-4xl font-semibold "> CVsavvy</span>
                        </h1>
                    
                        <p className="mt-4 sm:mt-8 lg:max-w-[600px] text-xs sm:text-sm md:w-full ml-2 lg:ml-0">Our free <span className="font-semibold">AI-powered</span> resume checker scores your resume on key criteria recruiters and hiring managers look for. Get actionable steps to revamp your resume and <span className="font-semibold">land more interviews.</span></p>
                        <button className="bgGradient py-2 px-6 mt-6 lg:mt-8 lg:ml-40 text-sm rounded-3xl font-semibold text-black">Check your Resume</button>
                    </div>
                    <div className="mt-7 mr-8 hidden lg:block">
                        <img src={img1} alt="hello" className="h-[350px] w-[400px]" />
                    </div>
                </div>
                <div className="flex lg:ml-10 lg:my-8 mb-6 lg:flex-row mt-6 flex-col items-start ml-2">
                    <div className="lg:mr-2 text-2xl font-extrabold mb-4 flex flex-row items-center lg:flex lg:flex-row">WHY USE CVSAVVY
                        <img src={arrow} alt="" className="px-4 lg:object-scale-down h-20 w-48 m-0 hidden md:block lg:block"/>  
                        <div className="lg:text-sm text-xs font-light lg:flex lg:flex-col hidden">From simple spelling mistakes to more hard-to-notice issues like passive language, there's a lot that could be wrong with your resume. <br /> The average job seeker might not notice these issues - <span className="font-bold">but employers do.</span> <br /> Our resume checker was designed by NALLE LOG and VELLE LOG to scan for all the details that hiring managers look for when reviewing a job applicant. Then it gives you immediate feedback on ways you can improve your resume.</div>
                    </div>
                    <div className="text-xs font-light lg:hidden">From simple spelling mistakes to more hard-to-notice issues like passive language, there's a lot that could be wrong with your resume. <br /> The average job seeker might not notice these issues - <span className="font-bold">but employers do.</span> <br /> Our resume checker was designed by NALLE LOG and VELLE LOG to scan for all the details that hiring managers look for when reviewing a job applicant. Then it gives you immediate feedback on ways you can improve your resume.</div>
                </div>
                <div className="flex flex-wrap justify-evenly lg:mx-8">
                    <SingleFeature />
                    <SingleFeature />
                    <SingleFeature />
                    <SingleFeature />
                </div>
                <div className="flex lg:ml-10 lg:my-8 mb-6 lg:flex-row mt-6 flex-col items-start">
                    <div className="lg:mr-2 text-2xl font-extrabold mb-4 flex flex-row items-center lg:flex lg:flex-row">INTRODUCTION 
                        <span className="textGradient pl-2"> CVsavvy</span>
                        <img src={arrow} alt="" className="px-4 lg:object-scale-down h-20 w-48 m-0 hidden md:block lg:block"/>  
                        <div className="lg:text-sm text-xs font-light lg:flex lg:flex-col hidden">From simple spelling mistakes to more hard-to-notice issues like passive language, there's a lot that could be wrong with your resume. <br /> The average job seeker might not notice these issues - <span className="font-bold">but employers do.</span> <br /> Our resume checker was designed by NALLE LOG and VELLE LOG to scan for all the details that hiring managers look for when reviewing a job applicant. Then it gives you immediate feedback on ways you can improve your resume.</div>
                    </div>
                    <div className="text-xs font-light lg:hidden">From simple spelling mistakes to more hard-to-notice issues like passive language, there's a lot that could be wrong with your resume. <br /> The average job seeker might not notice these issues - <span className="font-bold">but employers do.</span> <br /> Our resume checker was designed by NALLE LOG and VELLE LOG to scan for all the details that hiring managers look for when reviewing a job applicant. Then it gives you immediate feedback on ways you can improve your resume.</div>
                </div>
                <About />
            </div>
        </>
    );
}

export default Home;