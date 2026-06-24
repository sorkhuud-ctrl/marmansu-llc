"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { FadeIn } from "@/components/motion/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";

const products = [
  { key: "pharmaceutical" },
  { key: "dental" },
  { key: "devices" },
  { key: "advanced" },
];

export function ProductsSection() {
  const t = useTranslations();

  return (
    <section className="w-full bg-secondary">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 xl:px-12 py-20 lg:py-28">
        <FadeIn direction="up">
          <SectionHeading
            label={t("products.label")}
            title={t("products.title")}
            description={t("products.description")}
          />
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {products.map((product, index) => (
            <FadeIn key={product.key} direction="up" delay={index * 0.05}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="bg-secondary rounded-lg p-7 hover:bg-white hover:shadow-card-hover transition-all border border-transparent hover:border-border"
              >
                <h3 className="text-lg font-semibold text-navy mb-2">
                  {t(`product.${product.key}.title`)}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {t(`product.${product.key}.description`)}
                </p>
                <span className="text-sm font-medium text-navy">Learn more →</span>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
