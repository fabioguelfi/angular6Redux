import { initialState, State } from "../app.state";
import { All, AuthActionTypes } from "../actions/auth.actions";

export function reducer(state = initialState, action: All): State {
    switch (action.type) {
        case AuthActionTypes.LOGIN_SUCCESS: {
            return {
                ...state,
                isAuthenticated: true,
                user: {
                    token: action.payload.token,
                    email: action.payload.email,
                },
                errorMessage: null,
            };
        }
        case AuthActionTypes.LOGIN_FAILURE: {
            return {
                ...state,
                errorMessage: 'Email ou senha incorreto.'
            };
        }
        case AuthActionTypes.SIGNUP_SUCCESS: {
            return {
                ...state,
                isAuthenticated: true,
                user: {
                    token: action.payload.token,
                    email: action.payload.email
                },
                errorMessage: null
            }
        }
        case AuthActionTypes.SIGNUP_FAILURE: {
            return {
                ...state,
               errorMessage: 'That email is already in use'
            };
        }
        default: {
            return state;
        }
    }
}