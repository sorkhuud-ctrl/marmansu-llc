import { Link } from "@/i18n/routing";

export function AqbClosingSection() {
  return (
    <section
      className="w-full border-t border-border bg-background"
      aria-labelledby="aqb-closing-title"
    >
      <div className="mx-auto grid max-w-[1280px] gap-16 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-end lg:gap-24 lg:px-8 lg:py-24 xl:px-12">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#66836d]">
            AQB PROFESSIONAL DEVELOPMENT
          </p>
          <h2
            id="aqb-closing-title"
            className="mt-5 max-w-xl text-4xl font-semibold leading-tight tracking-[-0.03em] text-navy md:text-5xl"
          >
            Learning AQB in Clinical Practice
          </h2>
          <p className="mt-7 text-base leading-8 text-muted-foreground md:text-lg">
            Understanding AQB goes beyond the implant itself. Its clinical
            philosophy includes treatment planning, surgical technique,
            occlusal management, postoperative observation, and long-term
            maintenance.
          </p>
          <p className="mt-5 text-base leading-8 text-muted-foreground md:text-lg">
            MARMANSU supports the development of AQB clinical knowledge in
            Mongolia through professional education and continued exchange with
            experienced Japanese AQB clinicians.
          </p>
        </div>

        <div className="lg:pb-1">
          <p className="max-w-md text-base leading-8 text-muted-foreground md:text-lg">
            For dentists and healthcare institutions interested in AQB
            education, clinical information, or professional collaboration.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded bg-navy px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-navy-light"
            >
              AQB Education Inquiry
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded border border-navy px-7 py-3.5 text-sm font-medium text-navy transition-colors hover:bg-navy/5"
            >
              Contact MARMANSU
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
