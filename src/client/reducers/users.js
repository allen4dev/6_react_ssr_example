import { combineReducers } from 'redux';

import { FETCH_USER } from './../actions/users';

function entitiesReducer(state = [], action = {}) {
  switch (action.type) {
    case FETCH_USER:
      return [...state, action.payload];

    default:
      return state;
  }
}

export default combineReducers({
  entities: entitiesReducer,
});
