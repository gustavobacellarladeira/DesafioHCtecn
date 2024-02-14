import {createSlice} from '@reduxjs/toolkit';
import {State} from './types';

const INITIAL_STATE: State = {
  showOnlyCompleted: false,
};

export const slice = createSlice({
  name: 'settings',
  initialState: INITIAL_STATE,
  reducers: {
    setShowOnlyCompleted: (state, action) => {
      state.showOnlyCompleted = action.payload;
    },
  },
});

export const settingsActions = {
  ...slice.actions,
};

export default slice.reducer;
