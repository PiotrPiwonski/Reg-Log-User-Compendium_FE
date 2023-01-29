import { useContext, useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { getUserWithCookie } from './context/auth/AuthActions';
import AuthContext from './context/auth/AuthContext';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import LoadingSpinner from './components/LoadingSpinners/LoadingSpinner';

const App = () => {
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
    <div data-testid="sign-in-test">
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
