import {combineReducers} from '@reduxjs/toolkit';
import reducerTodo from './sliceTodo'

export const GlobalReducer = combineReducers({
  todo: reducerTodo,
});
