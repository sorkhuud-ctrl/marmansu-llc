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

const aqbImplants = [
  {
    name: "1 Piece Type",
    src: "/images/aqb-product01.webp",
    specifications: [
      { label: "outerDiameter", value: "3 / 4 / 5 mm" },
      { label: "coveredPart", value: "6 / 8 / 10 / 12 / 14 mm" },
      { label: "abutment", value: "6 / 7 / 8 / 9 / 11 mm" },
    ],
  },
  {
    name: "1 Piece T Type",
    src: "/images/aqb-one-piece-02.webp",
    specifications: [
      { label: "outerDiameter", value: "3.4 / 4.4 / 5.4 mm" },
      { label: "coveredPart", value: "6 / 8 / 10 / 12 / 14 mm" },
      { label: "abutment", value: "6 / 7 / 8 / 9 / 11 mm" },
    ],
  },
  {
    name: "2 Piece Type",
    src: "/images/aqb-2-piece-type.webp",
    specifications: [
      { label: "outerDiameter", value: "4 / 5 mm" },
      { label: "overallLength", value: "8 / 10 / 12 mm" },
      { label: "collar", value: "1 / 2 mm" },
    ],
  },
  {
    name: "2 Piece T Type",
    src: "/images/aqb-2-piece-t-type.webp",
    specifications: [
      { label: "outerDiameterOneTwo", value: "1: 5 mm / 2: 4 mm" },
      { label: "span", value: "12 / 14 mm" },
      { label: "colorSection", value: "1 / 2 / 3 / 5 mm" },
    ],
  },
];

const aqbTools = [
  "AQB round bar / AQB guide drill",
  "AQB direction checker",
  "AQB spiral drill",
  "AQB counter drill",
  "AQB end mill reamer",
  "AQB reamer extension",
  "AQB finger driver",
  "AQB free wrench",
  "AQB free wrench adapter",
  "AQB Alarm Gauge",
  "AQB Reamer",
  "AQB Circular Knife",
  "AQB Fixer",
  "AQB Fixer Support",
  "AQB Fixer Joint",
  "AQB Fixer Extension",
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

        <div
          id="aqb-implant-system"
          className="mt-16 border-t border-border pt-12"
          aria-labelledby="aqb-implant-system-title"
        >
          <h2
            id="aqb-implant-system-title"
            className="text-2xl font-semibold text-navy md:text-3xl"
          >
            {t("aqb.title")}
          </h2>
          <p className="mt-3 text-sm font-semibold text-muted-foreground">
            {t("aqb.lineup")}
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {aqbImplants.map((implant, index) => (
              <FadeIn key={implant.name} direction="up" delay={index * 0.05}>
                <article className="flex h-[22rem] flex-col rounded-lg border border-border bg-white p-6 shadow-sm">
                  <div className="relative flex-1">
                    <Image
                      src={implant.src}
                      alt={`AQB ${implant.name}`}
                      fill
                      sizes="(min-width: 1024px) 270px, (min-width: 640px) 45vw, 100vw"
                      className="object-contain"
                    />
                  </div>
                  <div className="pt-5">
                    <h3 className="text-center text-lg font-semibold text-navy">
                      {implant.name}
                    </h3>
                    <dl className="mt-4 grid grid-cols-3 divide-x divide-border border-t border-border pt-3">
                      {implant.specifications.map((specification) => (
                        <div key={specification.label} className="px-1 text-center">
                          <dt className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                            {t(`aqb.specifications.${specification.label}`)}
                          </dt>
                          <dd className="mt-1 text-xs font-medium leading-snug text-navy">
                            {specification.value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-12" aria-labelledby="aqb-tools-title">
          <h2 id="aqb-tools-title" className="text-2xl font-semibold text-navy md:text-3xl">
            {t("aqb.tools.title")}
          </h2>
          <div className="mt-6 grid gap-8 rounded-lg border border-border bg-white p-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:p-8">
            <div className="relative min-h-64">
              <Image
                src="/images/aqb-tool-full-set.webp"
                alt={t("aqb.tools.fullSet")}
                fill
                sizes="(min-width: 1024px) 600px, 100vw"
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-navy">{t("aqb.tools.fullSet")}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t("aqb.tools.list")}</p>
              <ul className="mt-5 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                {aqbTools.map((tool) => (
                  <li key={tool} className="border-t border-border pt-3 text-sm text-muted-foreground">
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
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
