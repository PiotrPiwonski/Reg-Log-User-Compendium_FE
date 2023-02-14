// import styles from './LoggedInUser.module.css';
// import { UserRole } from 'types/backend';

import { HeaderUser } from '../../components/HeaderUser';

enum UserRole {
  User = 1,
  Senior = 2,
  Admin = 3,
}

const user = {
  email: 'a@b.c',
  id: 'b4b31124-c116-40c9-8d04-34349dedff41',
  role: 1,
};

export const LoggedInUser = () => {
  return <HeaderUser id={user.id} email={user.email} role={UserRole[user.role]} />;
};
