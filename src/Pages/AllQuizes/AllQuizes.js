import React, { useState } from 'react';
import * as FAIcon from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import QuizOptions from '../../Components/QuizOptions/QuizOptions';

const AllQuizes = () => {
	const loaderData = useLoaderData();
	const quizTopic = loaderData.data.name;
	const quizData = loaderData.data.questions;
	const totalQuiz = loaderData.data.total;
	const [modalData, setModalData] = useState('');
	const [countCurrect, setCountCurrect] = useState(0);
	const [countWrong, setCountWrong] = useState(0);
	// console.log(quizData);

	const handlerOnOpenModal = (correctAnswer) => {
		setModalData(correctAnswer);
	};
	const handlerOnCloseModal = () => {
		setModalData(null);
	};

	return (
		<>
			<div className=''>
				<ToastContainer position='top-center' />

				<div className=' grid grid-cols-4 gap-4 w-11/12 mx-auto mt-12 pb-9'>
					<div className='col-span-4 lg:col-span-3 shadow-lg rounded-lg'>
						{/* Quizes Container */}
						<h1 className='mb-12 text-2xl font-bold text-gray-900 md:text-3xl lg:text-4xl text-center underline underline-offset-8'>
							Quiz of
							<span className='text-transparent bg-clip-text bg-gradient-to-l to-gray-700 from-gray-500 ml-2'>{quizTopic}</span>
						</h1>
						{quizData.map((question, index) => (
							<div className='mb-8 w-11/12 mx-auto' key={index}>
								<div className='flex items-center justify-between'>
									<h3 className='mb-4 font-semibold text-gray-900 '>
										<span className='font-bold mr-2'>Quiestion {index + 1}:</span>
										{question.question}
									</h3>
									{/* Modal Button */}
									<button className='text-xl' onClick={() => handlerOnOpenModal(question.correctAnswer)}>
										<label htmlFor='my-modal-3' className='modal-button'>
											<FAIcon.FaEye />
										</label>
									</button>
									{/* Model Body */}

									<input type='checkbox' id='my-modal-3' className='modal-toggle' />
									<div className='modal'>
										<div className='modal-box relative'>
											<label htmlFor='my-modal-3' className='btn btn-sm btn-circle absolute right-2 top-2' onClick={() => handlerOnCloseModal()}>
												✕
											</label>
											<div className='border-2 rounded-lg p-2'>
												<h3 className='text-lg font-bold'>Correct Answer is:</h3>
												<p className='py-4'>{modalData}</p>
											</div>
										</div>
									</div>
								</div>
								{/* ----------------------------- */}
								{/* Quizes */}
								<ul className='w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 '>
									<QuizOptions
										key={index}
										question={question}
										countCurrect={countCurrect}
										setCountCurrect={setCountCurrect}
										countWrong={countWrong}
										setCountWrong={setCountWrong}
										totalQuiz={totalQuiz}
									/>
								</ul>
							</div>
						))}
					</div>
					<div className='col-span-4 lg:col-span-1 pb-16'>
						{/* Sidebar Container */}
						<div className='w-full lg:w-80 lg:my-0 lg:mr-6 h py-8 bg-orange-50 border-r lg:fixed right-0 top-20 shadow-lg rounded-lg'>
							<h2 className='text-3xl font-semibold text-center'>MegaQuiz</h2>
							<div className='flex flex-col items-center mt-6 -mx-2'>
								<img
									className='object-cover w-24 h-24 mx-2 rounded-full'
									src='https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
									alt='avatar'
								/>
								<h4 className='mx-2 mt-2 font-medium text-gray-800  hover:underline'>MD. ABU NOMAN</h4>
								<p className='mx-2 mt-1 text-sm font-medium text-gray-600  hover:underline'>noman@gmail.com</p>
							</div>

							<div className='flex flex-col justify-between flex-1 mt-6 w-10/12 mx-auto'>
								<h4 className='mx-2 my-4 font-medium text-gray-800 hover:underline'>Total Quizes: {totalQuiz}</h4>
								<hr />
								<h4 className='mx-2 mt-2 font-medium text-gray-800 hover:underline'>Correct Answer: {countCurrect}</h4>
								<h4 className='mx-2 mt-2 font-medium text-gray-800  hover:underline'>Wrong Answer: {countWrong}</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AllQuizes;
