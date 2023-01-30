import { rest } from 'msw';

import { ENDPOINTS } from '../endpoints';

export const loginHandler = [
  rest.post(`${process.env.REACT_APP_API_BASE_URL}${ENDPOINTS.LOGIN.url}`, (req, res, ctx) => {
    return res.once(
      ctx.status(200),
      ctx.json({
        //todo   to be done: pulled from login.mock.json
        message: 'here should be proper response example from backend',
      }),
    );
  }),
];
