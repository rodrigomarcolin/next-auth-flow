import api from '@/infra/DjangoClient';
import { IContaBancaria } from '@/interfaces/IConta';

export class ContaService {
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

  public async fetchContasBancarias(): Promise<IContaBancaria[]> {
    try {
      const response = await api.get<IContaBancaria[]>(
        `api/conta/`,
        this.getHeaders(),
      );
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch contas bancarias');
    }
  }

  public async createContaBancaria(
    conta: IContaBancaria,
  ): Promise<IContaBancaria> {
    try {
      const response = await api.post<IContaBancaria>(
        `/api/conta/`,
        conta,
        this.getHeaders(),
      );
      return response.data;
    } catch (error) {
      throw new Error('Failed to create conta bancaria');
    }
  }

  public async getContaBancaria(id: number): Promise<IContaBancaria> {
    try {
      const response = await api.get<IContaBancaria>(
        `/api/conta/${id}/`,
        this.getHeaders(),
      );
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch conta bancaria');
    }
  }

  public async updateContaBancaria(
    id: number,
    conta: IContaBancaria,
  ): Promise<IContaBancaria> {
    try {
      const response = await api.put<IContaBancaria>(
        `/api/conta/${id}/`,
        conta,
        this.getHeaders(),
      );
      return response.data;
    } catch (error) {
      throw new Error('Failed to update conta bancaria');
    }
  }

  public async deleteContaBancaria(id: number): Promise<void> {
    try {
      await api.delete<void>(`/api/conta/${id}/`, this.getHeaders());
    } catch (error) {
      throw new Error('Failed to delete conta bancaria');
    }
  }
}
