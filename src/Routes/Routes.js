import { createBrowserRouter } from 'react-router-dom';
import Error from '../Components/Error/Error';
import AllQuizes from '../Pages/AllQuizes/AllQuizes';
import Home from '../Pages/Home/Home';
import Root from '../Pages/Root/Root';

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
			}
		]
	}
]);

export default router;
