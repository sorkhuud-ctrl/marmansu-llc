"use client";

import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/motion/FadeIn";
import Link from "next/link";

export function AqbInquirySection() {
  const t = useTranslations("aqb.inquiry");

  return (
    <section className="w-full bg-background border-t border-border">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 xl:px-12 py-24 lg:py-32">
        <FadeIn direction="up">
          <div className="space-y-8 max-w-3xl">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-navy mb-6">
                {t("title")}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                {t("description")}
              </p>
            </div>

            <div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-navy text-background font-semibold hover:bg-navy/90 transition-colors"
              >
                {t("ctaLabel")}
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
