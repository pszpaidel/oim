import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers/reducers';

const store = () => createStore(reducers, applyMiddleware(thunk, logger));
export default store;
