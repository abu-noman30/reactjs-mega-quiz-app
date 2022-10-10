import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Root from '../Pages/Root/Root';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				path: '/',
				element: <Home />,
				loader: async () => fetch('https://openapi.programming-hero.com/api/quiz')
			},
			{
				path: 'home',
				element: <Home />,
				loader: async () => fetch('https://openapi.programming-hero.com/api/quiz')
			}
		]
	}
]);

export default router;
