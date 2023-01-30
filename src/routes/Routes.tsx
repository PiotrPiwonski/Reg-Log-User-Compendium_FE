import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { routes } from './routesMap';

import SignIn from '../features/SignIn';
import SignUp from '../features/SignUp';
import { Home } from '../features/Home';

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.signIn} element={<SignIn />} />
        <Route path={routes.signUp} element={<SignUp />} />
      </Routes>
    </Router>
  );
};
