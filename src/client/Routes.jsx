import App from './App';
import Home from './pages/Home';
import Posts from './pages/Posts';
import Post from './pages/Post';
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
        ...Post,
        path: '/posts/:id',
      },
      {
        ...NotFound,
      },
    ],
  },
];

export default Routes;
