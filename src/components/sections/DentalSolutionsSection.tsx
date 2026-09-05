"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/motion/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";

export function DentalSolutionsSection() {
  const t = useTranslations("dentalSolutions");

  return (
    <section className="w-full bg-secondary">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 xl:px-12 py-20 lg:py-28">
        <FadeIn direction="up">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <SectionHeading
                label={t("label")}
                title={t("title")}
                description={t("description")}
              />

              <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
                {t("body")}
              </p>

              <div className="mt-8">
                <Link
                  href="/products"
                  className="inline-flex items-center rounded-sm border border-navy px-6 py-2 text-sm font-medium text-navy hover:bg-navy/5 transition-colors"
                >
                  {t("explore")}
                </Link>
              </div>
            </div>

            <div>
              <div className="max-w-xl">
                <p className="text-sm font-semibold text-muted-foreground mb-4">{t("featuredMaterials")}</p>
                <div className="border-t border-border">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center py-6">
                    <div className="min-w-[88px] min-h-[88px] md:min-w-[120px] md:min-h-[120px] flex items-center justify-center">
                      <img src="/images/vitapex.jpg" alt="VITAPEX product" className="max-h-[140px] md:max-h-[200px] lg:max-h-[260px] w-auto object-contain" />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-navy">VITAPEX</p>
                    </div>
                  </div>

                  <div className="border-t border-border grid grid-cols-1 sm:grid-cols-2 gap-6 items-center py-6">
                    <div className="min-w-[88px] min-h-[88px] md:min-w-[120px] md:min-h-[120px] flex items-center justify-center">
                      <img src="/images/calcipex-ii.jpg" alt="CALCIPEX II product" className="max-h-[88px] md:max-h-[120px] lg:max-h-[160px] w-auto object-contain" />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-navy">CALCIPEX II</p>
                    </div>
                  </div>

                  <div className="border-t border-border grid grid-cols-1 sm:grid-cols-2 gap-6 items-center py-6">
                    <div className="min-w-[88px] min-h-[88px] md:min-w-[120px] md:min-h-[120px] flex items-center justify-center">
                      <img src="/images/periodon-v2.jpg" alt="PERIODON product" className="max-h-[110px] md:max-h-[150px] lg:max-h-[200px] w-auto object-contain" />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-navy">PERIODON</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-sm font-semibold text-navy">{t("equipment")}</p>
                  <p className="text-sm text-muted-foreground mt-2">{t("equipmentDescription")}</p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
