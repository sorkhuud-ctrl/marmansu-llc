import { getTranslations } from "next-intl/server";
import { HeaderWrapper } from "@/components/layout/HeaderWrapper";
import { FooterWrapper } from "@/components/layout/FooterWrapper";
import { PageHero } from "@/components/sections/PageHero";
import { FadeIn } from "@/components/motion/FadeIn";

const products = [
  { key: "pharmaceutical" },
  { key: "dental" },
  { key: "devices" },
  { key: "advanced" },
];

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  const qualityCopy = locale === "ja"
    ? {
        title: t("products.qualityTitle"),
        description: t("products.qualityDescription"),
      }
    : {
        title: "Japanese Standards, Mongolian Care",
        description:
          "Every product we represent is evaluated against strict quality and safety criteria. We partner only with reputable Japanese manufacturers who share our commitment to long-term healthcare value.",
      };

  return (
    <>
      <HeaderWrapper locale={locale} />
      <main className="flex-1">
        <PageHero label={t("products.label")} title={t("products.title")} />

        <section className="w-full bg-background">
          <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 xl:px-12 py-16 lg:py-24">
            <FadeIn direction="up">
              <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
                {t("products.description")}
              </p>
            </FadeIn>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {products.map((product, index) => (
                <FadeIn key={product.key} direction="up" delay={index * 0.05}>
                  <div className="bg-secondary rounded-lg p-7 hover:bg-white hover:shadow-card-hover transition-all border border-transparent hover:border-border">
                    <h3 className="text-lg font-semibold text-navy mb-2">
                      {t(`product.${product.key}.title`)}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t(`product.${product.key}.description`)}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full bg-secondary">
          <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 xl:px-12 py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <FadeIn direction="up">
                <div className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-semibold text-navy">
                    {qualityCopy.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {qualityCopy.description}
                  </p>
                </div>
              </FadeIn>
              <FadeIn direction="up" delay={0.1}>
                <div className="aspect-video bg-muted rounded-xl" />
              </FadeIn>
            </div>
          </div>
        </section>
      </main>
      <FooterWrapper locale={locale} />
    </>
  );
}
