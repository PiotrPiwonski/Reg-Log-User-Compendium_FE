import { useContext } from 'react';
import AuthContext from '../context/auth/AuthContext';

export const LoggedUser = () => {
  // Context
  const { state: authState, dispatch } = useContext(AuthContext);
  if (authState.user) {
    console.log(authState.user);
    return (
      <div>
        <h1>Witaj {authState.user.email}</h1>
        <p>Twoje ID: {authState.user.id}</p>
        <p>Twoja rola: {authState.user.role}</p>
      </div>
    );
  }

  console.log(authState.user);

  return <h1>Hej {authState.user}</h1>;
};
