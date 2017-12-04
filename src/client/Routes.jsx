import App from './App';
import Home from './pages/Home';
import Posts from './pages/Posts';

const Routes = [
  {
    ...App,
    routes: [
      {
        ...Home,
        path: '/',
        exact: true,
      },
      {
        ...Posts,
        path: '/posts',
        exact: true,
      },
    ],
  },
];

export default Routes;
