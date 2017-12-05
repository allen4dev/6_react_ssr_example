import { combineReducers } from 'redux';

import postsReducer from './reducers/posts';
import commentsReducer from './reducers/comments';
import usersReducer from './reducers/users';

const rootReducer = combineReducers({
  comments: commentsReducer,
  posts: postsReducer,
  users: usersReducer,
});

export default rootReducer;
