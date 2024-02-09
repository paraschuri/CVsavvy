import React from 'react';
import AIimg2 from "../assets/AI-img2.png"
import { Link } from 'react-router-dom';
const About = ({user}) => {
  return (
    <>
        <div className="py-16">
            <div className="flex lg:px-6 flex-col md:justify-evenly lg:flex-row">
                <div className="flex lg:flex-row justify-center lg:justify-start">
                    <img src={AIimg2} alt="img" className='hidden lg:flex h-auto w-2/3 rounded-3xl md:w-1/2 lg:mr-80 lg:w-full lg:h-full items-center lg:items-start' />
                </div>
                <div className="lg:flex items-center lg:justify-center">
                    <div className="flex flex-col p-0 lg:m-8">
                        <h1 className="lg:text-4xl font-bold leading-tight mb-5 flex flex-row lg:flex-col text-3xl">ABOUT</h1>
                        <p className="lg:text-xl text-sm font-thin">Our platform curates personalized job recommendations tailored to your unique skill set and preferences, making job hunting a breeze. Identify areas for growth with our insightful feedback and bridge skill gaps with customized course suggestions.</p>

                        <div className="flex justify-center items-center mt-3 transform hover:scale-105 transition duration-500">
                            {!user?<Link to="/start" className="bgGradient py-2 px-6 mt-6 lg:mt-8 text-sm rounded-3xl font-semibold text-black">Get Started</Link>:
                            user.user?<Link to="/user" className="bgGradient py-2 px-6 mt-6 lg:mt-8 text-sm rounded-3xl font-semibold text-black">Check your Resume</Link>:
                            <Link to="/recruiter" className="bgGradient py-2 px-6 mt-6 lg:mt-8 text-sm rounded-3xl font-semibold text-black">Rank the resume</Link>
                            }
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </>
  );
};

export default About;
