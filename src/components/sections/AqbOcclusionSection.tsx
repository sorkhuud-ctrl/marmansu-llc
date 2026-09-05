const principles = [
  {
    number: "01",
    title: "ASSESS OCCLUSION",
    description:
      "Evaluate the patient’s occlusal condition as part of implant treatment and restorative planning.",
  },
  {
    number: "02",
    title: "MANAGE FUNCTIONAL LOAD",
    description:
      "Occlusal contacts and functional loading should be carefully managed according to the healing stage and individual clinical situation.",
  },
  {
    number: "03",
    title: "CONTINUE OBSERVATION",
    description:
      "Occlusion should be reassessed during follow-up as part of the continuing clinical management of the implant.",
  },
];

export function AqbOcclusionSection() {
  return (
    <section
      className="w-full border-t border-border bg-background"
      aria-labelledby="aqb-occlusion-title"
    >
      <div className="mx-auto grid max-w-[1280px] gap-16 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-24 lg:px-8 lg:py-24 xl:px-12">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#66836d]">
            CLINICAL MANAGEMENT
          </p>
          <h2
            id="aqb-occlusion-title"
            className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.03em] text-navy md:text-5xl"
          >
            Occlusal Adjustment Matters
          </h2>
          <p className="mt-7 text-base leading-8 text-muted-foreground md:text-lg">
            Successful implant treatment depends not only on implant design and
            biological integration, but also on appropriate clinical management
            after placement.
          </p>
          <p className="mt-5 text-base leading-8 text-muted-foreground md:text-lg">
            In AQB clinical practice, careful occlusal adjustment is an
            important part of managing the forces applied to the implant and
            surrounding structures. Occlusion should be evaluated and adjusted
            according to the individual clinical situation.
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
