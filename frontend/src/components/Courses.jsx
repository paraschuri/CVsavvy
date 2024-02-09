import React from 'react'
import {Button} from "@material-tailwind/react";
import AI_img from "../assets/AI-img2.png"


function Courses({courses}) {
  return (
    <>
        <div className='text-white text-3xl font-bold mt-16 ml-4'>
            Here are some course recomendations based on your skills:
        </div>
        <div>{
                courses.map(({domain,course}) => (
                    <div>
                        <div className='text-white text-2xl font-bold w-[50%] ml-4 mt-6 '>{domain}</div>
                        <div className="mb-10 mt-5 flex justify-center items-center">
                            <div class="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-10 space-y-4 md:space-y-0 ">
                            {
                                course.map(({title, link, headline, price, image,skill}) => (
                                        <div class="max-w-sm bg-black px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
                                        <h3 class="mb-3 text-xl font-bold textGradient">{skill}</h3>
                                        <div class="relative">
                                            <img class=" rounded-xl w-[480px] h-[187px] object-scale-down" src={`${image}`} alt="Colors" />
                                            <p class="absolute top-1 bgGradient text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">{price}</p>
                                        </div>
                                        <h1 class="mt-4 text-white text-2xl font-bold cursor-pointer h-24">{title}</h1>
                                        <div class="mt-4 h-28 text-white">
                                            {headline}
                                        </div>
                                        <a href={link} target='_blank' className='relative'>
                                            <Button  className="bgGradient w-full px-6 py-3 mb-6 mt-2 text-sm font-semibold tracking-wide text-black capitalize transition-colors duration-300 transform rounded-lg hover:bg-darkGreen focus:outline-none focus:ring focus:ring-darkGreen focus:ring-opacity-50">
                                            Start Course
                                            </Button>
                                        </a>
                                        </div>
                                ))
                            }
                            </div>
                        </div>
                    </div>
                )) 
            }
        </div>
    </>
  )
}

export default Courses