"use client";

import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/motion/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";

export function ContactSection() {
  const t = useTranslations();

  return (
    <section className="w-full bg-background">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 xl:px-12 py-20 lg:py-28">
        <FadeIn direction="up">
          <div className="max-w-2xl">
            <SectionHeading
              label={t("contact.label")}
              title={t("contact.title")}
              description={t("contact.intro")}
            />

            <div className="mt-12 space-y-8">
              <div>
                <h3 className="text-sm font-semibold text-navy mb-3">Phone</h3>
                <div className="space-y-2">
                  <a
                    href="tel:+976-77182255"
                    className="text-sm text-muted-foreground hover:text-navy transition-colors"
                  >
                    7718 2255
                  </a>
                  <br />
                  <a
                    href="tel:+976-99440974"
                    className="text-sm text-muted-foreground hover:text-navy transition-colors"
                  >
                    9944 0974
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-navy mb-3">Email</h3>
                <a
                  href="mailto:marmansullc@gmail.com"
                  className="text-sm text-muted-foreground hover:text-navy transition-colors"
                >
                  marmansullc@gmail.com
                </a>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-navy mb-3">Address</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t("contact.address")}
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
