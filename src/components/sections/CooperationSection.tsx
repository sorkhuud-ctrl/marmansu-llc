"use client";

import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/motion/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";

const themeKeys = ["industry", "clinical", "longterm"];

export function CooperationSection() {
  const t = useTranslations();

  return (
    <section className="w-full bg-background">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 xl:px-12 py-20 lg:py-28">
        <FadeIn direction="up">
          <div className="max-w-3xl mb-16">
            <SectionHeading
              label={t("cooperation.label")}
              title={t("cooperation.title")}
              description={t("cooperation.description")}
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {themeKeys.map((theme, index) => (
              <FadeIn key={theme} direction="up" delay={index * 0.05}>
                <div className="flex flex-col h-full">
                  <div className="flex items-start gap-6 pb-6 lg:pb-0">
                    <div className="flex-shrink-0">
                      <span className="text-xs font-semibold text-muted-foreground">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <div className="flex-1 border-l border-border pl-6 lg:pl-0 lg:border-l-0">
                      <h3 className="text-base font-semibold text-navy mb-3">
                        {t(`cooperation.theme.${theme}.title`)}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {t(`cooperation.theme.${theme}.description`)}
                      </p>
                    </div>
                  </div>
                  {index !== themeKeys.length - 1 && (
                    <div className="hidden lg:block mt-auto pt-6 border-t border-border" />
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

