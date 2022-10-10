import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizOptions from '../QuizOptions/QuizOptions';

const SingleQuiz = () => {
	const loaderData = useLoaderData();
	const quizData = loaderData.data.questions;
	// console.log(quizData);
	return (
		<>
			{quizData.map((question, index) => (
				<div className=''>
					<h3 class='mb-4 font-semibold text-gray-900 dark:text-white'>Identification</h3>
					<ul class='w-48 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white'>
						<QuizOptions key={index} question={question} />
					</ul>
				</div>
			))}
		</>
	);
};

export default SingleQuiz;
