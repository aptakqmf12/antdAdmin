import { userReducer } from './user';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({ userReducer });
export type rootReducerType = ReturnType<typeof rootReducer>;
