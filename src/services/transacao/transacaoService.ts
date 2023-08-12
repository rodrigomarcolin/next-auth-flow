import api from '@/infra/DjangoClient';
import { ITransacao } from '@/interfaces/ITransacao';

export class TransacaoService {
  private token: string;

  constructor(token: string) {
    this.token = token;
  }

  private getHeaders() {
    return {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    };
  }

  public async fetchTransacoes(
    idConta: number,
    all?: boolean,
  ): Promise<ITransacao[]> {
    try {
      let url = `api/conta/${idConta}/transac`;
      if (all) {
        url += '?all=true';
      }
      const response = await api.get<ITransacao[]>(url, this.getHeaders());
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch transacoes');
    }
  }

  public async createTransacao(
    idConta: number,
    transacao: ITransacao,
  ): Promise<ITransacao> {
    try {
      const response = await api.post<ITransacao>(
        `api/conta/${idConta}/transac`,
        transacao,
        this.getHeaders(),
      );
      return response.data;
    } catch (error) {
      throw new Error('Failed to create transacao');
    }
  }

  public async getTransacao(
    idConta: number,
    idTransacao: number,
  ): Promise<ITransacao> {
    try {
      const response = await api.get<ITransacao>(
        `api/conta/${idConta}/transac/${idTransacao}`,
        this.getHeaders(),
      );
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch transacao');
    }
  }

  public async updateTransacao(
    idConta: number,
    idTransacao: number,
    transacao: ITransacao,
  ): Promise<ITransacao> {
    try {
      const response = await api.put<ITransacao>(
        `api/conta/${idConta}/transac/${idTransacao}`,
        transacao,
        this.getHeaders(),
      );
      return response.data;
    } catch (error) {
      throw new Error('Failed to update transacao');
    }
  }

  public async deleteTransacao(
    idConta: number,
    idTransacao: number,
  ): Promise<void> {
    try {
      await api.delete<void>(
        `api/conta/${idConta}/transac/${idTransacao}`,
        this.getHeaders(),
      );
    } catch (error) {
      throw new Error('Failed to delete transacao');
    }
  }
}
