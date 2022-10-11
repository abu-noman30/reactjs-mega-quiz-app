import React from 'react';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Topics from '../Topics/Topics';

const Header = (props) => {
	const { topicsData } = props;

	return (
		<>
			{/* Header Container */}
			<div className=' lg:relative flex flex-col py-20 lg:px-32 lg:pt-0 lg:flex-col lg:pb-0 bg-orange-50 lg:mt-8 mt-20 mb-8 shadow-sm'>
				<div className='flex flex-col items-center lg:items-start justify-center w-full px-4 md:px-16 lg:px-8 lg:max-w-screen-x'>
					<div className='mb-16 lg:my-40 lg:max-w-lg lg:pr-5'>
						<div className='max-w-xl mb-6'>
							<h2 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl sm:leading-none'>
								Easy and intuitive onlint testing.
							</h2>
							<p className='text-base text-gray-700 md:text-lg'>
								MegaQuiz is a cloud-testing platform that supports online creation and delivery of feature-rich tests.
							</p>
						</div>
						<div className='flex flex-col items-center md:flex-row'>
							<Link
								to='/'
								className='inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-black transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-amber-500 hover:bg-amber-400 hover:text-white focus:shadow-outline focus:outline-none'
							>
								Apply Now
							</Link>
							<Link
								to='/'
								aria-label=''
								className='inline-flex items-center font-semibold text-gray-800  bg-white justify-center w-full h-12 px-6 mb-3 tracking-wide rounded shadow-md md:w-auto md:mr-4 md:mb-0 focus:shadow-outline focus:outline-none'
							>
								Learn more
							</Link>
						</div>
					</div>
				</div>
				<div className='inset-y-0 right-0 w-full px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0 bg-orange-50'>
					<img className='object-fill w-full rounded shadow-lg lg:rounded-none lg:shadow-none lg:h-full ' src='Images/banner.png ' alt='' />
				</div>
			</div>

			{/* Topics Container */}
			<div id='topics-container'>
				<Topics topicsData={topicsData} />
			</div>
		</>
	);
};

export default Header;
