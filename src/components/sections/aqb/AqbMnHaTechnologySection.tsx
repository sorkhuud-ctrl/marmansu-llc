"use client";

import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/motion/FadeIn";
import Image from "@/components/common/Image";

const processSteps = [
  "processTitanium",
  "processTcpPlasmaSpray",
  "processHydrothermalTreatment",
  "processRecrystallizedSurface",
] as const;

const factCards = [
  ["factThicknessValue", "factThicknessLabel"],
  ["factCrystallinityValue", "factCrystallinityLabel"],
  ["factRatioValue", "factRatioLabel"],
  ["factPatentValue", "factPatentLabel"],
] as const;

export function AqbMnHaTechnologySection() {
  const t = useTranslations("aqb.haTechnology");

  return (
    <section className="w-full bg-background border-t border-border">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 xl:px-12 py-20 lg:py-28">
        <div className="space-y-20 lg:space-y-28">
          <FadeIn direction="up">
            <div className="max-w-4xl space-y-6">
              <p className="text-xs font-semibold tracking-[0.15em] text-accent uppercase">
                {t("eyebrow")}
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-navy leading-tight">
                {t("surfaceImportanceTitle")}
              </h2>
              <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                <p>{t("surfaceImportanceBody1")}</p>
                <p>{t("surfaceImportanceBody2")}</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="up">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-semibold text-navy leading-tight">
                  {t("haCoatingQuestionTitle")}
                </h3>
                <p className="text-5xl md:text-6xl font-semibold text-accent leading-none">
                  {t("haCoatingAnswer")}
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {t("haCoatingIntro")}
                </p>
              </div>

              <div className="grid gap-0 border-y border-border">
                <article className="py-7 md:py-8 border-b border-border">
                  <p className="text-xs font-semibold tracking-[0.15em] text-accent uppercase">
                    01
                  </p>
                  <h4 className="mt-3 text-lg font-semibold text-navy leading-snug">
                    {t("titaniumSurfaceCardTitle")}
                  </h4>
                  <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                    {t("titaniumSurfaceCardBody")}
                  </p>
                </article>
                <article className="py-7 md:py-8">
                  <p className="text-xs font-semibold tracking-[0.15em] text-accent uppercase">
                    02
                  </p>
                  <h4 className="mt-3 text-lg font-semibold text-navy leading-snug">
                    {t("bioactiveCoatingCardTitle")}
                  </h4>
                  <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                    {t("bioactiveCoatingCardBody")}
                  </p>
                </article>
              </div>
            </div>
            <p className="mt-8 max-w-4xl border-l-2 border-accent pl-5 text-lg md:text-xl font-semibold text-navy leading-relaxed">
              {t("aqbTechnologyEmphasis")}
            </p>
            <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-12">
              <figure className="min-w-0">
                <div className="flex aspect-[444/293] items-center justify-center border border-border bg-white p-4">
                  <Image
                    src="/images/aqb-regular-ha-sem.png"
                    alt=""
                    width={443}
                    height={292}
                    sizes="(max-width: 1023px) calc(100vw - 2rem), 444px"
                    className="h-auto w-auto max-h-full max-w-full object-contain"
                  />
                </div>
                <figcaption className="mt-4 text-center">
                  <p className="text-base font-semibold text-navy">
                    Ердийн гидроксиапатит (HA) бүрхүүл
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">SEM зураг</p>
                </figcaption>
              </figure>

              <figure className="min-w-0">
                <div className="flex aspect-[444/293] items-center justify-center border border-border bg-white p-4">
                  <Image
                    src="/images/aqb-recrystallized-ha-sem.png"
                    alt=""
                    width={444}
                    height={293}
                    sizes="(max-width: 1023px) calc(100vw - 2rem), 444px"
                    className="h-auto w-auto max-h-full max-w-full object-contain"
                  />
                </div>
                <figcaption className="mt-4 text-center">
                  <p className="text-base font-semibold text-navy">
                    Дахин талстжуулсан гидроксиапатит (HA) бүрхүүл
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">SEM зураг</p>
                </figcaption>
              </figure>
            </div>
          </FadeIn>

          <FadeIn direction="up">
            <div className="max-w-4xl space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-navy leading-tight">
                {t("haTitle")}
              </h3>
              <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                <p>{t("haBody1")}</p>
                <p>{t("haBody2")}</p>
                <p>{t("haBody3")}</p>
              </div>
              <p className="border-l-2 border-accent pl-5 text-lg md:text-xl font-semibold text-navy leading-relaxed">
                {t("haEmphasis")}
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="up">
            <div className="bg-navy px-6 py-10 sm:px-10 lg:px-14 lg:py-16">
              <div className="max-w-5xl space-y-8">
                <p className="text-xs font-semibold tracking-[0.15em] text-accent uppercase">
                  {t("innovationLabel")}
                </p>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight">
                  {t("innovationTitle")}
                </h3>
                <p className="max-w-4xl text-base md:text-lg text-white/75 leading-relaxed">
                  {t("innovationBody")}
                </p>

                <ol
                  className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
                  aria-label={t("processLabel")}
                >
                  {processSteps.map((step, index) => (
                    <li
                      key={step}
                      className="relative border border-white/20 bg-white px-5 py-5 text-lg font-bold leading-snug text-navy md:text-xl"
                    >
                      <span className="mb-5 block text-2xl font-semibold tracking-[0.15em] text-accent">
                        0{index + 1}
                      </span>
                      {t(step)}
                      {index < processSteps.length - 1 ? (
                        <span
                          className="hidden lg:block absolute -right-3 top-1/2 z-20 -translate-y-1/2 text-5xl text-accent"
                          aria-hidden="true"
                        >
                          →
                        </span>
                      ) : null}
                    </li>
                  ))}
                </ol>

                <p className="max-w-4xl border-l-2 border-accent pl-5 text-base md:text-lg font-semibold text-white leading-relaxed">
                  {t("innovationResult")}
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="up">
            <div className="space-y-8">
              <h3 className="text-2xl md:text-3xl font-semibold text-navy">
                {t("factsTitle")}
              </h3>
              <dl className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {factCards.map(([value, label]) => (
                  <div
                    key={value}
                    className="border border-border bg-navy px-5 py-7 sm:px-6 lg:px-7"
                  >
                    <dt className="text-2xl font-semibold text-white leading-tight">
                      {t(value)}
                    </dt>
                    <dd className="mt-3 text-sm text-white/75 leading-relaxed">
                      {t(label)}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
