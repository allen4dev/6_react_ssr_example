import { createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

const INITIAL_STATE = window.INITIAL_STATE;
delete window.INITIAL_STATE;

const store = createStore(rootReducer, INITIAL_STATE, applyMiddleware(thunk));

export default store;
