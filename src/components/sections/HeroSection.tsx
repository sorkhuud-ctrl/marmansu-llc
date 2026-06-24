"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/motion/FadeIn";

const stats = [
  { value: "2024", label: "Founded" },
  { value: "3+", label: "Japanese Partners" },
  { value: "5", label: "Core Services" },
  { value: "MN | JP", label: "Markets" },
];

export function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="w-full bg-background">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 xl:px-12 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeIn direction="up" className="order-2 lg:order-1">
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

          <FadeIn direction="left" delay={0.1} className="order-1 lg:order-2">
            <div className="relative bg-secondary rounded-xl p-8 lg:p-10 shadow-soft">
              <p className="text-xs font-semibold tracking-[0.15em] text-gold uppercase text-center mb-8">
                JAPAN · MONGOLIA
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="bg-white rounded-lg px-6 py-5 text-center shadow-card min-w-[120px]">
                  <p className="text-sm font-semibold text-navy">JAPAN</p>
                  <p className="text-xs text-muted-foreground mt-1">Quality · Innovation · Trust</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-16 h-0.5 bg-gold" />
                  <div className="w-3 h-3 rounded-full bg-navy" />
                  <div className="w-16 h-0.5 bg-gold" />
                </div>
                <div className="bg-white rounded-lg px-6 py-5 text-center shadow-card min-w-[120px]">
                  <p className="text-sm font-semibold text-navy">MONGOLIA</p>
                  <p className="text-xs text-muted-foreground mt-1">Growth · Partnership · Care</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground text-center mt-8">
                Connecting quality healthcare across borders
              </p>
            </div>
          </FadeIn>
        </div>

        <FadeIn direction="up" delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 lg:pt-20 border-t border-border mt-16 lg:mt-20">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <p className="text-3xl md:text-4xl font-semibold text-navy">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
