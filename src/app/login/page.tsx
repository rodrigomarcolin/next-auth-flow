'use client';

import { FormEvent, useContext, useState } from 'react';
import { authService } from '@/services/auth/authService';
import { useRouter } from 'next/navigation';
import { AuthContext, ILoginData } from '@/contexts/AuthContext';
import { SpinContext } from '@/contexts/SpinContext';

export default function LoginPage() {
  const { login } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState(null);
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
  const { spin, setSpin } = useContext(SpinContext);
  const router = useRouter();
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    login(formInfo)
      .then(() => router.push('/protected'))
      .catch((erro) => setErro(erro))
      .finally(() => setLoading(false));
  };

  return (
    <>
      <main className="flex flex-row flex-grow items-center justify-around px-4">
        <form
          onSubmit={(event) => handleSubmit(event)}
          className="max-w-sm flex flex-col gap-3 w-full items-center border border-2 border-primary p-8 bg-primary-light"
        >
          <h3 className="font-bold">Welcome!</h3>
          <input
            className="border border-2 border-primary max-w-[256px] p-2 w-full bg-primary-bg"
            type="text"
            placeholder="Usuário"
            name="username"
            required
            value={formInfo.username}
            onChange={handleChange}
          />
          <input
            className="border border-2 border-primary max-w-[256px] p-2 w-full bg-primary-bg"
            type="password"
            name="password"
            placeholder="Senha"
            required
            value={formInfo.password}
            onChange={handleChange}
          />
          {!loading && <div className="h-7"></div>}
          {loading && <h3 className="h-7">Carregando...</h3>}
          <button
            type="submit"
            className="border border-2 border-primary px-4 py-1 hover:bg-primary-light bg-primary-bg"
          >
            Login
          </button>
        </form>
        <pre>{JSON.stringify(erro, null, 2)}</pre>
        <img
          src="/images/gentleman.jpg"
          alt="Gatito"
          className="max-w-xs w-full max-h-full hidden md:block"
          onMouseDown={() => {
            setSpin(true);
          }}
          onMouseUp={() => {
            setSpin(false);
          }}
          onMouseOut={() => {
            setSpin(false);
          }}
        />
      </main>
    </>
  );
}
