const principles = [
  {
    number: "01",
    title: "START WITH EXISTING ANATOMY",
    description:
      "Treatment planning begins with careful consideration of the patient’s available bone and surrounding anatomical structures.",
  },
  {
    number: "02",
    title: "PRESERVE WHERE APPROPRIATE",
    description:
      "The clinical approach seeks to preserve and make effective use of existing bone wherever this is appropriate for the individual case.",
  },
  {
    number: "03",
    title: "CASE-BY-CASE JUDGMENT",
    description:
      "The appropriate surgical and restorative approach depends on the patient’s anatomy, bone condition, treatment plan, and professional clinical judgment.",
  },
];

export function AqbBonePreservationSection() {
  return (
    <section
      className="w-full border-t border-border bg-background"
      aria-labelledby="aqb-bone-preservation-title"
    >
      <div className="mx-auto grid max-w-[1280px] gap-16 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-24 lg:px-8 lg:py-24 xl:px-12">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#66836d]">
            CLINICAL PHILOSOPHY
          </p>
          <h2
            id="aqb-bone-preservation-title"
            className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.03em] text-navy md:text-5xl"
          >
            Respecting Existing Bone
          </h2>
          <p className="mt-7 text-base leading-8 text-muted-foreground md:text-lg">
            AQB clinical philosophy places importance on making effective use
            of the patient’s existing anatomy and preserving existing bone
            wherever clinically appropriate.
          </p>
          <p className="mt-5 text-base leading-8 text-muted-foreground md:text-lg">
            Rather than treating implant placement as an isolated mechanical
            procedure, treatment planning begins with understanding the
            available bone, surrounding anatomy, and the individual clinical
            situation.
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

        <p className="text-base leading-8 text-muted-foreground md:col-span-2 md:text-lg">
          Existing Bone Preservation is therefore a clinical philosophy — not
          a promise to avoid additional procedures in every case.
        </p>
      </div>
    </section>
  );
}
