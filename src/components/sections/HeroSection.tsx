"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { FadeIn } from "@/components/motion/FadeIn";

export function HeroSection() {
  const locale = useLocale();
  const t = useTranslations("hero");
  const isMongolian = locale === "mn";
  const regionalCopy = isMongolian
    ? {
        region: "ЯПОН · МОНГОЛ",
        japan: "ЯПОН",
        japanDescription: "Чанар · Инноваци · Итгэлцэл",
        mongolia: "МОНГОЛ",
        mongoliaDescription: "Өсөлт · Түншлэл · Халамж",
        bridge: "Хил дамнасан чанартай эрүүл мэндийн тусламж үйлчилгээг холбож байна",
      }
    : {
        region: "JAPAN · MONGOLIA",
        japan: "JAPAN",
        japanDescription: "Quality · Innovation · Trust",
        mongolia: "MONGOLIA",
        mongoliaDescription: "Growth · Partnership · Care",
        bridge: "Connecting quality healthcare across borders",
      };

  return (
    <section className="w-full bg-background">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 xl:px-12 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeIn direction="up" immediate>
            <div className="space-y-6">
              <p className="text-xs font-semibold tracking-[0.15em] text-gold uppercase">
                {t("label")}
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-navy leading-[1.1]">
                {t("title")}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                {t("subtitle")}
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded bg-navy px-7 py-3.5 text-sm font-medium text-white hover:bg-navy-light transition-colors"
                >
                  {t("exploreServices")}
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded border border-navy px-7 py-3.5 text-sm font-medium text-navy hover:bg-navy/5 transition-colors"
                >
                  {t("contactUs")}
                </Link>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" immediate>
            <div className="relative bg-secondary rounded-xl p-8 lg:p-10 shadow-soft">
              <p className="text-xs font-semibold tracking-[0.15em] text-gold uppercase text-center mb-8">
                {regionalCopy.region}
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="bg-white rounded-lg px-6 py-5 text-center shadow-card min-w-[120px]">
                  <p className="text-sm font-semibold text-navy">{regionalCopy.japan}</p>
                  <p className="text-xs text-muted-foreground mt-1">{regionalCopy.japanDescription}</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-16 h-0.5 bg-gold" />
                  <div className="w-3 h-3 rounded-full bg-navy" />
                  <div className="w-16 h-0.5 bg-gold" />
                </div>
                <div className="bg-white rounded-lg px-6 py-5 text-center shadow-card min-w-[120px]">
                  <p className="text-sm font-semibold text-navy">{regionalCopy.mongolia}</p>
                  <p className="text-xs text-muted-foreground mt-1">{regionalCopy.mongoliaDescription}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground text-center mt-8">
                {regionalCopy.bridge}
              </p>
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
