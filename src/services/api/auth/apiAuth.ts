import { ENDPOINTS } from './endpoints';
import { ILoginCredentials } from './types';

import { apiClient } from '../apiClient';

export const login = async (credentials: ILoginCredentials) => {
  return await apiClient.post(ENDPOINTS.LOGIN, credentials);
};
