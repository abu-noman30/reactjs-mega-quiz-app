import React from 'react';
import * as FAIcon from 'react-icons/fa';

const SingleTopic = (props) => {
	const { logo, name, total } = props.topic;

	return (
		<>
			<div className='card w-full bg-base-100 shadow-xl border-2'>
				<figure>
					<img src={logo} alt='Shoes' />
				</figure>
				<div className='card-body'>
					<h2 className='card-title'>Topic: {name}</h2>
					<p className='text-zinc-400'>Total Question: {total}</p>
					<div className='card-actions justify-end mt-4'>
						<button className='btn bg-orange-400 hover:bg-orange-200 border-0 text-black w-11/12 mx-auto '>
							Start Practice
							<span className='ml-2'>
								<FAIcon.FaArrowRight />
							</span>
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default SingleTopic;
