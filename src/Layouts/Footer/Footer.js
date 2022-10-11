import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<>
			<footer className='flex justify-center px-4 text-gray-800 bg-orange-50 shadow-2xl shadow-black '>
				<div className='container py-6'>
					<h1 className='text-lg font-bold text-center lg:text-2xl'>
						Join 31,000+ other and never miss <br /> out on new tips, tutorials, and more.
					</h1>

					<div className='flex justify-center mt-6'>
						<div className='bg-white border rounded-md focus-within:ring focus-within:border-blue-400 focus-within:ring-blue-300 focus-within:ring-opacity-40'>
							<div className='flex flex-wrap justify-between md:flex-row'>
								<input
									type='email'
									className='p-2 m-1 text-sm text-gray-700 bg-transparent appearance-none focus:outline-none focus:placeholder-transparent'
									placeholder='Enter your email'
									aria-label='Enter your email'
								/>
								<button className='w-full px-3 py-2 m-1 text-sm font-medium tracking-wider text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded-md  lg:w-auto hover:bg-gray-700'>
									subscribe
								</button>
							</div>
						</div>
					</div>

					<hr className='h-px mt-6 bg-gray-200 border-none ' />

					<div className='flex flex-col items-center justify-between mt-6 md:flex-row'>
						<div>
							<Link to='/' className='text-xl font-bold text-gray-800 transition-colors duration-300  hover:text-gray-700 '>
								MegaQuiz
							</Link>
						</div>

						<div className='flex mt-4 md:m-0'>
							<div className='-mx-4'>
								<Link to='/' className='px-4 text-sm font-medium text-gray-600 transition-colors duration-300  hover:text-blue-500  hover:underline'>
									Home
								</Link>
								<Link to='/statistics' className='px-4 text-sm font-medium text-gray-600 transition-colors duration-300  hover:text-blue-500  hover:underline'>
									Statistics
								</Link>
								<Link to='/blog' className='px-4 text-sm font-medium text-gray-600 transition-colors duration-300 hover:text-blue-500  hover:underline'>
									Blog
								</Link>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
