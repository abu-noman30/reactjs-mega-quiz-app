import React from 'react';
import SingleTopic from '../SingleTopic/SingleTopic';

const Topics = (props) => {
	const { topicsData } = props;
	console.log(topicsData);

	return (
		<>
			<div className='w-1/2 mx-auto border-b-2'>
				<h1 className=' text-center font-bold text-2xl md:text-4xl lg:text-5xl mb-2'>Related Topics:</h1>
			</div>

			<div id='card-container' className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-10/12 mx-auto my-16'>
				{topicsData.map((topic) => (
					<SingleTopic key={topic.id} topic={topic} />
				))}
			</div>
		</>
	);
};

export default Topics;
