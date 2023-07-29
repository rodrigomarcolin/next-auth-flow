'use client';

import { useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AuthContext } from '@/contexts/AuthContext';

export default function AuthenticatedHomePage() {
  const { user } = useContext(AuthContext);
  const router = useRouter();
  
  return (
    <>
      <h2>Olá, {user?.username}!</h2>
    </>
  );
}
