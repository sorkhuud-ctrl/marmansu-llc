import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/motion/FadeIn";

export function AqbPhilosophySection() {
  const t = useTranslations("aqb.philosophy");

  return (
    <section className="w-full bg-background">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 xl:px-12 py-20 lg:py-28">
        <FadeIn direction="up">
          <div className="max-w-3xl space-y-6">
            <p className="text-xs font-semibold tracking-[0.15em] text-accent uppercase">
              {t("eyebrow")}
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-navy leading-tight">
              {t("title")}
            </h2>
            <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                {t("body1")}
              </p>
              <p>
                {t("body2")}
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
