import {createAsyncThunk} from '@reduxjs/toolkit';
import {
  createTask as create,
  loadTask as load,
  updateTask as update,
} from 'src/services/firestore';
import {Task} from './types';

export const createTask = createAsyncThunk(
  'form/createTask',
  async (task: Task) => {
    await create(task);
  },
);

export const loadTask = createAsyncThunk(
  'form/loadTask',
  async (id: string) => {
    const res = await load(id);
    return res;
  },
);

export const updateTask = createAsyncThunk(
  'form/updateTask',
  async (task: {id: string; task: Task}) => {
    await update(task.id, task.task);
  },
);
