import { createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './../client/rootReducer';

function configStore() {
  const store = createStore(rootReducer, {}, applyMiddleware(thunk));

  return store;
}

export default configStore;
