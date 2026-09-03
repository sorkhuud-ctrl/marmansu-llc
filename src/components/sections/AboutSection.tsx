"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/motion/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";

export function AboutSection() {
  const t = useTranslations("about");

  return (
    <section className="w-full bg-secondary">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 xl:px-12 py-20 lg:py-28">
        <div className="mx-auto max-w-3xl">
          <FadeIn direction="up">
            <div className="space-y-6">
              <SectionHeading
                label={t("label")}
                title={t("title")}
                description={t("description")}
              />
              <Link
                href="/about"
                className="inline-flex items-center text-sm font-medium text-navy hover:underline"
              >
                {t("cta")} →
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
