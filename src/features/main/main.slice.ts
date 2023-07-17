import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TypeToDo } from './Main.types';

export interface mainState {
  toDos: TypeToDo[];
  toDoContent: string;
  isCompleted: boolean;
  meta: {
    fetching: boolean;
    creating: boolean;
    editing: number[];
    deleting: number[];
  };
}

const initialState: mainState = {
  toDos: [],
  toDoContent: '',
  isCompleted: false,
  meta: {
    fetching: false,
    creating: false,
    editing: [],
    deleting: [],
  },
};

const mainSlice = createSlice({
  name: 'mainReducer',
  initialState,
  reducers: {
    addToDo: (state, action: PayloadAction<string>) => {
      const toDo = {
        id: (state.toDos.at(-1)?.id || 0) + 1,
        toDoContent: action.payload,
        isCompleted: false,
      };
      state.toDos.push(toDo);
    },
  },
});

export const { addToDo } = mainSlice.actions;

export default mainSlice.reducer;
