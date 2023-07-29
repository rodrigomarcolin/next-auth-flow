import Link from 'next/link';

interface HeroSectionProps {
  title: string;
  description: string;
  buttonHref: string;
  buttonText: string;
}

export const HeroSection = ({
  title,
  description,
  buttonHref,
  buttonText,
}: HeroSectionProps) => {
  return (
    <section className="w-full bg-primary-light px-4">
      <div className="max-w-7xl w-full mx-auto py-8">
        <div className="max-w-2xl w-full flex flex-col gap-4 py-4 md:gap-8 md:py-9">
          <h2 className="font-bold text-4xl md:text-6xl text-font">{title}</h2>
          <p className="text-font">{description}</p>
          <Link
            href={buttonHref}
            className="font-bold text-xl bg-primary px-12 py-3 rounded-full text-center max-w-xs text-font"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
};
