import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../../store';
import {State} from './types';

const getState = (store: RootState): State => store.settings;

export const getShowOnlyCompleted = createSelector(
  getState,
  state => state.showOnlyCompleted,
);
