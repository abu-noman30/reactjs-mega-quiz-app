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
	// const [countWrong, setCountWrong] = useState(0);
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
					{/* Quizes Container */}
					<div className='col-span-4 lg:col-span-3 shadow-lg rounded-lg'>
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
										<div className='modal-box relative bg-orange-50 shadow-2xl'>
											<label
												htmlFor='my-modal-3'
												className='btn btn-sm absolute right-2 top-2 bg-white text-black hover:text-white'
												onClick={() => handlerOnCloseModal()}
											>
												✕
											</label>
											<div className='border-4 rounded-lg p-2 text-center shadow-inner'>
												<h3 className='text-lg font-bold underline underline-offset-8'>Correct Answer</h3>
												<p className='py-4 font-semibold'>
													<i>{modalData}</i>
												</p>
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
										// countWrong={countWrong}
										// setCountWrong={setCountWrong}
										totalQuiz={totalQuiz}
									/>
								</ul>
							</div>
						))}
					</div>
					{/* Sidebar Container */}
					<div className='col-span-4 lg:col-span-1'>
						<div className='w-full lg:max-w-[15rem] xl:max-w-[18rem] lg:my-0 lg:mr-6 xl:mr-8 bg-orange-50 border-r lg:fixed right-0 top-22 shadow-lg rounded-lg h-[20rem] lg:h-[18rem] xl:h-[24rem] xl:pt-8  pt-2 lg:pt-0'>
							<h2 className='text-3xl font-semibold text-center'>MegaQuiz</h2>
							<div className='flex flex-col items-center mt-6 -mx-2'>
								<img
									className='object-cover w-16 h-16 mx-2 rounded-full'
									src='https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
									alt='avatar'
								/>
								<h4 className='mx-2 mt-2 font-medium text-gray-800  hover:underline'>MD. ABU NOMAN</h4>
								<hr />
							</div>

							<div className='flex flex-col justify-between flex-1 mt-2 mb-2 w-10/12 mx-auto text-center lg:text-left xl:mt-6'>
								<h4 className='mx-2 my-4 font-medium text-gray-800 hover:underline'>Total Quizes: {totalQuiz}</h4>
								<hr />
								<h4 className='mx-2 mt-2 font-medium text-gray-800 hover:underline'>Correct Answers: {countCurrect}</h4>

								<h4 className='mx-2 mt-2 mb-2 font-medium text-gray-800  hover:underline '>Rest Quizes: {totalQuiz - countCurrect}</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AllQuizes;
