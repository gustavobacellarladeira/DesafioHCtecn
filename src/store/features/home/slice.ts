import {createSlice} from '@reduxjs/toolkit';
import {State} from './types';
import {getTasks} from './thunk';

const INITIAL_STATE: State = {
  tasks: [],
};

export const slice = createSlice({
  name: 'home',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getTasks.fulfilled, (state, action) => {
      state.tasks = action.payload as State['tasks'];
    });
  },
});

export const homeActions = {
  ...slice.actions,
  getTasks,
};

export default slice.reducer;
