import { setupServer } from 'msw/node';

import { authHandlers } from '../services/api/auth/mocks/auth.handlers';

export const server = setupServer(...authHandlers);

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
