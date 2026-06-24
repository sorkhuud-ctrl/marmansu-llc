"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { FadeIn } from "@/components/motion/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";

const newsItems = [
  { key: "distribution", date: "June 2026" },
  { key: "seminar", date: "May 2026" },
  { key: "approval", date: "April 2026" },
];

export function NewsSection() {
  const t = useTranslations();

  return (
    <section className="w-full bg-background">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 xl:px-12 py-20 lg:py-28">
        <FadeIn direction="up">
          <SectionHeading
            label={t("news.label")}
            title={t("news.title")}
            description={t("news.description")}
          />
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {newsItems.map((item, index) => (
            <FadeIn key={item.key} direction="up" delay={index * 0.05}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-lg p-7 shadow-card hover:shadow-card-hover transition-shadow"
              >
                <p className="text-xs font-semibold text-gold mb-3">{item.date}</p>
                <h3 className="text-base font-semibold text-navy mb-2">
                  {t(`newsItem.${item.key}.title`)}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(`newsItem.${item.key}.description`)}
                </p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
