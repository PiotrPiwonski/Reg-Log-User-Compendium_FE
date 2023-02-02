import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { routes } from './routesMap';

import SignUp from '../features/SignUp/SignUp';
import { Home } from '../features/Home';
import { SignIn } from '../features/SignIn';

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
