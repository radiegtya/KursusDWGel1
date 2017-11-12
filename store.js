import {createStore, applyMiddleware, combineReducers} from 'redux';
// import {logger} from 'redux-logger';
// import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import * as reducers from './reducers';

const middleware = applyMiddleware(promise());

const store = createStore(
  combineReducers(reducers),
  middleware
);

export default store;
