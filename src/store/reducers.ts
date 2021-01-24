import {combineReducers} from 'redux';
import store from '.';
import bookStoreReducer from './bookStoreStore/bookStroreReducer';

const reducers = combineReducers({
  bookStoreState: bookStoreReducer,
});

export type AppDispatch = typeof store.dispatch;
export type StateReduxType = ReturnType<typeof reducers>;

export default reducers;
