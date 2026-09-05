"use client";

import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/motion/FadeIn";

export function AqbInMongoliaSection() {
  const t = useTranslations("aqb.inMongolia");

  return (
    <section className="w-full bg-background border-t border-border">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 xl:px-12 py-24 lg:py-32">
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

            <div className="grid md:grid-cols-3 gap-12 lg:gap-16 max-w-3xl">
              <FadeIn direction="up" delay={0.1}>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-navy">
                    {t("role1Title")}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {t("role1Description")}
                  </p>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.15}>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-navy">
                    {t("role2Title")}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {t("role2Description")}
                  </p>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.2}>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-navy">
                    {t("role3Title")}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {t("role3Description")}
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
