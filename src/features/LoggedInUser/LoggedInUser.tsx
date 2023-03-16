import { useContext } from 'react';

import { UserRole } from './types';

import { HeaderUser } from '../../components/HeaderUser';
import AuthContext from '../../context/auth/AuthContext';

// const userTest = {
//   email: 'a@b.c',
//   id: 'b4b31124-c116-40c9-8d04-34349dedff41',
//   role: 1,
// };

export const LoggedInUser = () => {
  // let user = {};
  //Context
  const { state: authState } = useContext(AuthContext);
  const user = authState.user;

  if (user && user.id) {
    return <HeaderUser id={user.id} email={user.email} role={UserRole[user.role]} />;
  } else {
    return <h1>bla bla</h1>;
  }
};
