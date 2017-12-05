import App from './App';
import Home from './pages/Home';
import Posts from './pages/Posts';
import Post from './pages/Post';
import NotFound from './pages/NotFound';
import Comments from './containers/Comments';
import User from './containers/User';

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
        routes: [
          {
            ...Comments,
            path: '/posts/:id/comments',
          },
          {
            ...User,
            path: '/posts/:id/user',
          },
        ],
      },
      {
        ...NotFound,
      },
    ],
  },
];

export default Routes;
