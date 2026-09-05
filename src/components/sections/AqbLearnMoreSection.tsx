"use client";

import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/motion/FadeIn";
import Link from "next/link";

export function AqbLearnMoreSection() {
  const t = useTranslations("aqb.learnMore");

  return (
    <section className="w-full bg-background border-t border-border">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 xl:px-12 py-24 lg:py-32">
        <FadeIn direction="up">
          <div className="space-y-8 max-w-3xl">
            <div>
              <p className="text-xs font-semibold tracking-[0.15em] text-accent uppercase mb-6">
                {t("eyebrow")}
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-navy mb-8">
                {t("title")}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                {t("description")}
              </p>
            </div>

            <div>
              <Link
                href="https://www.aqb.jp/en/top/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 border border-navy text-navy font-semibold hover:bg-navy hover:text-background transition-colors"
              >
                {t("ctaLabel")}
                <svg
                  className="w-5 h-5 ml-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
