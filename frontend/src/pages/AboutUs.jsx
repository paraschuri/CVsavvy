import React from 'react';
import boy_img from "../assets/boy.png"
import Footer from '../components/Footer';

const AboutUs = () => {
  return (
    <>
        <div>
            <div className='flex flex-col justify-center min-[1160px]:mt-10 items-start text-white mx-auto md:px-14 md:pr-16 px-4 w-5/6 gap-4'>
                <div className='text-4xl min-[1160px]:text-5xl font-semibold textGradient mt-6'>Who We Are?</div>
                <div className=' text-sm md:text-base mt-2 min-[1160px]:text-min-[1160px]'>Our mission is simple: to transform your career aspirations into tangible opportunities. Whether you're a recent graduate stepping into the workforce or a seasoned professional seeking advancement, we're here to elevate your resume to new heights. We believe that every career journey deserves a compelling narrative, and we're committed to helping you articulate yours effectively.</div>
                {/* <div className='text-sm min-[1160px]:text-min-[1160px]'>With a blend of creativity, industry insights, and meticulous attention to detail, we tailor each resume to reflect your unique strengths and aspirations. Our collaborative approach ensures that your resume not only showcases your skills and experiences but also resonates with potential employers on a deeper level.</div> */}
                <div className=' text-sm md:text-base mt-2 min-[1160px]:text-min-[1160px]'>At CVSavvy, we're not just in the business of crafting resumes; we're in the business of shaping careers. Join us on this journey, and let's unlock the potential of your professional trajectory together.</div>
            </div>
            <div className='w-full flex justify-center min-[1160px]:mt-10 mb-10'>
                <div className='w-full sm:w-5/6 flex flex-col justify-center text-white px-8 sm:px-16 md:px-24 items-center mt-10 gap-6 '>
                    <div classname='text-white'><span className='text-2xl min-[1160px]:text-4xl font-medium'>Meet Our Team</span></div>
                    <div className='flex flex-col gap-6 min-[1160px]:flex-row justify-center items-center text-white w-full'>
                        <div className='flex gap-6 justify-center items-center w-full'>
                            <div className='w-1/2 h-60 min-[1160px]:h-80 bg-black border-2 rounded-xl border-black flex flex-col justify-center items-center hover:transition-transform hover:scale-105 duration-500'>
                                <img src={boy_img} alt="" className='h-3/4 object-scale-down' />
                                <div className='text-sm md:text-base min-[1160px]:text-xl'>Paras Churi</div>
                            </div>
                            <div className='w-1/2 h-60 min-[1160px]:h-80 bg-black border-2 rounded-xl border-black flex flex-col justify-center items-center hover:transition-transform hover:scale-105 duration-500'>
                                <img src={boy_img} alt="" className='h-3/4 object-scale-down' />
                                <div className='text-sm md:text-base min-[1160px]:text-xl'>Arnav Phad</div>
                            </div>
                        </div>
                        <div className='flex gap-6 justify-center items-center w-full'>
                            <div className='w-1/2 h-60 min-[1160px]:h-80 bg-black border-2 rounded-xl border-black flex flex-col justify-center items-center hover:transition-transform hover:scale-105 duration-500'>
                                <img src={boy_img} alt="" className='h-3/4 object-scale-down' />
                                <div className='text-sm md:text-base min-[1160px]:text-xl'>Puru Zingare</div>
                            </div>
                            <div className='w-1/2 h-60 min-[1160px]:h-80 bg-black border-2 rounded-xl border-black flex flex-col justify-center items-center hover:transition-transform hover:scale-105 duration-500'>
                                <img src={boy_img} alt="" className='h-3/4 object-scale-down' />
                                <div className='text-sm md:text-base min-[1160px]:text-xl'>Tanmay Sharma</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>
  );
};

export default AboutUs;
