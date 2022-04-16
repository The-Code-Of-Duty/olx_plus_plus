import React, { createContext, ReactNode, useReducer } from 'react';

export interface IState {
    isAuthenticated: boolean;
    user: string | null;
    token: string | null;
}

// interface for action reducer
export interface IAction {
    type: 'LOGIN' | 'LOGOUT' | 'REGISTER' | 'FORGOT PASSWORD';
    payload?: any;
}

export const AuthReducer = (state: IState, action: IAction) => {
    switch (action.type) {
        case 'LOGIN':
            localStorage.setItem('user', action.payload.name);
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.name,
                token: action.payload.token,
            };

        case 'LOGOUT':
            localStorage.clear();
            return {
                ...state,
                isAuthenticated: false,
            };
        default:
            return state;
    }
};

interface IAuthProvider {
    children: ReactNode;
}

const initialState = {
    isAuthenticated: false,
    user:
        (JSON.parse(sessionStorage.getItem('user') as string) as string) ||
        null,
    token: '',
};

interface AuthContextValue {
    state: IState;
    dispatch: React.Dispatch<IAction>;
}

export const AuthContext = createContext<AuthContextValue>({
    state: initialState,
    dispatch: (action) =>
        console.error(
            'Dispatched action outside of an AuthContext provider',
            action
        ),
});

export const AuthProvider = ({ children }: IAuthProvider) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState);

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};
