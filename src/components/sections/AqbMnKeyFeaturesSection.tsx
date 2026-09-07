"use client";

import Image from "@/components/common/Image";
import { FadeIn } from "@/components/motion/FadeIn";
import { useTranslations } from "next-intl";

export function AqbMnKeyFeaturesSection() {
  const t = useTranslations("aqb.keyFeatures");

  return (
    <section className="w-full bg-background border-t border-border">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 xl:px-12 pt-16 lg:pt-24 pb-24 lg:pb-32">
        <FadeIn direction="up">
          <div className="space-y-16">
            <div>
              <p className="text-xs font-semibold tracking-[0.15em] text-accent uppercase mb-6">
                {t("eyebrow")}
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-navy">
                {t("title")}
              </h2>
            </div>

            <FadeIn direction="up" delay={0.1}>
              <article className="grid gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-16">
                <div className="flex h-56 items-center justify-center gap-4 lg:h-full lg:min-h-72">
                  <Image
                    src="/images/aqb-one-piece-01.webp"
                    alt={t("feature1Title")}
                    className="max-h-full max-w-[140px] object-contain"
                    width={140}
                    height={280}
                  />
                  <Image
                    src="/images/aqb-one-piece-02.webp"
                    alt={t("feature1Title")}
                    className="max-h-full max-w-[140px] object-contain"
                    width={140}
                    height={280}
                  />
                </div>
                <div className="space-y-6">
                  <p className="text-sm font-semibold text-accent tracking-[0.1em] uppercase">
                    {t("feature1Label")}
                  </p>
                  <h3 className="text-xl md:text-2xl font-semibold text-navy leading-tight">
                    {t("feature1Title")}
                  </h3>
                  <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
                    {t("feature1Description")
                      .split("\n\n")
                      .map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                  </div>
                </div>
              </article>
            </FadeIn>

            <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
              <FadeIn direction="up" delay={0.15}>
                <article className="flex h-full flex-col space-y-6">
                  <p className="text-sm font-semibold text-accent tracking-[0.1em] uppercase">
                    {t("feature2Label")}
                  </p>
                  <h3 className="min-h-16 text-xl md:text-2xl font-semibold text-navy leading-tight">
                    {t("feature2Title")}
                  </h3>
                  <div className="flex h-56 w-full items-center justify-center overflow-visible">
                    <Image
                      src="/images/aqb-about09-surface.webp"
                      alt={t("feature2Title")}
                      className="max-h-full w-auto object-contain"
                      style={{ maxWidth: "min(90%, 500px)" }}
                      width={500}
                      height={224}
                    />
                  </div>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {t("feature2Description")}
                  </p>
                </article>
              </FadeIn>

              <FadeIn direction="up" delay={0.2}>
                <article className="flex h-full flex-col space-y-6">
                  <p className="text-sm font-semibold text-accent tracking-[0.1em] uppercase">
                    {t("feature3Label")}
                  </p>
                  <h3 className="min-h-16 text-xl md:text-2xl font-semibold text-navy leading-tight">
                    {t("feature3Title")}
                  </h3>
                  <div className="flex h-56 w-full items-center justify-center overflow-visible">
                    <Image
                      src="/images/aqb-early-biological-integration.png"
                      alt={t("feature3Title")}
                      className="max-h-full w-auto object-contain"
                      style={{ maxWidth: "min(88%, 480px)" }}
                      width={480}
                      height={224}
                    />
                  </div>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {t("feature3Description")}
                  </p>
                </article>
              </FadeIn>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
