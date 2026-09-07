"use client";

import Image from "@/components/common/Image";
import { useTranslations } from "next-intl";

const ISO_STANDARD = "ISO 13485:2016";

export function AqbMnClinicalPracticeSection() {
  const t = useTranslations("aqb.clinicalPractice");
  const [qualityPrefix, qualitySuffix] = t("qualityBody").split(ISO_STANDARD);

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

          <div className="grid gap-10 border-y border-border py-10 md:grid-cols-[1fr_1fr_auto] md:items-end md:gap-8">
            <figure className="flex flex-col items-center gap-4">
              <Image
                src="/images/aqb-recrystallized-ha-manufacturing.webp"
                alt=""
                width={240}
                height={180}
                className="h-auto w-full max-w-[240px] object-contain"
              />
              <figcaption className="text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                  RE-CRYSTALLIZED HA
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Үйлдвэрлэлийн процесс
                </p>
              </figcaption>
            </figure>

            <figure className="flex flex-col items-center gap-4">
              <Image
                src="/images/aqb-quality-microscope-inspection.webp"
                alt=""
                width={240}
                height={180}
                className="h-auto w-full max-w-[240px] object-contain"
              />
              <figcaption className="text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                  QUALITY INSPECTION
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Чанарын хяналт
                </p>
              </figcaption>
            </figure>

            <figure className="flex flex-col items-center gap-4">
              <Image
                src="/images/aqb-iso-13485.webp"
                alt=""
                width={130}
                height={200}
                className="h-auto w-full max-w-[130px] object-contain"
              />
              <figcaption className="text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                  ISO 13485:2016
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Чанарын удирдлага
                </p>
              </figcaption>
            </figure>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <article className="flex h-full flex-col border border-border p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                {t("usageLabel")}
              </p>
              <h3 className="mt-6 text-xl font-semibold leading-tight text-navy">
                {t("usageTitle")}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {t("usageBody")}
              </p>
            </article>

            <article className="flex h-full flex-col border border-border p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                {t("japanLabel")}
              </p>
              <h3 className="mt-6 text-xl font-semibold leading-tight text-navy">
                {t("japanTitle")}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {t("japanBody")}
              </p>
            </article>

            <article className="flex h-full flex-col border border-border p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                {t("qualityLabel")}
              </p>
              <h3 className="mt-6 text-xl font-semibold leading-tight text-navy">
                {t("qualityTitle")}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {qualityPrefix}
                <span className="font-semibold text-navy">{ISO_STANDARD}</span>
                {qualitySuffix}
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
