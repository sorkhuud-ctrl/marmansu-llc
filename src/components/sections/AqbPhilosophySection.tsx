export function AqbPhilosophySection() {
  return (
    <section className="w-full border-t border-border bg-background" aria-labelledby="aqb-philosophy-title">
      <div className="mx-auto max-w-[1280px] px-4 py-20 sm:px-6 lg:px-8 lg:py-24 xl:px-12">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#66836d]">
            AQB PHILOSOPHY
          </p>
          <h2
            id="aqb-philosophy-title"
            className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.03em] text-navy md:text-5xl"
          >
            Simple is Best.
          </h2>
          <p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
            AQB was developed around a straightforward clinical idea: implant
            treatment should respect the patient&apos;s existing anatomy and
            avoid unnecessary complexity wherever possible.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
            Rather than adding complexity to treatment, the AQB philosophy
            focuses on a simple implant design, preservation of existing bone,
            and a biologically focused clinical approach.
          </p>
        </div>

      </div>
    </section>
  );
}
