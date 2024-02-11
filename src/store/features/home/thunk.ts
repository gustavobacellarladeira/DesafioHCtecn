import {createAsyncThunk} from '@reduxjs/toolkit';
import {getTasks as get} from 'src/services/firestore';

export const getTasks = createAsyncThunk('home/getTasks', async () => {
  const res = await get();
  return res;
});
