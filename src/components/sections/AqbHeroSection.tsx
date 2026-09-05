"use client";

import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/motion/FadeIn";

export function AqbHeroSection() {
  const t = useTranslations("aqb.hero");

  return (
    <section className="w-full bg-background">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 xl:px-12 pt-24 lg:pt-32 pb-16 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          <FadeIn direction="up">
            <div className="space-y-8">
              <div>
                <p className="text-xs font-semibold tracking-[0.15em] text-accent uppercase">
                  {t("eyebrow")}
                </p>
              </div>

              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-navy leading-[1.08]">
                  {t("title")}
                </h1>
              </div>

              <div>
                <p className="text-2xl md:text-3xl font-semibold text-navy italic">
                  {t("philosophy")}
                </p>
              </div>

              <div>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                  {t("body")}
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.1}>
            <div className="flex items-center justify-center lg:justify-end">
              <figure className="w-full flex items-center justify-center" aria-hidden="true">
                <img
                  src="/images/aqb-about05.webp"
                  alt={t("title")}
                  className="block mx-auto object-contain max-h-[500px] md:max-h-[600px] lg:max-h-[700px]"
                  style={{ width: "auto" }}
                />
              </figure>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
