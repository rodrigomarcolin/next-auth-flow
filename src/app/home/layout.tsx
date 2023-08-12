import { authService } from '@/services/auth/authService';
import { redirect } from 'next/navigation';

/* 
  Agora essa página não permite mais acesso de sujeito não autenticado!!!!
  TODO: Essa é a melhor maneira de fazer isso? Pesquisar + pedir opiniões
*/
async function redirectToHomeIfNotAuthenticated() {
  const { session, ok } = await authService.getSession({
    token: null,
    client: false,
  });
  if (!ok) redirect('/?error=ECONNREFUSED');
  if (!session) redirect('/?error=401');
  return session;
}

export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await redirectToHomeIfNotAuthenticated();
  return (
    <>
      <div className="flex justify-center px-8 py-8 md:px-16">
        <div className="w-full">{children}</div>
      </div>
    </>
  );
}
