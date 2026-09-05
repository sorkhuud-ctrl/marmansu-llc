const principles = [
  {
    number: "01",
    title: "INTEGRATED STRUCTURE",
    description:
      "The implant body and abutment are integrated into a single design.",
  },
  {
    number: "02",
    title: "SIMPLE CLINICAL CONCEPT",
    description:
      "The one-piece structure expresses AQB’s “Simple is Best” philosophy through a straightforward implant design.",
  },
  {
    number: "03",
    title: "BIOLOGICALLY FOCUSED",
    description:
      "The design is considered together with preservation of existing bone, biological integration, and appropriate clinical management.",
  },
];

export function AqbOnePieceSection() {
  return (
    <section
      className="w-full border-t border-border bg-background"
      aria-labelledby="aqb-one-piece-title"
    >
      <div className="mx-auto grid max-w-[1280px] gap-16 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-24 lg:px-8 lg:py-24 xl:px-12">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#66836d]">
            DESIGN PHILOSOPHY
          </p>
          <h2
            id="aqb-one-piece-title"
            className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.03em] text-navy md:text-5xl"
          >
            One-Piece by Design
          </h2>
          <p className="mt-7 text-base leading-8 text-muted-foreground md:text-lg">
            AQB integrates the implant body and abutment into a single
            one-piece structure.
          </p>
          <p className="mt-5 text-base leading-8 text-muted-foreground md:text-lg">
            This simple structural concept reflects the AQB philosophy of
            reducing unnecessary complexity while maintaining a clinically
            focused approach to implant treatment.
          </p>
        </div>

        <div className="border-b border-border">
          {principles.map((principle) => (
            <article
              key={principle.number}
              className="border-t border-border py-7"
            >
              <div className="grid gap-4 sm:grid-cols-[3rem_1fr] sm:gap-6">
                <p className="text-sm font-medium tracking-[0.14em] text-[#66836d]">
                  {principle.number}
                </p>
                <div>
                  <h3 className="text-sm font-semibold tracking-[0.12em] text-navy">
                    {principle.title}
                  </h3>
                  <p className="mt-4 max-w-lg text-sm leading-7 text-muted-foreground">
                    {principle.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
