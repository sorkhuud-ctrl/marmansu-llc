import { getTranslations } from "next-intl/server";
import { HeaderWrapper } from "@/components/layout/HeaderWrapper";
import { FooterWrapper } from "@/components/layout/FooterWrapper";
import { PageHero } from "@/components/sections/PageHero";
import { FadeIn } from "@/components/motion/FadeIn";

const categories = [
  { key: "japanese", placeholders: ["Welcia Yakkyoku", "J.Morita", "AQB ABI Implant"] },
  { key: "academic", placeholders: ["University Partners", "Medical Associations", "Training Institutes"] },
  { key: "mongolian", placeholders: ["Hospitals", "Clinics", "Healthcare Orgs"] },
];

export default async function PartnersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return (
    <>
      <HeaderWrapper locale={locale} />
      <main className="flex-1">
        <PageHero label={t("partners.label")} title={t("partners.title")} />

        <section className="w-full bg-background">
          <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 xl:px-12 py-16 lg:py-24">
            <FadeIn direction="up">
              <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
                {t("partners.description")} Logos are displayed only when permission is available.
              </p>
            </FadeIn>

            <div className="space-y-16 mt-12">
              {categories.map((category, index) => (
                <FadeIn key={category.key} direction="up" delay={index * 0.05}>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-navy">
                      {t(`partner.${category.key}.title`)}
                    </h3>
                    <p className="text-muted-foreground max-w-3xl leading-relaxed">
                      {t(`partner.${category.key}.description`)}
                    </p>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 pt-4">
                      {category.placeholders.map((placeholder, i) => (
                        <div
                          key={i}
                          className="h-20 bg-secondary rounded border border-border flex items-center justify-center text-sm text-muted-foreground"
                        >
                          {placeholder}
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      </main>
      <FooterWrapper locale={locale} />
    </>
  );
}
