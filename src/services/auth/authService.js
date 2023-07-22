import { HttpClient } from '../../infra/HttpClient';
import { tokenService } from './tokenService';

export const authService = {
  async login({ username, password }) {
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
    });
  },
  async getSession(ctx = null) {
    const token = await tokenService.get(ctx);
    return HttpClient(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/users/me/`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer  ${token}`,
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
