import { UserLoginRes } from 'types/backend';

// State:
export interface AuthState {
  user: UserLoginRes | null;
  isLoading: boolean;
}

// Reducer actions:
export type AuthActions =
  | { type: 'RESET_USER' }
  | { type: 'SET_USER'; payload: UserLoginRes }
  | { type: 'SET_LOADING' }
  | { type: 'CLEAR_LOADING' };
