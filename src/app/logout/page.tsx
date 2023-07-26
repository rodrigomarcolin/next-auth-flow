'use client';

import { useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AuthContext } from '@/contexts/AuthContext';

export default function LoginPage() {
  const { logout } = useContext(AuthContext);

  const router = useRouter();

  useEffect(() => {
    const doLogout = async () => {
      await logout();
      router.push('/');
    };

    doLogout();
  }, []);
  return (
    <>
      <h2>Aguarde, você será redirecionado em instantes...</h2>
    </>
  );
}
