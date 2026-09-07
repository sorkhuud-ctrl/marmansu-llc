"use client";

import { useTranslations } from "next-intl";

const pillars = [
  {
    label: "distributionLabel",
    title: "distributionTitle",
    description: "distributionDescription",
  },
  {
    label: "educationLabel",
    title: "educationTitle",
    description: "educationDescription",
  },
  {
    label: "cooperationLabel",
    title: "cooperationTitle",
    description: "cooperationDescription",
  },
] as const;

export function AqbMnInMongoliaSection() {
  const t = useTranslations("aqb.mongoliaDistribution");

  return (
    <section className="w-full border-t border-border bg-background">
      <div className="mx-auto max-w-[1280px] px-4 py-20 sm:px-6 lg:px-8 lg:py-28 xl:px-12">
        <div className="space-y-16">
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

          <div className="grid gap-10 md:grid-cols-3 lg:gap-16">
            {pillars.map((pillar) => (
              <article
                key={pillar.label}
                className="border-l-2 border-accent pl-5"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                  {t(pillar.label)}
                </p>
                <h3 className="mt-5 text-xl font-semibold leading-tight text-navy">
                  {t(pillar.title)}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {t(pillar.description)}
                </p>
              </article>
            ))}
          </div>

          <p className="max-w-4xl border-l-2 border-accent pl-5 text-lg font-semibold leading-relaxed text-navy md:text-xl">
            {t("closing")}
          </p>
        </div>
      </div>
    </section>
  );
}
