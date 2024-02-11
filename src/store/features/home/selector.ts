import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../../store';
import {State} from './types';

const getState = (store: RootState): State => store.home;

// export const getActionCompleted = createSelector(
//   getState,
//   state => state.actionCompleted,
// );

export const getTasks = createSelector(getState, state => state.tasks);
