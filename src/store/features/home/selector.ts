import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../../store';
import {State} from './types';

const getState = (store: RootState): State => store.home;

export const refresh = createSelector(getState, state => state.refresh);

export const getTasks = createSelector(getState, state => state.tasks);

// export const getActionCompleted = createSelector(
//   getState,
//   state => state.actionCompleted,
// );
