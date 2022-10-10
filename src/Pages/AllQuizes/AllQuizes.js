import React from 'react';
import SingleQuiz from '../../Components/SingleQuiz/SingleQuiz';

const AllQuizes = () => {
	return (
		<>
			<div className=' grid grid-cols-4 gap-4'>
				<div className='col-span-3'>
					<SingleQuiz />
				</div>
				<div className='col-span-1'>
					<h1>
						<SingleQuiz />
					</h1>
				</div>
			</div>
		</>
	);
};

export default AllQuizes;
