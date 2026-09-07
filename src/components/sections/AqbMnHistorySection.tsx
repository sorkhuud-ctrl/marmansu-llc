"use client";

import { useTranslations } from "next-intl";

const timelineSteps = [
  {
    year: "year1981",
    title: "year1981Title",
    description: "year1981Description",
  },
  {
    year: "year1988",
    title: "year1988Title",
    description: "year1988Description",
  },
  {
    year: "year1994",
    title: "year1994Title",
    description: "year1994Description",
  },
  {
    year: "year2026",
    title: "year2026Title",
    description: "year2026Description",
  },
] as const;

export function AqbMnHistorySection() {
  const t = useTranslations("aqb.history");

  return (
    <section className="w-full border-t border-border bg-background">
      <div className="mx-auto max-w-[1280px] px-4 py-20 sm:px-6 lg:px-8 lg:py-28 xl:px-12">
        <div className="space-y-16 lg:space-y-20">
          <div className="max-w-4xl space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              {t("eyebrow")}
            </p>
            <h2 className="text-3xl font-semibold text-navy md:text-4xl lg:text-5xl">
              {t("title")}
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              {t("intro")}
            </p>
          </div>

          <ol className="grid gap-10 border-y border-border py-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:py-10">
            {timelineSteps.map((step) => (
              <li
                key={step.year}
                className="border-l-2 border-accent pl-5 lg:border-l lg:border-border lg:px-6 lg:first:border-l-0 lg:first:pl-0"
              >
                <p className="text-4xl font-semibold leading-none text-navy">
                  {t(step.year)}
                </p>
                <h3 className="mt-5 text-lg font-semibold leading-snug text-navy">
                  {t(step.title)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {t(step.description)}
                </p>
              </li>
            ))}
          </ol>

          <p className="max-w-4xl border-l-2 border-accent pl-5 text-lg font-semibold leading-relaxed text-navy md:text-xl">
            {t("closing")}
          </p>
        </div>
      </div>
    </section>
  );
}
