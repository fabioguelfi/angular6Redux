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
            }
        }
        default: {
            return state;
        }
    }
}