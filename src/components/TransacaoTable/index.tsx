import { ITransacao } from '@/interfaces/ITransacao';

interface TransacaoTableProps {
  transacoes: ITransacao[];
}
export const TransacaoTable = ({ transacoes }: TransacaoTableProps) => {
  return (
    <>
      <table className="border-collapse border w-full">
        <thead>
          <tr className="bg-primary">
            <th className="border border-primary-dark px-4 py-2 text-primary-bg">
              Nome
            </th>
            <th className="border border-primary-dark px-4 py-2 text-primary-bg">
              Quantia
            </th>
            <th className="border border-primary-dark px-4 py-2 text-primary-bg">
              Categoria
            </th>
            <th className="border border-primary-dark px-4 py-2 text-primary-bg">
              Data
            </th>
          </tr>
        </thead>
        <tbody className="[&>*:nth-child(odd)]:bg-primary-light">
          {transacoes.map((item) => (
            <tr key={item.id}>
              <td className="border border-primary-dark px-4 py-2">
                {item.nome}
              </td>
              <td
                className={`border border-primary-dark px-4 py-2 ${
                  item.quantia < 0
                    ? 'text-money-negative'
                    : 'text-money-positive'
                }`}
              >
                {item.quantia}
              </td>
              <td className="border border-primary-dark px-4 py-2">
                {item.categoria || '-'}
              </td>
              <td className="border border-primary-dark px-4 py-2">
                {item.data}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
