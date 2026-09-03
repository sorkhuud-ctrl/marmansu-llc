"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/motion/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";

const partners = [
  { key: "japanese" },
  { key: "academic" },
  { key: "mongolian" },
];

export function PartnersSection() {
  const t = useTranslations();

  return (
    <section className="w-full bg-secondary">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 xl:px-12 py-20 lg:py-28">
        <FadeIn direction="up">
          <SectionHeading
            label={t("partners.label")}
            title={t("partners.title")}
            description={t("partners.description")}
          />
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {partners.map((partner, index) => (
            <FadeIn key={partner.key} direction="up" delay={index * 0.05}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-md p-7 shadow-sm hover:shadow transition-shadow"
              >
                <h3 className="text-base font-semibold text-navy mb-2">
                  {t(`partner.${partner.key}.title`)}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(`partner.${partner.key}.description`)}
                </p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
