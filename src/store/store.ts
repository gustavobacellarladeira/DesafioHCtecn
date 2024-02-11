import {configureStore} from '@reduxjs/toolkit';
import homeReducer from './features/home/slice';
import formReducer from './features/form/slice';

export const store = configureStore({
  reducer: {
    home: homeReducer,
    form: formReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
