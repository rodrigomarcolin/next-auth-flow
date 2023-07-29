import { redirect, useRouter } from 'next/navigation';
import { authService } from '@/services/auth/authService';
import { tokenService } from '@/services/auth/tokenService';
import { IConta } from '@/interfaces/IConta';

async function getUserAccounts() {
  try {
    const token = await tokenService.getServerSide();

    if (!token) {
      return { erro: true, contas: [] };
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/conta/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(res => res.json());

    const contas: IConta[] = response;
    return { erro: false, contas };
  } catch (error) {
    console.error('Error:', error);
    return { erro: true, contas: [] };
  }
}

export default async function LoginPage() {
  const {erro, contas} = await getUserAccounts();

  return <>{JSON.stringify(contas, null, 2)}</>;
}
