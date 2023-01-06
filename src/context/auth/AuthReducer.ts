import { AuthState, AuthActions } from 'src/types';

const authReducer = (state: AuthState, action: AuthActions): AuthState => {
  switch (action.type) {
    case 'SET_USER': {
      return { ...state, user: action.payload };
    }

    case 'RESET_USER': {
      return { ...state, user: null };
    }

    default:
      return state;
  }
};

export default authReducer;
