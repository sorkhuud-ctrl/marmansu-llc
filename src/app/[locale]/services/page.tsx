import { getTranslations } from "next-intl/server";
import { HeaderWrapper } from "@/components/layout/HeaderWrapper";
import { FooterWrapper } from "@/components/layout/FooterWrapper";
import { PageHero } from "@/components/sections/PageHero";
import { FadeIn } from "@/components/motion/FadeIn";
import { Package, Stethoscope, ClipboardCheck, GraduationCap, Handshake } from "lucide-react";

const services = [
  { key: "pharmaceutical", icon: Package },
  { key: "medicalDevices", icon: Stethoscope },
  { key: "regulatory", icon: ClipboardCheck },
  { key: "education", icon: GraduationCap },
  { key: "partnerships", icon: Handshake },
];

export default async function ServicesPage({
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
        <PageHero label={t("services.label")} title={t("services.title")} />

        <section className="w-full bg-background">
          <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 xl:px-12 py-16 lg:py-24">
            <FadeIn direction="up">
              <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
                {t("services.description")}
              </p>
            </FadeIn>

            <div className="space-y-6 mt-12">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <FadeIn key={service.key} direction="up" delay={index * 0.05}>
                    <div className="flex flex-col md:flex-row gap-6 bg-secondary rounded-lg p-6 md:p-8">
                      <div className="w-12 h-12 rounded bg-white flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-navy" />
                      </div>
                      <div className="space-y-2">
                        <span className="text-xs font-semibold tracking-[0.15em] text-gold uppercase">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <h3 className="text-xl font-semibold text-navy">
                          {t(`service.${service.key}.title`)}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {t(`service.${service.key}.description`)}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <FooterWrapper locale={locale} />
    </>
  );
}
