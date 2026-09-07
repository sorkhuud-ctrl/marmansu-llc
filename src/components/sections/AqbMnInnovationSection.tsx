"use client";

import Image from "@/components/common/Image";
import { useTranslations } from "next-intl";

const innovationPoints = [
  {
    label: "surfaceLabel",
    title: "surfaceTitle",
    description: "surfaceDescription",
  },
  {
    label: "conceptLabel",
    title: "conceptTitle",
    description: "conceptDescription",
  },
  {
    label: "historyLabel",
    title: "historyTitle",
    description: "historyDescription",
  },
] as const;

export function AqbMnInnovationSection() {
  const t = useTranslations("aqb.innovation");

  return (
    <section className="w-full border-t border-border bg-background">
      <div className="mx-auto max-w-[1280px] px-4 py-20 sm:px-6 lg:px-8 lg:py-28 xl:px-12">
        <div className="space-y-16">
          <div className="max-w-4xl space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              {t("eyebrow")}
            </p>
            <h2 className="text-3xl font-semibold leading-tight text-navy md:text-4xl lg:text-5xl">
              {t("title")}
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              {t("intro")}
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.35fr)_minmax(0,0.65fr)] lg:items-stretch">
            <figure
              className="flex min-h-72 items-center justify-center p-6 lg:justify-start"
              aria-hidden="true"
            >
              <Image
                src="/images/aqb-innovation-one-piece.png"
                alt=""
                width={1024}
                height={1535}
                className="max-h-[32rem] h-auto w-auto max-w-full object-contain lg:max-h-[38rem]"
              />
            </figure>
            <div className="border border-border lg:grid lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)]">
              {innovationPoints.map((point, index) => (
                <div key={point.label} className="contents">
                  <article className="p-6 sm:p-8 lg:p-10">
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                      {t(point.label)}
                    </p>
                    <h3 className="mt-5 text-xl font-semibold leading-tight text-navy md:text-2xl">
                      {t(point.title)}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                      {t(point.description)}
                    </p>
                  </article>
                  {index < innovationPoints.length - 1 ? (
                    <div
                      className="flex h-12 items-center justify-center border-y border-border text-xl font-semibold text-accent lg:h-auto lg:w-12 lg:border-x lg:border-y-0"
                      aria-hidden="true"
                    >
                      +
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          <p className="max-w-5xl border-l-2 border-accent pl-5 text-xl font-semibold leading-relaxed text-navy md:text-2xl">
            {t("closing")}
          </p>
        </div>
      </div>
    </section>
  );
}
