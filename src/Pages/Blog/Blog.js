import React from 'react';

const Blog = () => {
	return (
		<>
			<div id='questions-container' className='my-1 py-12 '>
				<div className='w-10/12 mx-auto bg-white p-4 md:p-10 lg:p-16 rounded-2xl shadow-lg'>
					<div className=' bg-white border border-gray-200'>
						<h2 className='mb-0'>
							<button
								className='


flex
items-center
w-full
py-4
px-5
text-lg text-gray-800 text-left
bg-white
border-0
rounded-none
transition
focus:outline-none
font-bold
'
								type='button'
							>
								Q1: How Does React Works?
							</button>
						</h2>

						<div className='py-4 px-5'>
							<strong>Ans:</strong> React creates a VIRTUAL DOM in memory.Instead of manipulating the browser's DOM directly, React creates a virtual DOM in
							memory, where it does all the necessary manipulating, before making the changes in the browser DOM.React finds out what changes have been made,
							and changes only what needs to be changed.
						</div>
					</div>
					<div className=' bg-white border border-gray-200'>
						<h2 className='mb-0'>
							<button
								className='


flex
items-center
w-full
py-4
px-5
text-lg text-gray-800 text-left
bg-white
border-0
rounded-none
transition
focus:outline-none
font-bold
'
								type='button'
							>
								Q1: How Does React Works?
							</button>
						</h2>

						<div className='py-4 px-5'>
							<strong>Ans:</strong> React creates a VIRTUAL DOM in memory.Instead of manipulating the browser's DOM directly, React creates a virtual DOM in
							memory, where it does all the necessary manipulating, before making the changes in the browser DOM.React finds out what changes have been made,
							and changes only what needs to be changed.
						</div>
					</div>
					<div className=' bg-white border border-gray-200'>
						<h2 className='mb-0'>
							<button
								className='


flex
items-center
w-full
py-4
px-5
text-lg text-gray-800 text-left
bg-white
border-0
rounded-none
transition
focus:outline-none
font-bold
'
								type='button'
							>
								Q1: How Does React Works?
							</button>
						</h2>

						<div className='py-4 px-5'>
							<strong>Ans:</strong> React creates a VIRTUAL DOM in memory.Instead of manipulating the browser's DOM directly, React creates a virtual DOM in
							memory, where it does all the necessary manipulating, before making the changes in the browser DOM.React finds out what changes have been made,
							and changes only what needs to be changed.
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Blog;
