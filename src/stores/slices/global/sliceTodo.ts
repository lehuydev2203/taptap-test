import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {itemTodoType, Reducers, SliceName, State} from '../../../utils';

const initialState: itemTodoType[] = [];

const slice = createSlice({
  name: SliceName.todoList,
  initialState: initialState,
  reducers: {
    loadItem: (state, action: PayloadAction<itemTodoType[]>) => {
      return action.payload;
    },
    addItem: (state, action: PayloadAction<itemTodoType>) => {
      state.push(action.payload);
    },
    update: (state, action: PayloadAction<{data: itemTodoType}>) => {
      let list = [...state];
      const index = list.findIndex(i => i.id === action.payload.data.id);
      list[index] = action.payload.data;
      return list;
    },
    removeItem: (state, action: PayloadAction<{id: number}>) => {
      return state.filter(item => item.id !== action.payload.id);
    },
    clearList: state => {
      return [];
    },
  },
});

export const {loadItem, addItem, removeItem, update, clearList} = slice.actions;
export default slice.reducer;
