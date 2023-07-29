import { authService } from '@/services/auth/authService';
import { redirect } from 'next/navigation';

/* 
  Agora essa página não permite mais acesso de sujeito não autenticado!!!!
  TODO: Essa é a melhor maneira de fazer isso? Pesquisar + pedir opiniões
*/
async function getUser() {
  const {session, ok} = await authService.getSession({token: null, client:false});
  if (!ok) redirect('/?error=ECONNREFUSED')
  if (!session) redirect('/?error=401');
  return session;
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
