import {applyMiddleware, compose, createStore} from 'redux';
import reducers from './reducers';
import thunkMiddleware from 'redux-thunk';

const store = createStore(reducers, compose(applyMiddleware(thunkMiddleware)));

export default store;
