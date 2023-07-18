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
      if (action.payload !== '') state.toDos.push(toDo);
    },

    deleteToDo: (state, action: PayloadAction<number>) => {
      state.toDos = state.toDos.filter((toDo) => toDo.id !== action.payload);
    },

    completedToDo: (state, action: PayloadAction<number>) => {
      state.toDos = state.toDos.map((toDo) =>
        toDo.id === action.payload
          ? { ...toDo, isCompleted: !toDo.isCompleted }
          : toDo
      );
    },
  },
});

export const { addToDo, deleteToDo, completedToDo } = mainSlice.actions;

export default mainSlice.reducer;
