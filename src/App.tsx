import { useEffect, useContext } from 'react';
import { getUserWithCookie } from './context/auth/AuthActions';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthContext from './context/auth/AuthContext';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { LoggedUser } from './pages/LoggedUser';
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
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/logged-user" element={<LoggedUser />} />
      </Routes>
    </Router>
  );
};

export default App;
