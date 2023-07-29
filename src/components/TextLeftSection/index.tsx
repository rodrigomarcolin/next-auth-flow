interface TextImageSectionProps {
  title: string;
  subtitle: string;
  imagePath: string;
  imageAlt: string;
  textPosition: 'left' | 'right';
}

export default async function TextImageSection({
  title,
  subtitle,
  textPosition,
  imageAlt,
  imagePath,
}: TextImageSectionProps) {
  const mdTextFlexRow =
    textPosition == 'left' ? 'md:flex-row' : 'md:flex-row-reverse';
  return (
    <>
      <section className={`flex flex-col max-w-7xl max-h-96 my-6 mx-auto justify-between items-center px-4 ${mdTextFlexRow  }`}>
        <div className="flex flex-col gap-4 max-w-screen-sm w-full">
          <h3 className="text-3xl font-semibold text-font">{title}</h3>
          <p className="text-font">{subtitle}</p>
        </div>
        <img
          src={imagePath}
          alt={imageAlt}
          className="max-w-screen-sm w-full max-h-full"
        />
      </section>
    </>
  );
}
