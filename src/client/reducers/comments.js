import { combineReducers } from 'redux';

import { FETCH_COMMENTS } from './../actions/comments';

const INITIAL_STATE = {
  entities: [],
};

function entitiesReducer(state = INITIAL_STATE.entities, action = {}) {
  if (action.type === FETCH_COMMENTS) {
    return [...state, ...action.payload];
  }

  return state;
}

const reducer = combineReducers({
  entities: entitiesReducer,
});

export default reducer;
