import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizOptions from '../../Components/QuizOptions/QuizOptions';

const AllQuizes = () => {
	const loaderData = useLoaderData();
	const quizData = loaderData.data.questions;
	console.log(quizData);

	return (
		<>
			<div className=' grid grid-cols-4 gap-4 w-11/12 mx-auto my-12'>
				<div className='col-span-4 lg:col-span-3 shadow-lg rounded-lg'>
					{quizData.map((question, index) => (
						<div className='mb-8 w-11/12 mx-auto' key={index}>
							<h3 className='mb-4 font-semibold text-gray-900 '>{question.question}</h3>
							<ul className='w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 '>
								<QuizOptions key={index} question={question} />
							</ul>
						</div>
					))}
				</div>
				<div className='col-span-4 lg:col-span-1 '>
					<div className='w-full lg:w-80 lg:my-0 lg:mr-6 h-screen py-8 bg-orange-50 border-r lg:fixed right-0 top-20 shadow-lg rounded-lg'>
						<h2 className='text-3xl font-semibold text-center'>MegaQuiz</h2>
						<div class='flex flex-col items-center mt-6 -mx-2'>
							<img
								class='object-cover w-24 h-24 mx-2 rounded-full'
								src='https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
								alt='avatar'
							/>
							<h4 class='mx-2 mt-2 font-medium text-gray-800  hover:underline'>John Doe</h4>
							<p class='mx-2 mt-1 text-sm font-medium text-gray-600  hover:underline'>john@example.com</p>
						</div>

						<div class='flex flex-col justify-between flex-1 mt-6 w-10/12 mx-auto'>
							<h4 class='mx-2 my-4 font-medium text-gray-800 hover:underline'>Total Quizes: {loaderData.data.total}</h4>
							<hr />
							<h4 class='mx-2 mt-2 font-medium text-gray-800 hover:underline'>Correct Answer:</h4>
							<h4 class='mx-2 mt-2 font-medium text-gray-800  hover:underline'>Wrong Answer:</h4>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AllQuizes;
