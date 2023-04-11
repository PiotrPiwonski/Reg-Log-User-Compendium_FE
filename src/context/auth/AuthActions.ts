import { UserLoginRes } from 'types/backend';

import { User } from 'types/frontend';

export const getUserWithCookie = async (): Promise<User | null> => {
  try {
    const res = await fetch('http://localhost:3001/user/profile', {
      method: 'GET',
      credentials: 'include',
    });

    if (res.status !== 200) {
      return null;
    }

    const data = (await res.json()) as UserLoginRes;

    const user: User = {
      email: data.email,
      id: data.id as string,
      role: data.role as number,
    };

    return user;
  } catch (error: unknown) {
    console.log('Error auto logging user with cookie: ', error);
    return null;
  }
};
