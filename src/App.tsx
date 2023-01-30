import { useContext, useEffect } from 'react';

import AuthContext, { AuthProvider } from './context/auth/AuthContext';
import LoadingSpinner from './components/LoadingSpinners/LoadingSpinner';
import { AppRoutes } from './routes/Routes';
import { getUserWithCookie } from './context/auth/AuthActions';
import { TranslationProvider } from './services/translation/TranslationProvider';

export const App = () => {
  const { state: authState, dispatch } = useContext(AuthContext);

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

  if (authState.isLoading) return <LoadingSpinner isLoadingPage={true} />;

  return (
    <TranslationProvider>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </TranslationProvider>
  );
};
