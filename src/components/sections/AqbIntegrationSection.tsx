const principles = [
  {
    number: "01",
    title: "BONE–IMPLANT INTERFACE",
    description:
      "Biological integration develops at the interface between the implant surface and surrounding bone.",
  },
  {
    number: "02",
    title: "HEALING AS A PROCESS",
    description:
      "Integration should be understood as a biological healing process rather than a fixed or guaranteed timeline.",
  },
  {
    number: "03",
    title: "CLINICAL OBSERVATION",
    description:
      "Healing and implant stability should be evaluated continuously according to the individual clinical situation.",
  },
];

export function AqbIntegrationSection() {
  return (
    <section
      className="w-full border-t border-border bg-background"
      aria-labelledby="aqb-integration-title"
    >
      <div className="mx-auto grid max-w-[1280px] gap-16 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-24 lg:px-8 lg:py-24 xl:px-12">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#66836d]">
            BIOLOGICAL INTEGRATION
          </p>
          <h2
            id="aqb-integration-title"
            className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.03em] text-navy md:text-5xl"
          >
            Supporting the Bone–Implant Relationship
          </h2>
          <p className="mt-7 text-base leading-8 text-muted-foreground md:text-lg">
            AQB’s clinical concept considers biological integration as part of
            the relationship between the implant surface, surrounding bone, and
            appropriate clinical management.
          </p>
          <p className="mt-5 text-base leading-8 text-muted-foreground md:text-lg">
            The re-crystallized hydroxyapatite surface is designed to support
            the biological interaction at the bone–implant interface during
            healing. Clinical progress should always be evaluated according to
            the individual patient and treatment situation.
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
