import { getTranslations } from "next-intl/server";
import { HeaderWrapper } from "@/components/layout/HeaderWrapper";
import { FooterWrapper } from "@/components/layout/FooterWrapper";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/sections/ContactForm";
import { FadeIn } from "@/components/motion/FadeIn";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });

  return (
    <>
      <HeaderWrapper locale={locale} />
      <main className="flex-1">
        <PageHero label={t("label")} title={t("title")} />

        <section className="w-full bg-background">
          <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 xl:px-12 py-16 lg:py-24">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
              <FadeIn direction="up" className="lg:col-span-3">
                <ContactForm />
              </FadeIn>

              <FadeIn direction="up" delay={0.1} className="lg:col-span-2">
                <div className="space-y-8">
                  <div className="space-y-2">
                    <p className="text-xs font-semibold tracking-[0.15em] text-gold uppercase">{t("address")}</p>
                    <p className="text-foreground leading-relaxed">
                      MARMANSU LLC
                      <br />
                      Unit 602, Bldg. 36/2, Baga Toiruu
                      <br />
                      Sukhbaatar District
                      <br />
                      Ulaanbaatar 14192, Mongolia
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs font-semibold tracking-[0.15em] text-gold uppercase">{t("emailLabel")}</p>
                    <a href="mailto:marmansullc@gmail.com" className="text-navy hover:underline">
                      marmansullc@gmail.com
                    </a>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs font-semibold tracking-[0.15em] text-gold uppercase">{t("phoneLabel")}</p>
                    <a href="tel:+97677182255" className="text-navy hover:underline">
                      +976 77182255
                    </a>
                  </div>

                  {locale === "ja" ? (
                    <div className="aspect-video overflow-hidden rounded-lg">
                      <iframe
                        title="MARMANSU LLC office location"
                        src="https://www.google.com/maps?q=MARMANSU+LLC,+Unit+602,+Bldg.+36%2F2,+Baga+Toiruu,+Sukhbaatar+District,+Ulaanbaatar+14192,+Mongolia&output=embed"
                        className="h-full w-full border-0"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                  ) : (
                    <div className="aspect-video bg-muted rounded-lg" />
                  )}
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>
      <FooterWrapper locale={locale} />
    </>
  );
}
