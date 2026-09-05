"use client";

import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/motion/FadeIn";

export function AqbKeyFeaturesSection() {
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

            <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
              <FadeIn direction="up" delay={0.1}>
                <div className="space-y-6 flex flex-col h-full">
                  <div className="inline-block">
                    <p className="text-sm font-semibold text-accent tracking-[0.1em] uppercase">
                      {t("feature1Label")}
                    </p>
                  </div>
                  <div className="min-h-16">
                    <h3 className="text-xl md:text-2xl font-semibold text-navy leading-tight">
                      {t("feature1Title")}
                    </h3>
                  </div>
                  <div className="h-56 flex items-center justify-center gap-4">
                    <img
                      src="/images/aqb-one-piece-01.webp"
                      alt={t("feature1Title")}
                      className="object-contain max-h-full max-w-[140px]"
                    />
                    <img
                      src="/images/aqb-one-piece-02.webp"
                      alt={t("feature1Title")}
                      className="object-contain max-h-full max-w-[140px]"
                    />
                  </div>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {t("feature1Description")}
                  </p>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.15}>
                <div className="space-y-6 flex flex-col h-full">
                  <div className="inline-block">
                    <p className="text-sm font-semibold text-accent tracking-[0.1em] uppercase">
                      {t("feature2Label")}
                    </p>
                  </div>
                  <div className="min-h-16">
                    <h3 className="text-xl md:text-2xl font-semibold text-navy leading-tight">
                      {t("feature2Title")}
                    </h3>
                  </div>
                  <div className="h-56 flex items-center justify-center w-full overflow-visible">
                    <img
                      src="/images/aqb-about09-surface.webp"
                      alt={t("feature2Title")}
                      className="object-contain max-h-full w-auto"
                      style={{ maxWidth: "min(90%, 500px)" }}
                    />
                  </div>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {t("feature2Description")}
                  </p>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.2}>
                <div className="space-y-6 flex flex-col h-full">
                  <div className="inline-block">
                    <p className="text-sm font-semibold text-accent tracking-[0.1em] uppercase">
                      {t("feature3Label")}
                    </p>
                  </div>
                  <div className="min-h-16">
                    <h3 className="text-xl md:text-2xl font-semibold text-navy leading-tight">
                      {t("feature3Title")}
                    </h3>
                  </div>
                  <div className="h-56 flex items-center justify-center w-full overflow-visible">
                    <img
                      src="/images/aqb-early-biological-integration.png"
                      alt={t("feature3Title")}
                      className="object-contain max-h-full w-auto"
                      style={{ maxWidth: "min(88%, 480px)" }}
                    />
                  </div>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {t("feature3Description")}
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
