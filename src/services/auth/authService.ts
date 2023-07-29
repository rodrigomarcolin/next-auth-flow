import { HttpClient } from '../../infra/HttpClient';
import { tokenService } from './tokenService';
import { ILoginData } from '@/contexts/AuthContext';

interface IGetSession {
  token: null | string | undefined,
  client: boolean
}

export const authService = {
  async login({ username, password }: ILoginData) {
    return HttpClient(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/jwt/create`,
      {
        method: 'POST',
        body: { username, password },
        cache: 'no-store'
      },
    ).then(async (respostaDoServidor) => {
      if (!respostaDoServidor.ok)
        throw new Error('Usuário ou senha inválidos!');
      const body = respostaDoServidor.body;
      tokenService.save(body?.access);
      return body?.access;
    });
  },
  async getSession({client, token} : IGetSession) {
    const fromTokenService = client ? await tokenService.getClientSide() : await tokenService.getServerSide();
    const usableToken = token || fromTokenService;
    return HttpClient(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/users/me/`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer  ${usableToken}`,
        },
        cache: 'no-store'
      },
    ).then((response) => {
      if (!response.ok) return {ok: false, error: response.body, status: response.status, session:null, error:null};
      return {session: response?.body, ok: true, error: null, status: response.status};
    })
    .catch((error) => {
      return {error: error, ok: false, session: null}
    });
  },
  async logout() {
    tokenService.delete();
  },
};
