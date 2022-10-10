import React from 'react';
import SingleOption from '../SingleOption/SingleOption';

const QuizOptions = (props) => {
	console.log(props.question);
	const { options } = props.question;

	return (
		<>
			{options.map((option, index) => (
				<li class='w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600'>
					<SingleOption key={index} option={option} />
				</li>
			))}
		</>
	);
};

export default QuizOptions;
