export default function Home() {
  return (
    <>
      <main className="flex flex-col">
        {/* Hero Section */}
        <section className="w-full bg-purple-200 px-4">
          <div className="max-w-7xl w-full mx-auto py-8">
            <div className="max-w-2xl w-full flex flex-col gap-4 py-4 md:gap-8 md:py-9">
              <h2 className="font-bold text-4xl md:text-6xl">
                Manage all kinds of stuff. In here.
              </h2>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt iure
                earum quo facere sapiente quos hic harum quisquam architecto quam
                quod vitae eum impedit, praesentium assumenda, qui laborum enim
                tenetur?
              </p>
              <a href="#">
                <button className="font-bold text-xl bg-purple-400 px-12 py-3 rounded-full">
                  Entrar
                </button>
              </a>
              </div>
          </div>
        </section>
        {/* text left section */}
        <section className="flex flex-col md:flex-row max-w-7xl max-h-96 my-6 mx-auto justify-between items-center px-4">
          <div className="flex flex-col gap-4 max-w-screen-sm w-full">
            <h3 className="text-3xl font-semibold">Para quê planilhas?</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
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
            <h3 className="text-3xl font-semibold">Para quê planilhas?</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
