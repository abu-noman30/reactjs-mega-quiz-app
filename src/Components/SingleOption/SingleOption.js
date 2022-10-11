import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingleOption = (props) => {
	const { totalQuiz } = props;
	const { option, correctAnswer } = props;
	const { countCurrect, setCountCurrect } = props;
	const { countWrong, setCountWrong } = props;

	// console.log('option:', option);
	// console.log('correctAnswer:', correctAnswer);

	const notify = (option) =>
		toast(`${option}`, {
			position: 'top-center'
		});

	const handlerOnClick = () => {
		if (option === correctAnswer) {
			if (countCurrect < totalQuiz) {
				setCountCurrect(countCurrect + 1);
				notify('Correct Answer! 🎉🎉');
			}
		} else {
			if (countWrong < totalQuiz) {
				setCountWrong(countWrong + 1);
				notify('Incorrect Answer! 😞😞');
			}
		}
	};
	return (
		<>
			<div className='flex items-center pl-3'>
				<ToastContainer />
				<input
					id='list-radio-license'
					type='radio'
					value=''
					name='list-radio'
					className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
					onClick={() => {
						handlerOnClick(option);
					}}
				/>
				<label htmlFor='list-radio-license' className='py-3 ml-2 w-full text-sm font-medium text-gray-900'>
					{option}
				</label>
			</div>
		</>
	);
};

export default SingleOption;
