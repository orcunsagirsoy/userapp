import {combineReducers, createStore} from 'redux';
import {usersReducer} from './reducer';

export const rootReducer = combineReducers({
  list: usersReducer,
});

export const store = createStore(rootReducer);
