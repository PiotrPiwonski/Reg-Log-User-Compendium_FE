import { useEffect, useContext } from 'react';
import { getUserWithCookie } from './context/auth/AuthActions';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthContext from './context/auth/AuthContext';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

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

  if (authState.isLoading) return <h1>Loading...</h1>;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default App;
