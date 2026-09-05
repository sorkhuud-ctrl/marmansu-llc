"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { FadeIn } from "@/components/motion/FadeIn";

export function PartnershipSection() {
  const t = useTranslations();

  return (
    <section className="w-full bg-background">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 xl:px-12 py-20 lg:py-28">
        <FadeIn direction="up">
          <div className="border-t border-border pt-12 lg:pt-16">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-4">
                  {t("partnership.label")}
                </p>
                <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-6 leading-tight">
                  {t("partnership.title")}
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {t("partnership.description")}
                </p>
              </div>

              <div className="flex items-center justify-start lg:justify-end">
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-sm border border-navy px-6 py-2.5 text-sm font-medium text-navy hover:bg-navy/5 transition-colors"
                >
                  {t("partnership.cta")}
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
