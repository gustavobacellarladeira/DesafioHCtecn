import {createSlice} from '@reduxjs/toolkit';
import {State} from './types';
import {getTasks, removeTask, updateStatusTask, loadMore} from './thunk';

const INITIAL_STATE: State = {
  tasks: [],
  refresh: false,
};

export const slice = createSlice({
  name: 'home',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getTasks.fulfilled, (state, action) => {
      state.tasks = action.payload as State['tasks'];
    });
    builder.addCase(loadMore.pending, state => {
      state.refresh = true;
    });
    builder.addCase(loadMore.fulfilled, state => {
      state.tasks = [...state.tasks];
      state.refresh = false;
    });
  },
});

export const homeActions = {
  ...slice.actions,
  getTasks,
  removeTask,
  updateStatusTask,
  loadMore,
};

export default slice.reducer;
