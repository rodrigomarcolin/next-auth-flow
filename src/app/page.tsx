import { authService } from '@/services/auth/authService';
import Link from 'next/link';
import { redirect } from 'next/navigation';

const redirectToAuthedHomeIfAuthed = async () => {
  const data = await authService.getSession({ token: null, client: false });
  console.log('data', data)
  if (!data) return;
  redirect('/home');
};
export default async function Home() {
  const redirect = await redirectToAuthedHomeIfAuthed();
  return (
    <>
      <main className="flex flex-col">
        {/* Hero Section */}
        <section className="w-full bg-primary-light px-4">
          <div className="max-w-7xl w-full mx-auto py-8">
            <div className="max-w-2xl w-full flex flex-col gap-4 py-4 md:gap-8 md:py-9">
              <h2 className="font-bold text-4xl md:text-6xl text-font">
                Manage all kinds of stuff. In here.
              </h2>
              <p className="text-font">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                iure earum quo facere sapiente quos hic harum quisquam
                architecto quam quod vitae eum impedit, praesentium assumenda,
                qui laborum enim tenetur?
              </p>
              <Link
                href="/login"
                className="font-bold text-xl bg-primary px-12 py-3 rounded-full text-center max-w-xs text-font"
              >
                Entrar
              </Link>
            </div>
          </div>
        </section>
        {/* text left section */}
        <section className="flex flex-col md:flex-row max-w-7xl max-h-96 my-6 mx-auto justify-between items-center px-4">
          <div className="flex flex-col gap-4 max-w-screen-sm w-full">
            <h3 className="text-3xl font-semibold text-font">
              Para quê planilhas?
            </h3>
            <p className="text-font">Nós somos melhores</p>
          </div>
          <img
            src="/images/gatito.png"
            alt="Gatito"
            className="max-w-screen-sm w-full max-h-full"
          />
        </section>
        {/* text right section */}
        <section className="flex flex-col-reverse md:flex-row max-w-7xl max-h-96 my-6 mx-auto justify-between items-center px-4">
          <img
            src="/images/angycat.png"
            alt="Gatito Nervosito"
            className="max-w-screen-sm w-full max-h-full block"
          />
          <div className="flex flex-col gap-4 max-w-screen-sm w-full">
            <h3 className="text-3xl font-semibold text-font">Gatitos</h3>
            <p className="text-font">Gatitos e mais gatitos</p>
          </div>
        </section>
      </main>
    </>
  );
}
