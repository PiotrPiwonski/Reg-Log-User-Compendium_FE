import { useContext } from 'react';

import { UserRole } from './types';

import { HeaderUser } from '../../components/HeaderUser';
import AuthContext from '../../context/auth/AuthContext';

export const LoggedInUser = () => {
  //Context
  const { state: authState } = useContext(AuthContext);
  const user = authState.user;

  if (user && user.id) {
    return <HeaderUser id={user.id} email={user.email} role={UserRole[user.role]} />;
  } else {
    //@TODO implementacjia wylogowania
    return <h1>Todo LogOut</h1>;
  }
};
