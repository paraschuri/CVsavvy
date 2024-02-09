import React from 'react'

const Testimonials = () => {
  return (
    <section className="my-8 text-white ">
	<div className="container flex flex-col items-center mx-auto mb-2 md:p-2 md:px-12">
		<h1 className="p-4 text-4xl font-semibold text-center"> Testimonials from Our Valued Clients</h1>
	</div>
	<div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-center lg:px-10 ">
		<div className="flex flex-col max-w-80 mx-4 my-6 shadow-lg transform hover:scale-105 transition duration-500">
			<div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-4 bg-gradient-radial from-darkBlack to-black">
				<p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 text-lightGreen">
						<path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
						<path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
					</svg>"CVSavvy revolutionized our hiring process with resume ranker and scorer, we effortlessly identified top candidates, ensuring we found the perfect fit for our team every time."
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 text-lightGreen">
						<path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
						<path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
					</svg>
				</p>
			</div>
			<div className="flex flex-col items-center justify-center p-8 rounded-b-lg bgGradient text-black">
				<img src="https://source.unsplash.com/50x50/?portrait?1" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full" />
				<p className="text-xl font-semibold">Elom Nusk</p>
				<p className="text-sm uppercase">Pesla</p>
			</div>
		</div>
		<div className="flex flex-col max-w-80 mx-4 my-6 shadow-lg transform hover:scale-105 transition duration-500">
			<div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-4 bg-gradient-radial from-darkBlack to-black">
				<p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 text-lightGreen">
						<path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
						<path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
					</svg>"My resume edged into a powerful tool with CVSavvy. The detailed scores and comparisons helped me stand out, landing me interviews I never thought possible!"
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 text-lightGreen">
						<path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
						<path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
					</svg>
				</p>
			</div>
			<div className="flex flex-col items-center justify-center p-8 rounded-b-lg bgGradient text-black">
				<img src="https://source.unsplash.com/50x50/?portrait?1" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full" />
				<p className="text-xl font-semibold">Donald Tatya</p>
				<p className="text-sm uppercase">Amrica</p>
			</div>
		</div>
		<div className="flex flex-col max-w-80 mx-4 my-6 shadow-lg transform hover:scale-105 transition duration-500">
			<div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-4 bg-gradient-radial from-darkBlack to-black">
				<p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 text-lightGreen">
						<path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
						<path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
					</svg>"I highly recommend CVSavvy! Their tailored course recommendations gave my career a boost, and their personalized company suggestions led me to my dream job."
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 text-lightGreen">
						<path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
						<path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
					</svg>
				</p>
			</div>
			<div className="flex flex-col items-center justify-center p-8 rounded-b-lg bgGradient text-black">
				<img src="https://source.unsplash.com/50x50/?portrait?1" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full" />
				<p className="text-xl font-semibold">Baburao</p>
				<p className="text-sm uppercase">Laxmi chit fund</p>
			</div>
		</div>
	</div>
</section>
  )
}

export default Testimonials