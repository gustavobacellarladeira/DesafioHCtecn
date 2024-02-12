import {createAsyncThunk} from '@reduxjs/toolkit';
import {
  getTasks as get,
  removeTask as remove,
  updateStatusTask as updateStatus,
} from 'src/services/firestore';

export const getTasks = createAsyncThunk('home/getTasks', async () => {
  const res = await get();
  return res;
});

export const loadMore = createAsyncThunk('home/loadMore', async () => {
  const res = await get();
  return res;
});

export const removeTask = createAsyncThunk(
  'home/removeTask',
  async (id: string) => {
    await remove(id);
    const res = await get();
    return res;
  },
);

export const updateStatusTask = createAsyncThunk(
  'home/updateStatus',
  async (id: string) => {
    await updateStatus(id);
    const res = await get();
    return res;
  },
);
