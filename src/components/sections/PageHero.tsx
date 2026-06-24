interface PageHeroProps {
  label: string;
  title: string;
}

export function PageHero({ label, title }: PageHeroProps) {
  return (
    <section className="w-full bg-secondary">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 xl:px-12 py-16 lg:py-20">
        <p className="text-xs font-semibold tracking-[0.15em] text-gold uppercase mb-3">{label}</p>
        <h1 className="text-4xl md:text-5xl font-semibold text-navy leading-tight max-w-3xl">
          {title}
        </h1>
      </div>
    </section>
  );
}
