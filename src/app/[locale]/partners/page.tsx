import { getTranslations } from "next-intl/server";
import { HeaderWrapper } from "@/components/layout/HeaderWrapper";
import { FooterWrapper } from "@/components/layout/FooterWrapper";
import { PageHero } from "@/components/sections/PageHero";
import { FadeIn } from "@/components/motion/FadeIn";
import Image from "@/components/common/Image";

const categories = [
  {
    key: "japanese",
    placeholders: ["Welcia Yakkyoku", "J.Morita", "AQB ABI Implant"],
    logos: ["/images/welcia-logo.png", "/images/morita-logo.webp", "/images/aqb-logo.png"],
    localizedPlaceholders: ["J.Morita Corporation", "Welcia Yakkyoku Co.,Ltd", "AQB ABI IMPLANT Co.Ltd"],
    localizedLogos: ["/images/morita-logo.webp", "/images/welcia-logo.png", "/images/aqb-logo.png"],
  },
  {
    key: "academic",
    placeholders: ["University Partners", "Medical Associations", "Training Institutes"],
    logos: ["/images/aichi-gakuin-logo.png", "/images/jmdn-logo.png"],
    localizedPlaceholders: ["University Partners", "Medical Associations"],
    localizedLogos: undefined,
  },
  {
    key: "mongolian",
    placeholders: ["Hospitals", "Clinics", "Healthcare Orgs"],
    logos: [
      "/images/mnums-logo.png",
      "/images/mnums-dentistry.jfif",
      "/images/mongolian-dental-association.webp",
    ],
    localizedPlaceholders: undefined,
    localizedLogos: undefined,
  },
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
                {t("partners.description")}
                {locale === "ja" ? null : " Logos are displayed only when permission is available."}
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
                    <div
                      className={
                        category.key === "academic"
                          ? "grid sm:grid-cols-2 gap-4 pt-4 max-w-3xl mx-auto"
                          : "grid sm:grid-cols-2 md:grid-cols-3 gap-4 pt-4"
                      }
                    >
                      {(locale === "ja"
                        ? category.placeholders.slice(0, category.key === "academic" ? 2 : undefined)
                        : category.localizedPlaceholders ?? category.placeholders
                      ).map((placeholder, i) => {
                        const logoSrc =
                          locale === "ja"
                            ? category.logos[i]
                            : category.localizedLogos?.[i] ?? category.logos[i];

                        return <div
                          key={i}
                          className={
                            ((locale === "ja" && category.key === "japanese" && i < 3) ||
                              (locale === "ja" && category.key === "academic") ||
                              (locale === "ja" && category.key === "mongolian"))
                              ? "h-32 bg-white rounded border border-border flex flex-col items-center justify-center gap-1 px-4"
                              : "h-20 bg-secondary rounded border border-border flex flex-col items-center justify-center gap-1 px-2 text-sm text-muted-foreground"
                          }
                        >
                          {locale === "ja" && category.key === "japanese" && i === 0 ? (
                            <>
                              <div className="h-20 w-full flex items-center justify-center">
                                <Image
                                  src="/images/morita-logo.webp"
                                  alt="J. MORITA"
                                  width={260}
                                  height={100}
                                  className="h-20 w-full object-contain"
                                />
                              </div>
                              <span className="text-sm font-medium text-navy">株式会社モリタ</span>
                              <span className="text-xs text-muted-foreground">歯科材料・歯科医療機器</span>
                            </>
                          ) : locale === "ja" && category.key === "japanese" && i === 1 ? (
                            <>
                              <div className="h-20 w-full flex items-center justify-center">
                                <Image
                                  src="/images/welcia-logo.png"
                                  alt="ウエルシア薬局"
                                  width={160}
                                  height={64}
                                  className="h-12 w-full object-contain"
                                />
                              </div>
                              <span className="text-sm font-medium text-navy">ウエルシア薬局</span>
                              <span className="text-xs text-muted-foreground">日本のドラッグストア製品</span>
                            </>
                          ) : locale === "ja" && category.key === "japanese" && i === 2 ? (
                            <>
                              <div className="h-20 w-full flex items-center justify-center">
                                <Image
                                  src="/images/aqb-logo.png"
                                  alt="AQB・ABIインプラント株式会社"
                                  width={200}
                                  height={72}
                                  className="h-14 w-full object-contain"
                                />
                              </div>
                              <span className="text-sm font-medium text-navy">AQB・ABIインプラント株式会社</span>
                              <span className="text-xs text-muted-foreground">歯科インプラント</span>
                            </>
                          ) : locale === "ja" && category.key === "academic" && i === 0 ? (
                            <>
                              <div className="h-20 w-full flex items-center justify-center">
                                <Image
                                  src="/images/aichi-gakuin-logo.png"
                                  alt="愛知学院大学"
                                  width={96}
                                  height={120}
                                  className="h-20 w-24 object-contain"
                                />
                              </div>
                              <span className="text-sm font-medium text-navy">愛知学院大学</span>
                              <span className="text-xs text-muted-foreground">大学・学術連携</span>
                            </>
                          ) : locale === "ja" && category.key === "academic" && i === 1 ? (
                            <>
                              <div className="h-20 w-full flex items-center justify-center">
                                <Image
                                  src="/images/jmdn-logo.png"
                                  alt="日本医学歯学情報機構（JMDN）"
                                  width={220}
                                  height={80}
                                  className="h-14 w-full max-w-[220px] object-contain"
                                />
                              </div>
                              <span className="text-sm font-medium text-navy">日本医学歯学情報機構（JMDN）</span>
                              <span className="text-xs text-muted-foreground">医療・歯科専門家ネットワーク</span>
                            </>
                          ) : locale === "ja" && category.key === "mongolian" && i === 0 ? (
                            <>
                              <div className="h-16 w-full flex items-center justify-center">
                                <Image
                                  src="/images/mnums-logo.png"
                                  alt="モンゴル国立医科大学 モンゴル・日本病院"
                                  width={240}
                                  height={80}
                                  className="h-14 w-full object-contain"
                                />
                              </div>
                              <span className="text-sm font-medium text-navy text-center leading-tight">
                                モンゴル国立医科大学
                                <br />
                                モンゴル・日本病院
                              </span>
                              <span className="text-xs text-muted-foreground">医療・人材交流</span>
                            </>
                          ) : locale === "ja" && category.key === "mongolian" && i === 1 ? (
                            <>
                              <div className="h-20 w-full flex items-center justify-center">
                                <Image
                                  src="/images/mnums-dentistry.jfif"
                                  alt="モンゴル国立医科大学 歯学部"
                                  width={260}
                                  height={100}
                                  className="h-20 w-full max-w-[260px] object-contain scale-[1.15]"
                                />
                              </div>
                              <span className="text-sm font-medium text-navy text-center leading-tight">
                                モンゴル国立医科大学 歯学部
                              </span>
                              <span className="text-xs text-muted-foreground">歯科教育・学術連携</span>
                            </>
                          ) : locale === "ja" && category.key === "mongolian" && i === 2 ? (
                            <>
                              <div className="h-20 w-full flex items-center justify-center">
                                <Image
                                  src="/images/mongolian-dental-association.webp"
                                  alt="モンゴル歯科医師会"
                                  width={96}
                                  height={80}
                                  className="h-16 w-16 object-contain"
                                />
                              </div>
                              <span className="text-sm font-medium text-navy text-center">モンゴル歯科医師会</span>
                              <span className="text-xs text-muted-foreground">歯科医療・専門家連携</span>
                            </>
                          ) : (
                            <>
                              {logoSrc ? (
                                <Image
                                  src={logoSrc}
                                  alt={`${placeholder} logo`}
                                  width={180}
                                  height={56}
                                  className={
                                    category.key === "japanese" && i === 0
                                      ? "h-14 w-full max-w-[240px] object-contain"
                                      : category.key === "japanese" && i === 1
                                        ? "h-10 w-full max-w-[180px] object-contain"
                                        : category.key === "japanese" && i === 2
                                          ? "h-12 w-full max-w-[210px] object-contain"
                                          : category.key === "academic" && i === 0
                                            ? "h-14 w-14 object-contain"
                                            : category.key === "academic" && i === 1
                                              ? "h-12 w-full max-w-[220px] object-contain"
                                        : category.key === "mongolian" && i === 2
                                          ? "h-10 w-10 object-contain"
                                          : "h-10 w-full max-w-[150px] object-contain"
                                  }
                                />
                              ) : null}
                              <span>{placeholder}</span>
                            </>
                          )}
                        </div>
                      })}
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
