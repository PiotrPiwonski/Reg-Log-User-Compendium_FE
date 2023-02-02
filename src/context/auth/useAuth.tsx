import { useContext, useEffect } from 'react';

import { getUserWithCookie } from './AuthActions';
import AuthContext from './AuthContext';

export const useAuth = () => {
  const { state: authState, dispatch } = useContext(AuthContext);

  const { isLoading } = authState;

  useEffect(() => {
    (async () => {
      dispatch({ type: 'SET_LOADING' });

      const user = await getUserWithCookie();

      if (user) {
        dispatch({ type: 'SET_USER', payload: user });
      } else {
        dispatch({ type: 'RESET_USER' });
      }

      dispatch({ type: 'CLEAR_LOADING' });
    })();
  }, [dispatch]);

  return {
    authState,
    isLoading,
  };
};
