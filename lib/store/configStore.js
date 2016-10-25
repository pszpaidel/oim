import reducers from '../reducers/reducers';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';

const config = () =>  createStore(reducers, applyMiddleware(thunk));
export default config;

