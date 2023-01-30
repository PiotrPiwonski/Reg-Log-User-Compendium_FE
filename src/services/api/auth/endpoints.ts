import { EndpointRecordType } from '../types';

export const ENDPOINTS = EndpointRecordType()({
  LOGIN: {
    method: 'POST',
    url: '/auth/login',
    customAcceptHeader: 'application/json',
  },
});
