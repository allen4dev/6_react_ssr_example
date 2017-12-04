import { combineReducers } from 'redux';

import postsReducer from './reducers/posts';

const rootReducer = combineReducers({
  tracks: postsReducer,
});

export default rootReducer;
