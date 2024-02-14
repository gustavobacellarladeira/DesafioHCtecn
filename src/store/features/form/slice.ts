import {createSlice} from '@reduxjs/toolkit';
import {createTask, loadTask, updateTask} from './thunk';
import {State} from './types';

const INITIAL_STATE: State = {
  task: {
    name: '',
    description: '',
    category: '',
  },
};

export const slice = createSlice({
  name: 'home',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(createTask.fulfilled, state => {
      const {task} = state;
      task.name = '';
      task.description = '';
      task.category = '';
    });
    builder.addCase(loadTask.fulfilled, (state, action) => {
      state.task = action.payload as State['task'];
    });
    builder.addCase(updateTask.fulfilled, state => {
      const {task} = state;
      task.name = '';
      task.description = '';
      task.category = '';
    });
  },
});

export const formActions = {
  ...slice.actions,
  createTask,
  loadTask,
  updateTask,
};

export default slice.reducer;
