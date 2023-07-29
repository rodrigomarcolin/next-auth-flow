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
        <HeroSection
          title="Manage all kinds of stuff. In here."
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
          iure earum quo facere sapiente quos hic harum quisquam
          architecto quam quod vitae eum impedit, praesentium assumenda,
          qui laborum enim tenetur?"
          buttonHref="/login"
          buttonText="Entrar"
        />
        <TextImageSection
          title="Para quê planilhas?"
          subtitle="Nós somos melhores"
          imageAlt="Gatito"
          imagePath="/images/gatito.png"
          textPosition="left"
        />
        <TextImageSection
          title="Gatitos"
          subtitle="Gatitos e mais gatitos"
          imageAlt="Gatito Nervosito"
          imagePath="/images/angycat.png"
          textPosition="right"
        />
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
