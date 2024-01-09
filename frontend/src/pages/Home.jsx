import { FaArrowRightLong } from "react-icons/fa6";
import hero_img from "../assets/hero_img.png"
import img1 from "../assets/img1.png"
import img2 from "../assets/img2x.png"
const Home = () => {
    return (
        <div className="text-white max-w-[1300px] mx-auto px-1 md:px-10 w-screen">
            <div className="flex">
                <div className="w-1/2 mt-16 ml-10">
                    <h1 className="text-4xl font-medium">Supercharge Your Career with</h1>
                    <h1 className="textGradient mt-4 text-4xl ml-44 font-semibold">CVsavvy</h1>
                    <p className="mt-8 text-sm w-[90%]">Our free <span className="font-semibold">AI-powered</span> resume checker scores your resume on key criteria recruiters and hiring managers look for. Get actionable steps to revamp your resume and <span className="font-semibold">land more interviews.</span></p>
                    <button className="bgGradient py-2 mt-8 px-6 ml-40 text-sm rounded-3xl font-medium text-black">Check your Resume</button>

                </div>
                <div className="ml-32 mt-6">
                    <img src={img1} alt="hello" className="h-[350px]" />
                </div>
            </div>
        </div>
    );
}
 
export default Home;