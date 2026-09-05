const principles = [
  {
    number: "01",
    title: "REGULAR MAINTENANCE",
    description:
      "Continue professional maintenance and oral hygiene management after implant treatment.",
  },
  {
    number: "02",
    title: "OBSERVE OVER TIME",
    description:
      "Monitor the implant, surrounding tissues, and clinical condition continuously during follow-up.",
  },
  {
    number: "03",
    title: "CARE AS A NATURAL TOOTH",
    description:
      "Approach long-term implant care with the same continuing attention given to maintaining natural teeth.",
  },
];

export function AqbLongTermCareSection() {
  return (
    <section
      className="w-full border-t border-border bg-background"
      aria-labelledby="aqb-long-term-care-title"
    >
      <div className="mx-auto grid max-w-[1280px] gap-16 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-24 lg:px-8 lg:py-24 xl:px-12">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#66836d]">
            LONG-TERM CARE
          </p>
          <h2
            id="aqb-long-term-care-title"
            className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.03em] text-navy md:text-5xl"
          >
            Treat the Implant as a Natural Tooth
          </h2>
          <p className="mt-7 text-base leading-8 text-muted-foreground md:text-lg">
            AQB clinical care does not end with implant placement or
            restoration. Long-term observation and regular maintenance remain
            important parts of implant management.
          </p>
          <p className="mt-5 text-base leading-8 text-muted-foreground md:text-lg">
            The implant and surrounding tissues should be monitored
            continuously, with attention to oral hygiene, occlusion, and
            changes in the individual clinical condition. As with natural
            teeth, continuing professional care supports long-term management.
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
