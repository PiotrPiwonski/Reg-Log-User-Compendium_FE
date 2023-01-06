import { UserLoginRes } from 'types';

// State:
export interface AuthState {
  user: UserLoginRes | null;
}

// Reducer actions:
export type AuthActions = { type: 'RESET_USER'; payload: null } | { type: 'SET_USER'; payload: UserLoginRes };
