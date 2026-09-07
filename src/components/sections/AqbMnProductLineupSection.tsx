"use client";

import Image from "@/components/common/Image";
import { useTranslations } from "next-intl";

const products = [
  {
    label: "onePieceLabel",
    title: "onePieceTitle",
    description: "onePieceDescription",
    image: "/images/aqb-one-piece-01.webp",
  },
  {
    label: "onePieceTTypeLabel",
    title: "onePieceTTypeTitle",
    description: "onePieceTTypeDescription",
    image: "/images/aqb-one-piece-t-type.webp",
  },
  {
    label: "twoPieceLabel",
    title: "twoPieceTitle",
    description: "twoPieceDescription",
    image: "/images/aqb-2-piece-t-type.webp",
  },
  {
    label: "twoPieceTTypeLabel",
    title: "twoPieceTTypeTitle",
    description: "twoPieceTTypeDescription",
    image: "/images/aqb-2-piece-type.webp",
  },
] as const;

export function AqbMnProductLineupSection() {
  const t = useTranslations("aqb.productLineup");

  return (
    <section className="w-full border-t border-border bg-background">
      <div className="mx-auto max-w-[1280px] px-4 py-20 sm:px-6 lg:px-8 lg:py-28 xl:px-12">
        <div className="space-y-16">
          <div className="max-w-4xl space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              {t("eyebrow")}
            </p>
            <h2 className="text-3xl font-semibold text-navy md:text-4xl lg:text-5xl">
              {t("title")}
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              {t("intro")}
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {products.map((product) => (
              <article
                key={product.label}
                className="flex h-full min-h-[26rem] flex-col border border-border p-6 sm:p-8"
              >
                {product.image ? (
                  <div className="flex h-52 items-center justify-center">
                    <Image
                      src={product.image}
                      alt={t(product.title)}
                      className="h-full w-auto object-contain"
                      width={180}
                      height={208}
                    />
                  </div>
                ) : null}
                <div className={product.image ? "mt-8" : ""}>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                    {t(product.label)}
                  </p>
                  <h3 className="mt-5 text-xl font-semibold leading-tight text-navy md:text-2xl">
                    {t(product.title)}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    {t(product.description)}
                  </p>
                </div>
                <span className="mt-auto pt-8 text-sm font-semibold text-navy">
                  {t("cta")}
                </span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
