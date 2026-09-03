"use client";

import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/motion/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";

const serviceKeys = [
  "distribution",
  "regulatory",
  "education"
];

export function ServicesSection() {
  const t = useTranslations();

  return (
    <section className="w-full bg-background">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 xl:px-12 py-20 lg:py-28">
        <FadeIn direction="up">
          <SectionHeading
            label={t("services.label")}
            title={t("services.title")}
            description={t("services.description")}
          />
        </FadeIn>

        <div className="mt-16 lg:mt-20">
          <div className="grid lg:grid-cols-3 gap-0 lg:gap-12">
            {serviceKeys.map((service, index) => (
              <FadeIn key={service} direction="up" delay={index * 0.05}>
                <div className="pb-8 lg:pb-0 border-b lg:border-b-0">
                  <h3 className="text-base font-semibold text-navy mb-4">
                    {t(`service.${service}.title`)}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(`service.${service}.description`)}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
