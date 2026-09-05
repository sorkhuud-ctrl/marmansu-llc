import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/motion/FadeIn";

export function AqbOcclusalAdjustmentSection() {
  const t = useTranslations("aqb.occlusalAdjustment");

  return (
    <section className="w-full bg-background">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 xl:px-12 py-20 lg:py-28 border-t border-border">
        <FadeIn direction="up">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
            <div className="space-y-6">
              <p className="text-xs font-semibold tracking-[0.15em] text-accent uppercase">
                {t("eyebrow")}
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-navy leading-tight">
                {t("title")}
              </h2>
              <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                <p>
                  {t("body1")}
                </p>
                <p>
                  {t("body2")}
                </p>
              </div>
            </div>

            <div className="border-t border-border lg:border-t-0 lg:pl-10">
              <div className="space-y-0">
                <div className="py-6 border-b border-border">
                  <p className="text-xs font-semibold tracking-[0.15em] text-accent uppercase">
                    01
                  </p>
                  <p className="mt-3 text-sm font-semibold text-navy tracking-[0.08em] uppercase">
                    {t("item1Title")}
                  </p>
                  <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                    {t("item1Body")}
                  </p>
                </div>

                <div className="py-6 border-b border-border">
                  <p className="text-xs font-semibold tracking-[0.15em] text-accent uppercase">
                    02
                  </p>
                  <p className="mt-3 text-sm font-semibold text-navy tracking-[0.08em] uppercase">
                    {t("item2Title")}
                  </p>
                  <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                    {t("item2Body")}
                  </p>
                </div>

                <div className="py-6">
                  <p className="text-xs font-semibold tracking-[0.15em] text-accent uppercase">
                    03
                  </p>
                  <p className="mt-3 text-sm font-semibold text-navy tracking-[0.08em] uppercase">
                    {t("item3Title")}
                  </p>
                  <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                    {t("item3Body")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
