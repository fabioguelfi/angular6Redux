import { User } from '../models/user';
import * as auth from './reducers/auth.reducers';
import { createFeatureSelector } from '@ngrx/store';

export interface State {
    // is a user authenticated?
    isAuthenticated: boolean;
    // if authenticated, there should be a user object
    user: User | null;
    // error message
    errorMessage: string | null;
    // load
    // load: boolean;
}

export const initialState = {
    isAuthenticated: false,
    user: null,
    errorMessage: null,
}

export interface AppState {
    authState: auth.State;
}

export const reducers = {
    auth: auth.reducer
}

export const selectAuthState = createFeatureSelector<AppState>('auth');
