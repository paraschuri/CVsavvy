import hero_img from "../assets/hero_img.png"
import arrow from "../assets/arrow.png"
import feature1 from "../assets/feature1.png"
import feature2 from "../assets/feature2x.png"
import feature3 from "../assets/feature3.jpg"
import feature4 from "../assets/feature4.png"
import developer from "../assets/developer.png"
import SingleFeature from "../components/SingleFeature";
import About from "../components/About";

const Home = () => {
    const features=[
        {
            "name": "RESUME ANAYLSIS",
            "img" : feature1,
            "info": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut voluptas beatae doloremque cumque laborum ab aperiam, reprehenderit saepe dolore nihil repellat, fuga dolores, quos impedit nam tempora unde quasi.",
        },
        {
            "name": "DATA VISUALIZATION",
            "img" : feature2,
            "info": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut voluptas beatae doloremque cumque laborum ab aperiam, reprehenderit saepe dolore nihil repellat, fuga dolores, quos impedit nam tempora unde quasi.",
        },
        {
            "name": "RESUME RANKING",
            "img" : feature3,
            "info": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut voluptas beatae doloremque cumque laborum ab aperiam, reprehenderit saepe dolore nihil repellat, fuga dolores, quos impedit nam tempora unde quasi.",
        },
        {
            "name": "COMPANY SUGGESTION",
            "img": feature4,
            "info": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut voluptas beatae doloremque cumque laborum ab aperiam, reprehenderit saepe dolore nihil repellat, fuga dolores, quos impedit nam tempora unde quasi.",
        },
    ];
    return (
        <div className="text-white max-w-[1300px] px-10 mx-auto w-screen">
            <div className="flex gap-4">
                <div className="mt-16 lg:w-[67%] lg:ml-10 lg:block flex flex-col items-center ">
                    <h1 className="text-xl min-[440px]:text-2xl min-[540px]:text-3xl sm:text-4xl font-medium lg:ml-0">Supercharge Your Career with 
                        <span className="textGradient mt-2 pr-8 text-xl min-[440px]:text-2xl min-[540px]:text-3xl sm:text-4xl font-semibold "> CVsavvy</span>
                    </h1>
                    <p className="mt-6 sm:mt-8 lg:max-w-[600px] text-xs sm:text-sm md:w-full lg:ml-0">Our free <span className="font-semibold">AI-powered</span> resume checker scores your resume on key criteria recruiters and hiring managers look for. Get actionable steps to revamp your resume and <span className="font-semibold">land more interviews.</span></p>
                    <button className="bgGradient py-2 px-6 mt-8 lg:mt-8 lg:ml-40 text-sm rounded-3xl font-semibold text-black">Check your Resume</button>
                </div>
                <div className="mt-7 mr-8 hidden lg:block">
                    <img src={hero_img} alt="hello" className="h-[350px] w-[400px]" />
                </div>
            </div>
            <div className="flex lg:ml-10 lg:my-8 mb-6 lg:flex-row mt-8 flex-col items-start ml-6">
                <div className="lg:mr-2 text-2xl font-extrabold mb-4 flex flex-row items-center lg:flex lg:flex-row">WHY USE CVSAVVY?
                    <img src={arrow} alt="" className="px-4 lg:object-scale-down h-20 w-48 m-0 hidden md:block lg:block"/>  
                    <div className="lg:text-sm text-xs font-light lg:flex lg:flex-col hidden">From simple spelling mistakes to more hard-to-notice issues like passive language, there's a lot that could be wrong with your resume. <br /> The average job seeker might not notice these issues - <span className="font-bold">but employers do.</span> <br /> Our resume checker was designed by NALLE LOG and VELLE LOG to scan for all the details that hiring managers look for when reviewing a job applicant. Then it gives you immediate feedback on ways you can improve your resume.</div>
                </div>
                <div className="text-xs font-light lg:hidden">From simple spelling mistakes to more hard-to-notice issues like passive language, there's a lot that could be wrong with your resume. <br /> The average job seeker might not notice these issues - <span className="font-bold">but employers do.</span> <br /> Our resume checker was designed by NALLE LOG and VELLE LOG to scan for all the details that hiring managers look for when reviewing a job applicant. Then it gives you immediate feedback on ways you can improve your resume.</div>
            </div>
            <div className="flex flex-wrap justify-evenly lg:mx-8">
                {
                    features.map(feature=>(
                        <SingleFeature key={feature.name} name={feature.name} info={feature.info} img={feature.img} />
                    ))
                }
            </div>
            <div className="flex ml-6 lg:ml-10 lg:my-8 mb-6 lg:flex-row mt-6 flex-col items-start">
                <div className="lg:mr-2 text-2xl font-extrabold mb-4 flex flex-row items-center lg:flex lg:flex-row">INTRODUCTION
                    <img src={arrow} alt="" className="px-4 lg:object-scale-down h-20 w-48 m-0 hidden lg:block"/>  
                    <div className="lg:text-sm text-xs font-light lg:flex lg:flex-col hidden">From simple spelling mistakes to more hard-to-notice issues like passive language, there's a lot that could be wrong with your resume. <br /> The average job seeker might not notice these issues - <span className="font-bold">but employers do.</span> <br /> Our resume checker was designed by NALLE LOG and VELLE LOG to scan for all the details that hiring managers look for when reviewing a job applicant. Then it gives you immediate feedback on ways you can improve your resume.</div>
                </div>
                <div className="text-xs font-light lg:hidden">From simple spelling mistakes to more hard-to-notice issues like passive language, there's a lot that could be wrong with your resume. <br /> The average job seeker might not notice these issues - <span className="font-bold">but employers do.</span> <br /> Our resume checker was designed by NALLE LOG and VELLE LOG to scan for all the details that hiring managers look for when reviewing a job applicant. Then it gives you immediate feedback on ways you can improve your resume.</div>
            </div>
            <About />
            <div className="flex">
                <img src={developer} alt="" className="ml-2"/>
                <p className="mt-4 -ml-10 font-semibold text-2xl">For <span className="text-[#22A75D]">Developers</span></p>

            </div>
        </div>
    );
}

export default Home;