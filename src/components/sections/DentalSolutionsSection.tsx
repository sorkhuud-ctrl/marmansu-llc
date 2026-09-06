"use client";

import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/motion/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import Image from "@/components/common/Image";

const dentalMaterials = [
  {
    name: "VITAPEX",
    src: "/images/vitapex.jpg",
    alt: "VITAPEX product",
  },
  {
    name: "CALCIPEX II",
    src: "/images/calcipex-ii.jpg",
    alt: "CALCIPEX II product",
  },
  {
    name: "PERIODON",
    src: "/images/periodon-v2.jpg",
    alt: "PERIODON product",
  },
];

export function DentalSolutionsSection() {
  const t = useTranslations("dentalSolutions");

  return (
    <section
      id="dental-materials"
      className="w-full scroll-mt-20 bg-secondary"
      aria-labelledby="dental-materials-title"
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 xl:px-12 py-20 lg:py-28">
        <FadeIn direction="up">
          <div className="max-w-3xl">
            <SectionHeading
              label={t("label")}
              title={t("title")}
              description={t("description")}
            />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              {t("body")}
            </p>
          </div>
        </FadeIn>

        <div className="mt-12">
          <p className="mb-4 text-sm font-semibold text-muted-foreground">
            {t("featuredMaterials")}
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {dentalMaterials.map((material, index) => (
              <FadeIn key={material.name} direction="up" delay={index * 0.05}>
                <article className="flex h-[22rem] flex-col rounded-lg border border-border bg-white p-6 shadow-sm sm:h-[25rem]">
                  <div className="relative flex-1">
                    <Image
                      src={material.src}
                      alt={material.alt}
                      fill
                      sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 100vw"
                      className="object-contain"
                    />
                  </div>
                  <h3 className="pt-5 text-center text-lg font-semibold text-navy">
                    {material.name}
                  </h3>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6">
          <p className="text-sm font-semibold text-navy">{t("equipment")}</p>
          <p className="mt-2 text-sm text-muted-foreground">
            {t("equipmentDescription")}
          </p>
        </div>
      </div>
    </section>
  );
}
