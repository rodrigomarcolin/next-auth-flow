'use client';

import { TransacaoTable } from '@/components/TransacaoTable';
import { ITransacao } from '@/interfaces/ITransacao';
import { tokenService } from '@/services/auth/tokenService';
import { TransacaoService } from '@/services/transacao/transacaoService';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

async function getContaTransacoes(contaId: number) {
  try {
    const token = await tokenService.getClientSide();

    if (!token) {
      return { erro: true, transacoes: [] };
    }

    const transacaoService = new TransacaoService(token);

    const transacoes: ITransacao[] = await transacaoService.fetchTransacoes(
      contaId,
    );
    return { erro: false, transacoes };
  } catch (error) {
    console.error('Error:', error);
    return { erro: true, transacoes: [] };
  }
}

export default function LoginPage({ params }: { params: { id: number } }) {
  const [transactions, setTransactions] = useState<ITransacao[]>([]);
  const [erro, setErro] = useState<boolean>();
  const searchParams = useSearchParams();

  useEffect(() => {
    const getTransacoes = async () => {
      const { erro, transacoes } = await getContaTransacoes(params.id);
      setErro(erro);
      setTransactions(transacoes);
    };

    getTransacoes();
  }, []);

  return (
    <>
      <TransacaoTable transacoes={transactions} />
    </>
  );
}
