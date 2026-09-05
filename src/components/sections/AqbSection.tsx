"use client";

import { Link } from "@/i18n/routing";
import { FadeIn } from "@/components/motion/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";

export function AqbSection() {
  return (
    <section className="w-full bg-background">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 xl:px-12 py-28 lg:py-36">
        <FadeIn direction="up">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="max-w-xl">
              <SectionHeading
                label="FEATURED TECHNOLOGY"
                title="AQB Implant System"
              />

              <p className="mt-6 text-2xl md:text-3xl font-semibold text-navy leading-tight italic">
                Simple is Best.
              </p>

              <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
                Developed in Japan, AQB is a one-piece implant system built around a
                simple clinical philosophy — respecting existing bone and
                supporting a biologically focused approach to implant treatment.
              </p>

              <div className="mt-8 border-t border-border pt-6">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-navy">One-Piece Design</p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-navy">Re-crystallized HA Surface</p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-navy">Existing Bone Preservation</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link
                   href="/aqb"
                  className="inline-flex items-center rounded-sm border border-navy px-6 py-2 text-sm font-medium text-navy hover:bg-navy/5 transition-colors"
                >
                  Discover AQB Implant
                </Link>
              </div>
            </div>

            <div className="mt-8 lg:mt-0">
              <figure className="w-full min-h-[760px] flex items-center justify-center bg-background" aria-hidden="true">
                <img
                  src="/images/aqb-product01.webp"
                  alt="AQB Implant"
                  className="block mx-auto object-contain max-h-[760px] md:max-h-[680px] sm:max-h-[420px]"
                  style={{ width: 'auto' }}
                />
              </figure>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
