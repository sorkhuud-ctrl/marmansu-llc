import { getTranslations } from "next-intl/server";
import { HeaderWrapper } from "@/components/layout/HeaderWrapper";
import { FooterWrapper } from "@/components/layout/FooterWrapper";
import { PageHero } from "@/components/sections/PageHero";
import { FadeIn } from "@/components/motion/FadeIn";

const newsItems = [
  { key: "distribution", date: "June 2026" },
  { key: "seminar", date: "May 2026" },
  { key: "approval", date: "April 2026" },
  { key: "distribution", date: "March 2026" },
  { key: "seminar", date: "February 2026" },
];

export default async function NewsPage({
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
        <PageHero label={t("news.label")} title={t("news.title")} />

        <section className="w-full bg-background">
          <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 xl:px-12 py-16 lg:py-24">
            <FadeIn direction="up">
              <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
                {t("news.description")}
              </p>
            </FadeIn>

            <div className="space-y-6 mt-12">
              {newsItems.map((item, index) => (
                <FadeIn key={`${item.key}-${index}`} direction="up" delay={index * 0.05}>
                  <div className="flex flex-col md:flex-row gap-6 bg-secondary rounded-lg p-6 md:p-8">
                    <div className="w-32 flex-shrink-0">
                      <p className="text-sm font-semibold text-gold">{item.date}</p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-navy">
                        {t(`newsItem.${item.key}.title`)}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {t(`newsItem.${item.key}.description`)}
                      </p>
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
