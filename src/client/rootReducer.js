import { combineReducers } from 'redux';

import tracksReducer from './reducers/tracks';

const rootReducer = combineReducers({
  tracks: tracksReducer,
});

export default rootReducer;
