import { combineReducers } from 'redux';

import { FETCH_POSTS, FETCH_POST, FETCH_ERROR } from './../actions/posts';

function entitiesReducer(state = [], action = {}) {
  switch (action.type) {
    case FETCH_POSTS:
      // Just for simplicity
      return action.payload;

    case FETCH_POST:
      return [...state, action.payload];

    default:
      return state;
  }
}

function errorReducer(state = null, action = {}) {
  if (action.type === FETCH_ERROR) {
    return action.payload;
  }

  if (action.type === FETCH_POSTS) {
    return null;
  }

  return state;
}

export default combineReducers({
  entities: entitiesReducer,
  error: errorReducer,
});
