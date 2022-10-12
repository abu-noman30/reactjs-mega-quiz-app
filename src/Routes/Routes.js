import { createBrowserRouter } from 'react-router-dom';
import Error from '../Components/Error/Error';
import AllQuizes from '../Pages/AllQuizes/AllQuizes';
import Blog from '../Pages/Blog/Blog';
import Home from '../Pages/Home/Home';
import Root from '../Pages/Root/Root';
import Statistics from '../Pages/Statistics/Statistics';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Home />,
				loader: async () => await fetch('https://openapi.programming-hero.com/api/quiz')
			},
			{
				path: 'home',
				element: <Home />,
				loader: async () => await fetch('https://openapi.programming-hero.com/api/quiz')
			},
			{
				path: 'topic/quiz/:id',
				element: <AllQuizes />,
				loader: async ({ params }) => await fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
			},
			{
				path: 'statistics',
				element: <Statistics />,
				loader: async () => await fetch('https://openapi.programming-hero.com/api/quiz')
			},
			{
				path: 'blog',
				element: <Blog />
			}
		]
	}
]);

export default router;
