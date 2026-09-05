"use client";

import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/motion/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";

const conceptKeys = ["clinical", "handson", "longterm"];

export function EducationSection() {
  const t = useTranslations();

  return (
    <section className="w-full bg-background">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 xl:px-12 py-20 lg:py-28">
        <FadeIn direction="up">
          <div className="max-w-2xl">
            <SectionHeading
              label={t("education.label")}
              title={t("education.title")}
              description={t("education.description")}
            />

            <div className="mt-12">
              <div className="border-t border-border">
                {conceptKeys.map((concept, index) => (
                  <FadeIn key={concept} direction="up" delay={index * 0.05}>
                    <div className="py-6 border-b border-border last:border-b-0">
                      <h4 className="text-sm font-semibold text-navy mb-2">
                        {t(`education.concept.${concept}.title`)}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {t(`education.concept.${concept}.description`)}
                      </p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

