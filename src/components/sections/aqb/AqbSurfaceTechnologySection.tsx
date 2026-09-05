import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/motion/FadeIn";

export function AqbSurfaceTechnologySection() {
  const t = useTranslations("aqb.surfaceTechnology");

  return (
    <section className="w-full bg-background">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 xl:px-12 py-20 lg:py-28 border-t border-border">
        <FadeIn direction="up">
          <div className="space-y-8">
            <div className="max-w-3xl space-y-6">
              <p className="text-xs font-semibold tracking-[0.15em] text-accent uppercase">
                {t("eyebrow")}
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-navy leading-tight">
                {t("title")}
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {t("body")}
              </p>
            </div>

            <div className="grid gap-0 border-y border-border lg:grid-cols-3">
              <div className="py-6 lg:py-8 lg:px-8 border-b border-border lg:border-b-0 lg:border-r">
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

              <div className="py-6 lg:py-8 lg:px-8 border-b border-border lg:border-b-0 lg:border-r">
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

              <div className="py-6 lg:py-8 lg:px-8">
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

            <p className="max-w-3xl text-base md:text-lg text-muted-foreground leading-relaxed">
              {t("closing")}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
