export interface ITransacao {
  id: number;
  quantia: number;
  nome: string;
  categoria: number | null;
  conta: number;
  data: string;
}
