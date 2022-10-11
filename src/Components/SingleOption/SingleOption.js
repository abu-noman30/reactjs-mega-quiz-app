import React from 'react';

const SingleOption = (props) => {
	const { option } = props;
	// console.log(option);
	return (
		<>
			<div className='flex items-center pl-3'>
				<input
					id='list-radio-license'
					type='radio'
					value=''
					name='list-radio'
					className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
				/>
				<label htmlFor='list-radio-license' className='py-3 ml-2 w-full text-sm font-medium text-gray-900'>
					{option}
				</label>
			</div>
		</>
	);
};

export default SingleOption;
