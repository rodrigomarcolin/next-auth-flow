import { authService } from '@/services/auth/authService';
import { redirect } from 'next/navigation';

/* 
  Agora essa página não permite mais acesso de sujeito não autenticado!!!!
  TODO: Essa é a melhor maneira de fazer isso? Pesquisar + pedir opiniões
*/
async function getUser() {
  const data = await authService.getSession();
  if (!data) redirect('/?error=401');
  return data;
}

export default async function ProtectedPage() {
  const userData = await getUser();
  return (
    <>
      <main className="flex flex-col flex-grow items-center justify-center px-4">
        <h1>Protected page</h1>
        <pre>{JSON.stringify(userData, null, 2)}</pre>
      </main>
    </>
  );
}
