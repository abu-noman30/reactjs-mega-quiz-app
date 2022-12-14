import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingleOption = (props) => {
	const { totalQuiz, options, question } = props;
	const { option, correctAnswer } = props;
	const { countCurrect, setCountCurrect } = props;
	// const { countWrong, setCountWrong } = props;
	console.log(options);
	console.log(question);

	const notify = (text) => toast(`${text}`);

	const handlerOnClick = (option) => {
		if (option === correctAnswer) {
			if (countCurrect < totalQuiz) {
				notify('Correct Answer! 😎😎');
				setCountCurrect(countCurrect + 1);
			}
		} else {
			notify('Incorrect Answer! 😞😞');
		}
	};

	return (
		<>
			<div className='flex items-center pl-3 hover:bg-orange-50'>
				<label className='cursor-pointer py-3 ml-2 w-full text-sm font-medium text-gray-900'>
					<input
						type='radio'
						name='radio-6'
						className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2'
						onChange={() => {
							handlerOnClick(option);
						}}
					/>
					<span className='ml-2'>{option}</span>
				</label>
			</div>
		</>
	);
};

export default SingleOption;
