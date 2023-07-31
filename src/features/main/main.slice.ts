import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TypeToDo } from './Main.types';
import { toDosAPI } from '../../api/toDosAPI/toDosAPI';
import { RootState } from '../../app/store';

export interface mainState {
  toDos: TypeToDo[];
  toDoContent: string;
  isCompleted: boolean;
  meta: {
    fetching: boolean;
    creating: boolean;
    editing: boolean;
    deleting: boolean;
  };
}

const initialState: mainState = {
  toDos: [],
  toDoContent: '',
  isCompleted: false,
  meta: {
    fetching: false,
    creating: false,
    editing: false,
    deleting: false,
  },
};

const mainSlice = createSlice({
  name: 'mainReducer',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getToDosThunk.pending, (state) => {
      state.meta.fetching = true;
    });

    builder.addCase(getToDosThunk.fulfilled, (state, action) => {
      if (!action.payload) return;
      state.toDos = action.payload;
      state.meta.fetching = false;
    });

    builder.addCase(addToDoThunk.pending, (state) => {
      state.meta.creating = true;
    });

    builder.addCase(addToDoThunk.fulfilled, (state, action) => {
      state.toDos.push(action.payload);
      state.meta.creating = false;
    });

    builder.addCase(deleteToDoThunk.pending, (state) => {
      state.meta.deleting = true;
    });

    builder.addCase(deleteToDoThunk.fulfilled, (state, action) => {
      state.toDos = state.toDos.filter((toDo) => toDo.id !== action.payload);
      state.meta.deleting = false;
    });

    builder.addCase(toggleCompleteToDoThunk.pending, (state) => {
      state.meta.editing = true;
    });

    builder.addCase(toggleCompleteToDoThunk.fulfilled, (state, action) => {
      state.toDos = state.toDos.map((toDo) =>
        toDo.id === action.payload.id
          ? { ...toDo, isCompleted: !toDo.isCompleted }
          : toDo
      );
      state.meta.editing = false;
    });

    builder.addCase(saveEditingThunk.pending, (state) => {
      state.meta.editing = true;
    });

    builder.addCase(saveEditingThunk.fulfilled, (state, action) => {
      state.toDos = state.toDos.map((toDo) =>
        toDo.id === action.payload.id ? action.payload : toDo
      );
      state.meta.editing = false;
    });
  },
});

export const {} = mainSlice.actions;

export const getToDosThunk = createAsyncThunk(
  'mainReducer/getToDosThunk',
  async (_, thunkAPI) => {
    try {
      const { data } = await toDosAPI.getToDos();
      return data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addToDoThunk = createAsyncThunk(
  'mainReducer/addToDoThunk',
  async (todoContent: string, thunkAPI) => {
    const toDo = {
      toDoContent: todoContent,
      isCompleted: false,
    };
    try {
      const { data } = await toDosAPI.addToDo(toDo);
      return data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteToDoThunk = createAsyncThunk(
  'mainReducer/deleteToDoThunk',
  async (id: number, thunkAPI) => {
    try {
      await toDosAPI.deleteToDo(id);
      return id;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const toggleCompleteToDoThunk = createAsyncThunk(
  'mainReducer/toggleCompleteToDoThunk',
  async (id: number, thunkAPI) => {
    const globalState = thunkAPI.getState() as RootState;
    try {
      const todo = globalState.mainReducer.toDos.find((todo) => todo.id === id);
      if (!todo)
        return thunkAPI.rejectWithValue('ToDo с таким id не существует');
      const { data } = await toDosAPI.editToDo(id, {
        ...todo,
        isCompleted: !todo.isCompleted,
      });
      return data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const saveEditingThunk = createAsyncThunk(
  'mainReducer/saveEditingThunk',
  async (
    { id, editingContent }: { id: number; editingContent: string },
    { rejectWithValue, getState }
  ) => {
    const globalState = getState() as RootState;
    try {
      const todo = globalState.mainReducer.toDos.find((todo) => todo.id === id);
      if (!todo) return rejectWithValue('ToDo с таким id не существует');
      const { data } = await toDosAPI.editToDo(id, {
        ...todo,
        toDoContent: editingContent,
      });
      return data;
    } catch (e: any) {
      return rejectWithValue(e.message);
    }
  }
);

export default mainSlice.reducer;
