import { authService } from '@/services/auth/authService';
import { redirect } from 'next/navigation';

/* 
  Agora essa página não permite mais acesso de sujeito não autenticado!!!!
  TODO: Essa é a melhor maneira de fazer isso? Pesquisar + pedir opiniões
*/
async function redirectToHomeIfNotAuthenticated() {
  const data = await authService.getSession({ token: null, client: false });
  if (!data) redirect('/?error=401');
  return data;
}

export default async function HomeLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
  await redirectToHomeIfNotAuthenticated();
  return (
    <>
    {children}
    </>
  );
}
