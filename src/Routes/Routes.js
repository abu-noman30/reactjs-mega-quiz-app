import { createBrowserRouter } from 'react-router-dom';
import Error from '../Components/Error/Error';
import SingleQuiz from '../Components/SingleQuiz/SingleQuiz';
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
				element: <SingleQuiz />,
				loader: async ({ params }) => await fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
			},
			{
				path: 'allQuizes',
				element: <AllQuizes />
			}
		]
	}
]);

export default router;
