import { combineReducers } from 'redux';

import postsReducer from './reducers/posts';
import commentsReducer from './reducers/comments';

const rootReducer = combineReducers({
  comments: commentsReducer,
  posts: postsReducer,
});

export default rootReducer;
