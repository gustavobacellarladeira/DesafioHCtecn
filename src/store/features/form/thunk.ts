import {createAsyncThunk} from '@reduxjs/toolkit';
import {createTask as create} from 'src/services/firestore';
import {Task} from './types';

export const createTask = createAsyncThunk('form/createTask', (task: Task) => {
  create(task);
});
