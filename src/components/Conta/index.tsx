import { IContaBancaria } from '@/interfaces/IConta';
import Link from 'next/link';

interface ContaCardProps {
  conta: IContaBancaria;
}
const ContaCard = ({ conta }: ContaCardProps) => {
  const formattedSaldo = conta.saldo.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  const saldoColor =
    conta.saldo < 0 ? 'text-money-negative' : 'text-money-positive';

  return (
    <>
      <div className="border border-2 border-primary bg-primary-light px-6 py-4">
        <div className="font-bold text-xl mb-2">{conta.nome}</div>
        <p className="text-gray-700 text-base">{conta.desc}</p>
        <p className={`text-gray-700 text-base ${saldoColor} font-bold`}>{formattedSaldo}</p>
        <Link href={`contas/${conta.id}`}>
          <button className="bg-primary border border-2 border-primary-dark text-white font-bold py-2 px-4 mt-4">
            Ver mais
          </button>
        </Link>
      </div>
    </>
  );
};

export default ContaCard;
