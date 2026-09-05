import { getTranslations } from "next-intl/server";
import { HeaderWrapper } from "@/components/layout/HeaderWrapper";
import { FooterWrapper } from "@/components/layout/FooterWrapper";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";

const values = [
  { key: "trust", title: "Trust" },
  { key: "quality", title: "Quality" },
  { key: "professionalism", title: "Professionalism" },
  { key: "partnership", title: "Partnership" },
];

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  const jaAbout = locale === "ja" ? await getTranslations({ locale, namespace: "about" }) : null;
  const copy = (key: string, fallback: string) => (jaAbout ? jaAbout(key) : fallback);

  return (
    <>
      <HeaderWrapper locale={locale} />
      <main className="flex-1">
        <PageHero label={t("about.label")} title={t("about.title")} />

        <section className="w-full bg-background">
          <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 xl:px-12 py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <FadeIn direction="up">
                <div className="aspect-[4/3] bg-muted rounded-xl" />
              </FadeIn>
              <FadeIn direction="up" delay={0.1}>
                <div className="space-y-5 text-muted-foreground leading-relaxed">
                  <p className="text-lg text-foreground">
                    {copy(
                      "introduction.paragraph1",
                      "MARMANSU LLC is a Mongolia–Japan healthcare bridge company founded in 2024. We are not a traditional importer or distributor. We connect Japanese healthcare quality with Mongolia through products, education, medical networks, and long-term partnerships.",
                    )}
                  </p>
                  <p>
                    {copy(
                      "introduction.paragraph2",
                      "Our mission is to create sustainable healthcare solutions rather than simply supplying products. We work with Japanese pharmaceutical companies, medical device manufacturers, dental technology providers, academic institutions, and Mongolian healthcare organizations to build lasting value.",
                    )}
                  </p>
                  <p>
                    {copy(
                      "introduction.paragraph3",
                      "Trust, Quality, Professionalism, and Long-term Partnership are the foundations of everything we do.",
                    )}
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        <section className="w-full bg-secondary">
          <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 xl:px-12 py-16 lg:py-24">
            <FadeIn direction="up">
              <SectionHeading
                label={copy("valuesLabel", "OUR VALUES")}
                title={copy("valuesTitle", "What Guides Us")}
                description={copy(
                  "valuesDescription",
                  "These principles shape every partnership we build.",
                )}
                centered
              />
            </FadeIn>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {values.map((value, index) => (
                <FadeIn key={value.key} direction="up" delay={index * 0.05}>
                  <div className="bg-white rounded-lg p-7 shadow-card">
                    <h3 className="text-lg font-semibold text-navy mb-2">
                      {copy(`valueTitles.${value.key}`, value.title)}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t(`value.${value.key}`)}
                    </p>
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
