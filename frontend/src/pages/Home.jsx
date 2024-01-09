import img1 from "../assets/img1.png"
import arrow from "../assets/arrow.png"
import SingleFeature from "../components/SingleFeature";
const Home = () => {
    return (
        <div className="text-white max-w-[1300px] px-10 mx-auto w-screen">
            <div className="flex gap-4">
                <div className="mt-16 lg:w-[67%] lg:ml-10 lg:block flex flex-col items-center ">
                    <h1 className="text-xl min-[440px]:text-2xl min-[540px]:text-3xl sm:text-4xl font-medium">Supercharge Your Career with</h1>
                    <h1 className="textGradient mt-2 lg:mt-4 lg:ml-44 text-xl min-[440px]:text-2xl min-[540px]:text-3xl sm:text-4xl font-semibold">CVsavvy</h1>
                    <p className="mt-4 sm:mt-8 lg:max-w-[600px] text-xs sm:text-sm md:w-full">Our free <span className="font-semibold">AI-powered</span> resume checker scores your resume on key criteria recruiters and hiring managers look for. Get actionable steps to revamp your resume and <span className="font-semibold">land more interviews.</span></p>
                    <button className="bgGradient py-2 px-6 mt-6 lg:mt-8 lg:ml-40 text-sm rounded-3xl font-medium text-black">Check your Resume</button>
                </div>
                <div className="mt-7 mr-8 hidden lg:block">
                    <img src={img1} alt="hello" className="h-[350px] w-[400px]" />
                </div>
            </div>
            <div className="flex ml-10">
                <div>WHY USE CVSAVVY</div>
                <img src={arrow} alt="" />
                <div>From simple spelling mistakes to more hard-to-notice issues like passive language, there's a lot that could be wrong with your resume. The average job seeker might not notice these issues - but employers do. Our resume checker was designed by NALLE LOG and VELLE LOG to scan for all the details that hiring managers look for when reviewing a job applicant. Then it gives you immediate feedback on ways you can improve your resume.</div>
            </div>
            <SingleFeature />
        </div>
    );
}
 
export default Home;