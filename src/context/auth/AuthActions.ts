import { UserLoginRes } from 'types';

export const getUserWithCookie = async () => {
  try {
    const res = await fetch('http://localhost:3001/user/profile', {
      method: 'GET',
      credentials: 'include',
    });

    if (res.status !== 200) {
      return null;
    }

    const data = await res.json();

    return data.user as UserLoginRes;
  } catch (error) {
    console.log('Error auto logging user with cookie: ', error);
    return null;
  }
};
