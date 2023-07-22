import nookies from 'nookies';
import { cookies } from 'next/dist/client/components/headers';

const ACCESS_TOKEN_KEY = 'ACCESS_TOKEN_KEY';

const ONE_SECOND = 1;
const ONE_MINUTE = ONE_SECOND * 60;
const ONE_HOUR = ONE_MINUTE * 60;
const ONE_DAY = ONE_HOUR * 24;
const ONE_YEAR = ONE_DAY * 365;

export const tokenService = {
  save(accessToken, ctx = null) {
    nookies.set(ctx, ACCESS_TOKEN_KEY, accessToken, {
      maxAge: ONE_YEAR,
      path: '/',
    });
  },
  async get() {
    return cookies().get(ACCESS_TOKEN_KEY)?.value;
  },
  async delete(ctx = null) {
    await cookies().set(ctx, ACCESS_TOKEN_KEY, '', {
      maxAge: 0,
      path: '/',
    });
  },
};
