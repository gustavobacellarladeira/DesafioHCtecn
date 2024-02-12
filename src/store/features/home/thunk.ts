import {createAsyncThunk} from '@reduxjs/toolkit';
import {
  getTasks as get,
  getTasksCompleted as getCompleted,
  removeTask as remove,
  updateStatusTask as updateStatus,
} from 'src/services/firestore';

export const getTasks = createAsyncThunk(
  'home/getTasks',
  async (_, {getState}) => {
    const state = getState();
    const {showOnlyCompleted} = state.settings;
    if (showOnlyCompleted) {
      const res = await getCompleted();
      return res;
    }
    const res = await get();
    return res;
  },
);

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
