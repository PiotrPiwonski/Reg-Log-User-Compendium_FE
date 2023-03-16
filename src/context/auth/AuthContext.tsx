import { createContext, useReducer } from 'react';

import { AuthActions, AuthState } from 'types/frontend';

import authReducer from './AuthReducer';

type Props = {
  children: React.ReactNode;
};

const initialState: AuthState = {
  user: null,
  isLoading: false,
};

const AuthContext = createContext<{ state: AuthState; dispatch: React.Dispatch<AuthActions> }>({
  state: initialState,
  dispatch: () => null,
});

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return <AuthContext.Provider value={{ state: { ...state }, dispatch }}>{children}</AuthContext.Provider>;
};

export default AuthContext;
