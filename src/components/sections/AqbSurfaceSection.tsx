const sequence = [
  {
    number: "01",
    title: "HYDROXYAPATITE SURFACE",
    description:
      "Hydroxyapatite is a calcium phosphate material with a mineral composition related to that found in natural bone.",
  },
  {
    number: "02",
    title: "RE-CRYSTALLIZATION",
    description:
      "AQB’s HA surface undergoes a re-crystallization process as part of its surface treatment, creating the characteristic surface structure of the implant.",
  },
  {
    number: "03",
    title: "BONE–IMPLANT INTERFACE",
    description:
      "The surface is designed to support the biological interaction that occurs at the interface between the implant and surrounding bone during healing.",
  },
];

export function AqbSurfaceSection() {
  return (
    <section
      className="w-full border-t border-border bg-background"
      aria-labelledby="aqb-surface-title"
    >
      <div className="mx-auto max-w-[1280px] px-4 py-20 sm:px-6 lg:px-8 lg:py-24 xl:px-12">
        <div className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#66836d]">
            SURFACE TECHNOLOGY
          </p>
          <h2
            id="aqb-surface-title"
            className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.03em] text-navy md:text-5xl"
          >
            Re-crystallized Hydroxyapatite Surface
          </h2>
          <p className="mt-7 max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">
            AQB uses a hydroxyapatite (HA) surface that undergoes a
            re-crystallization process designed to create a biologically
            focused interface between the implant and surrounding bone.
          </p>
        </div>

        <div className="mt-16 grid border-b border-border lg:grid-cols-3">
          {sequence.map((step, index) => (
            <article
              key={step.number}
              className={`border-t border-border py-7 lg:pr-10 ${
                index > 0 ? "lg:border-l lg:pl-10" : ""
              }`}
            >
              <p className="text-sm font-medium tracking-[0.14em] text-[#66836d]">
                {step.number}
              </p>
              <h3 className="mt-6 text-sm font-semibold tracking-[0.12em] text-navy">
                {step.title}
              </h3>
              <p className="mt-4 max-w-sm text-sm leading-7 text-muted-foreground">
                {step.description}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-14 max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">
          For AQB, surface technology is not treated as an isolated feature.
          It forms part of a broader clinical philosophy centered on biology,
          existing bone, and appropriate clinical management.
        </p>
      </div>
    </section>
  );
}
