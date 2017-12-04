import App from './App';
import Home from './pages/Home';
import Posts from './pages/Posts';
import NotFound from './pages/NotFound';

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
      {
        ...NotFound,
      },
    ],
  },
];

export default Routes;
