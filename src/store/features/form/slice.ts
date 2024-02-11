import {createSlice} from '@reduxjs/toolkit';
import {createTask} from './thunk';
import {ActionCompleted, State} from './types';

const INITIAL_STATE: State = {
  task: {
    name: '',
    description: '',
    category: '',
  },
  actionCompleted: null,
};

export const slice = createSlice({
  name: 'home',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(createTask.fulfilled, state => {
      const {task} = state;
      state.actionCompleted = ActionCompleted.INSERTED;
      task.name = '';
      task.description = '';
      task.category = '';
    });
  },
});

export const formActions = {
  ...slice.actions,
  createTask,
};

export default slice.reducer;
