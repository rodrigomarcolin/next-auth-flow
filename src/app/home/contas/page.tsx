import { tokenService } from '@/services/auth/tokenService';
import { IContaBancaria } from '@/interfaces/IConta';
import { ContaService } from '@/services/contas/contaService';
import ContaCard from '@/components/Conta';

async function getUserAccounts() {
  try {
    const token = await tokenService.getServerSide();

    if (!token) {
      return { erro: true, contas: [] };
    }

    const contaService = new ContaService(token);

    const contas: IContaBancaria[] = await contaService.fetchContasBancarias();
    return { erro: false, contas };
  } catch (error) {
    console.error('Error:', error);
    return { erro: true, contas: [] };
  }
}

export default async function LoginPage() {
  const { erro, contas } = await getUserAccounts();

  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-2xl font-bold">Contas</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {contas?.map((conta) => <ContaCard conta={conta} key={conta.id} />)}
      </div>
    </div>
  );
}
