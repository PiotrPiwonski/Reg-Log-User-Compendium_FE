import { ENDPOINTS } from './endpoints';
import { ILoginCredentials } from './types';

import { apiClient } from '../apiClient';

export const login = async (credentials: ILoginCredentials) => {
  try {
    return await apiClient.post(ENDPOINTS.LOGIN, credentials);
  } catch (e) {
    console.log(e);
  }
};

export const logout = async () => {
  try {
    return await apiClient.post(ENDPOINTS.LOGOUT);
  } catch (e) {
    console.log(e);
  }
};
