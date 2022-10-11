import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
	const loaderData = useLoaderData();
	const quizData = loaderData.data;

	return (
		<>
			<div className='bg-orange-50 py-12 my-16 w-full static bottom-0'>
				<h6 className='py-2 text-left w-10/12 mx-auto text-lg md:text-xl lg:text-2xl font-bold'>SimpleLineChart:</h6>
				<div className=' w-10/12 mx-auto bg-white rounded-lg '>
					<h6 className='py-4 text-center border-b-2 w-1/2 mx-auto text-base md:text-lg font-semibold'>Topic Name vs Total Quiz</h6>
					<ResponsiveContainer width='100%' aspect={3}>
						<LineChart
							width={100}
							height={100}
							data={quizData}
							margin={{
								top: 5,
								right: 30,
								left: 20,
								bottom: 5
							}}
						>
							<CartesianGrid strokeDasharray='3 3' />
							<XAxis dataKey='name' />
							<YAxis dataKey='total' />
							<Tooltip />
							<Legend />
							<Line type='monotone' dataKey='name' stroke='#8884d8' activeDot={{ r: 8 }} />
							<Line type='monotone' dataKey='total' stroke='#82ca9d' />
						</LineChart>
					</ResponsiveContainer>
				</div>
			</div>
			<div className='bg-orange-50 py-6 my-16 w-full order-5'>
				<h6 className='py-2 text-left w-10/12 mx-auto text-lg md:text-xl lg:text-2xl font-bold'>SimpleBarChart:</h6>
				<div className=' w-10/12 mx-auto bg-white rounded-lg '>
					<h6 className='py-4 text-center border-b-2 w-1/2 mx-auto text-base md:text-lg font-semibold'>Topic Name vs Total Quiz</h6>
					<ResponsiveContainer width='100%' aspect={3}>
						<BarChart
							width={500}
							height={300}
							data={quizData}
							margin={{
								top: 5,
								right: 30,
								left: 20,
								bottom: 5
							}}
						>
							<CartesianGrid strokeDasharray='3 3' />
							<XAxis dataKey='name' />
							<YAxis />
							<Tooltip />
							<Legend />
							<Bar dataKey='name' fill='#8884d8' />
							<Bar dataKey='total' fill='#82ca9d' />
						</BarChart>
					</ResponsiveContainer>
				</div>
			</div>
		</>
	);
};

export default Statistics;
