import React from 'react';
import * as FAIcon from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SingleTopic = (props) => {
	const { id, logo, name, total } = props.topic;

	return (
		<>
			<Link to={`/topic/quiz/${id}`}>
				<div className='border-2xl rounded-xl w-full bg-base-100 shadow-xl border-2 p-2'>
					<figure>
						<img src={logo} alt='Shoes' className='bg-gray-200' />
					</figure>
					<div className='mt-3 px-4 flex flex-col items-start justify-center'>
						<h2 className='card-title'>Topic: {name}</h2>
						<p className='text-zinc-400'>Total Question: {total}</p>
						<div className='mt-2 w-full'>
							<button
								type='button'
								className='btn py-1 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '
							>
								Start Practice
								<span className='ml-2'>
									<FAIcon.FaArrowRight />
								</span>
							</button>
						</div>
					</div>
				</div>
			</Link>
		</>
	);
};

export default SingleTopic;
