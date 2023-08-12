import { authService } from '@/services/auth/authService';
import TextImageSection from '@/components/TextLeftSection';
import { HeroSection } from '@/components/HeroSection';
import { Snackbar } from '@/components/Snackbar';
import { redirect } from 'next/navigation';

const redirectToAuthedHomeIfAuthed = async () => {
  const { session, error } = await authService.getSession({
    token: null,
    client: false,
  });
  console.log('data', { session, error });
  if (error && session) redirect('/home');

  return error;
};

export default async function Home() {
  const error = await redirectToAuthedHomeIfAuthed();
  return (
    <>
      <main className="flex flex-col">
        {/* Hero Section */}
        {error && (
          <Snackbar
            type="error"
            title="Eita!"
            description="Não foi possível conectar-se com o servidor."
          />
        )}
      </main>
    </>
  );
}
