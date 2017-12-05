import App from './App';
import Home from './pages/Home';
import Posts from './pages/Posts';
import Post from './pages/Post';
import NotFound from './pages/NotFound';
import Comments from './containers/Comments';
import Overview from './containers/Overview';

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
            ...Overview,
            exact: true,
            path: '/posts/:id',
          },
          {
            ...Comments,
            path: '/posts/:id/comments',
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
