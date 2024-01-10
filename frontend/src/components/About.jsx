import React from 'react';
import AIimg2 from "../assets/AI-img2.png"

const About = () => {
  return (
    <>
        <div className="py-16">
            <div className="flex m-auto px-6 flex-col md:justify-evenly lg:flex-row">
                <div className="flex lg:flex-row justify-center lg:justify-start">
                    <img src={AIimg2} alt="img" className='hidden lg:flex h-auto w-2/3 rounded-3xl md:w-1/2 lg:mr-80 lg:w-full lg:h-full items-center lg:items-start' />
                </div>
                <div className="lg:flex items-center lg:justify-center">
                    <div className="flex flex-col p-0 lg:m-8">
                        <h1 className="lg:text-4xl font-bold leading-tight mb-5 flex flex-row lg:flex-col text-3xl">ABOUT</h1>
                        <p className="lg:text-xl text-sm font-thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ducimus quas non incidunt, exercitationem, iusto in modi asperiores nemo numquam architecto. Veniam consequuntur est cumque incidunt? Dolore odit cumque laboriosam. </p>

                        <div className="flex justify-center items-center mt-3">
                            <a href="/" className="text-black rounded-full py-2 px-5 text-lg font-semibold bgGradient inline-block border border-darkGreen hover: mt-5">GET STARTED</a>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </>
  );
};

export default About;
