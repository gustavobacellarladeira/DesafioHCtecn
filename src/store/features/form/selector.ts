import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../../store';
import {State} from './types';

const getState = (store: RootState): State => store.form;
