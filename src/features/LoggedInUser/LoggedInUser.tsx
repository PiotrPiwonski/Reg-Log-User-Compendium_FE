import { UserRole } from './types';

import { HeaderUser } from '../../components/HeaderUser';

const user = {
  email: 'a@b.c',
  id: 'b4b31124-c116-40c9-8d04-34349dedff41',
  role: 1,
};

export const LoggedInUser = () => {
  return <HeaderUser id={user.id} email={user.email} role={UserRole[user.role]} />;
};
