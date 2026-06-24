"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/motion/FadeIn";

export function CtaSection() {
  const t = useTranslations("cta");

  return (
    <section className="w-full bg-navy">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 xl:px-12 py-20 lg:py-24">
        <FadeIn direction="up" className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
            {t("description")}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded bg-white px-8 py-3.5 text-sm font-semibold text-navy hover:bg-white/90 transition-colors"
          >
            {t("button")}
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
