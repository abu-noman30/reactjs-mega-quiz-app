import React from 'react';
import SingleOption from '../SingleOption/SingleOption';

const QuizOptions = (props) => {
	const { totalQuiz, question } = props;
	const { options, correctAnswer } = question;
	const { countCurrect, setCountCurrect } = props;
	// const { countWrong, setCountWrong } = props;

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
						// countWrong={countWrong}
						// setCountWrong={setCountWrong}
						totalQuiz={totalQuiz}
						options={options}
						question={question}
					/>
				</li>
			))}
		</>
	);
};

export default QuizOptions;
