import React from 'react'
import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
    
    <div class="w-full bg-darkBlack justify-center flex mt-6">
      <div class="container flex flex-col md:flex-row items-center justify-between px-5 text-gray-50">
              <div class="w-full lg:w-1/2 mx-8">
                  <div class="text-7xl text-green-500 font-dark font-extrabold mb-8"> 404</div>
              <p class="text-2xl md:text-3xl font-light leading-normal mb-8">
                  Sorry we couldn't find the page you're looking for
              </p>
              
              <Link to="/" class="px-5 inline py-3 text-sm font-medium leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent rounded-lg focus:outline-none bgGradient">back to homepage</Link>
      </div>
          <div class="w-full lg:flex lg:justify-end lg:w-1/2 mx-5 my-12">
          <img src="https://user-images.githubusercontent.com/43953425/166269493-acd08ccb-4df3-4474-95c7-ad1034d3c070.svg" class="" alt="Page not found" />
          </div>
      
      </div>
    </div>
  )
}

export default NotFound