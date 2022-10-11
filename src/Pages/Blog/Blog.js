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
								Q1: What is the purpose of react router?
							</button>
						</h2>

						<div className='py-4 px-5'>
							<strong>Ans:</strong> React Router is a JavaScript library used to handle client and server-side routing in React applications. It allows the
							creation of single-page web or mobile apps that allows navigation without the page refreshing. React Router also gives us access to browser
							history features while maintaining the correct view of the application.React Router uses a component-based approach to routing. It provides
							different routing components as needed by the application.
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
								Q1: How does Context API works?
							</button>
						</h2>

						<div className='py-4 px-5'>
							<strong>Ans:</strong> The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is
							the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.
							<br />
							<br />
							React.createContext() is all need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to
							its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a
							component that consumes and uses the state.
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
								Q1: What is useRef hook in react?
							</button>
						</h2>

						<div className='py-4 px-5'>
							<strong>Ans:</strong> useRef() hook is part of the React Hooks API. It is a function which takes a maximum of one argument and returns an Object
							called current. The returned object has a property called current whose value is the argument passed to useRef(). If you invoke it without an
							argument, the returned object's current property is set to undefined..
							<br />
							<br />
							Some of the use cases of useRef hook are:
							<br />
							<ul className='list-decimal pl-8'>
								<li>To access DOM elements.</li>
								<li>To persist values in successive renders.</li>
								<li>It can be used to store a mutable value that does not cause a re-render when updated.</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Blog;
