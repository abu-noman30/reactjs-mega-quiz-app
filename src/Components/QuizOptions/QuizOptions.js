import React from 'react';
import SingleOption from '../SingleOption/SingleOption';

const QuizOptions = (props) => {
	const { totalQuiz } = props;
	const { countCurrect, setCountCurrect } = props;
	const { countWrong, setCountWrong } = props;
	// console.log(props.question);
	const { options, correctAnswer } = props.question;
	// console.log('correctAnswer:', correctAnswer);

	return (
		<>
			{options.map((option, index) => (
				<li className='w-full rounded-t-lg border-b border-gray-200' key={index}>
					<SingleOption
						key={index}
						option={option}
						correctAnswer={correctAnswer}
						countCurrect={countCurrect}
						setCountCurrect={setCountCurrect}
						countWrong={countWrong}
						setCountWrong={setCountWrong}
						totalQuiz={totalQuiz}
					/>
				</li>
			))}
		</>
	);
};

export default QuizOptions;
