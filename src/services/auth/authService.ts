import { HttpClient } from '../../infra/HttpClient';
import { tokenService } from './tokenService';
import { ILoginData } from '@/contexts/AuthContext';

interface IGetSession {
  ctx: any,
  token: null | string
}

export const authService = {
  async login({ username, password }: ILoginData) {
    return HttpClient(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/jwt/create`,
      {
        method: 'POST',
        body: { username, password },
      },
    ).then(async (respostaDoServidor) => {
      if (!respostaDoServidor.ok)
        throw new Error('Usuário ou senha inválidos!');
      const body = respostaDoServidor.body;
      tokenService.save(body?.access);
      return body?.access;
    });
  },
  async getSession({ctx = null , token = null} : IGetSession) {
    const usableToken = token || await tokenService.get();
    return HttpClient(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/users/me/`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer  ${usableToken}`,
        },
      },
    ).then((response) => {
      if (!response.ok) return null;
      return response?.body;
    });
  },
  async getClientSession({ctx = null , token = null} : IGetSession) {
    const usableToken = token || await tokenService.getClientSide();
    return HttpClient(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/users/me/`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer  ${usableToken}`,
        },
      },
    ).then((response) => {
      if (!response.ok) return null;
      return response?.body;
    });
  },
  async logout() {
    tokenService.delete();
  },
};
