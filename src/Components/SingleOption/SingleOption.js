import React from 'react';

const SingleOption = (props) => {
	const { option } = props;
	console.log(option);
	return (
		<>
			<div class='flex items-center pl-3'>
				<input
					id='list-radio-license'
					type='radio'
					value=''
					name='list-radio'
					class='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
				/>
				<label for='list-radio-license' class='py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300'>
					Driver License
				</label>
			</div>
		</>
	);
};

export default SingleOption;
