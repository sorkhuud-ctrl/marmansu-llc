"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/motion/FadeIn";

export function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="w-full bg-background">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 xl:px-12 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="up" immediate>
            <div className="space-y-8">
              <p className="text-xs font-semibold tracking-[0.15em] text-accent uppercase">
                              JAPAN–MONGOLIA HEALTHCARE BRIDGE
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-navy leading-[1.08]">
                              Connecting Japanese Healthcare with Mongolia
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                              MARMANSU connects trusted Japanese medical and dental technologies with Mongolian healthcare through distribution, professional education, and long-term partnership.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-sm bg-navy px-6 py-2.5 text-sm font-medium text-white hover:bg-navy-light transition-colors"
                >
                                Explore Our Solutions
                </Link>
                <Link
                  href="/aqb"
                  className="inline-flex items-center justify-center rounded-sm border border-navy px-6 py-2.5 text-sm font-medium text-navy hover:bg-navy/5 transition-colors"
                >
                                Discover AQB Implant
                </Link>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" immediate>
            <div className="relative bg-background p-6 lg:p-8">
              <p className="text-xs font-semibold tracking-[0.15em] text-accent uppercase text-center mb-6">
                JAPAN · MONGOLIA
              </p>

              <div className="flex items-stretch justify-center gap-8">
                <div className="min-w-[140px] pr-6 text-center border-r border-border">
                  <p className="text-sm font-semibold text-navy">JAPAN</p>
                  <p className="text-xs text-muted-foreground mt-1">Quality · Innovation · Trust</p>
                </div>

                <div className="min-w-[140px] pl-6 text-center">
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
      </div>
    </section>
  );
}
