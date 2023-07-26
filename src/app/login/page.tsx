'use client';

import { FormEvent, useContext, useState } from 'react';
import { authService } from '@/services/auth/authService';
import { useRouter } from 'next/navigation';
import { AuthContext, ILoginData } from '@/contexts/AuthContext';

export default function LoginPage() {
  const { login } = useContext(AuthContext);
  const [formInfo, setFormInfo] = useState<ILoginData>({
    username: '',
    password: '',
  });
  
  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    const name = event.currentTarget.name;
    setFormInfo({
      ...formInfo,
      [name]: value,
    });
  };

  const router = useRouter();
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    login(formInfo).then(() => router.push('/protected'));
  };

  return (
    <>
      <main className="flex flex-row flex-grow items-center justify-around px-4">
        <form
          onSubmit={(event) => handleSubmit(event)}
          className="max-w-sm flex flex-col gap-3 w-full items-center border border-2 border-red-600 p-8"
        >
          <h3 className="font-bold">Welcome!</h3>
          <input
            className="border border-2 border-primary max-w-[256px] p-2 w-full"
            type="text"
            placeholder="Usuário"
            name="username"
            required
            value={formInfo.username}
            onChange={handleChange}
          />
          <input
            className="border border-2 border-primary max-w-[256px] p-2 w-full"
            type="password"
            name="password"
            placeholder="Senha"
            required
            value={formInfo.password}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="border border-2 border-primary px-4 py-1 hover:bg-primary-light"
          >
            Login
          </button>
        </form>
        <img
          src="/images/gentleman.jpg"
          alt="Gatito"
          className="max-w-xs w-full max-h-full hidden md:block"
        />
      </main>
    </>
  );
}
