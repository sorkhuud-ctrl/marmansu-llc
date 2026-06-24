import { getTranslations } from "next-intl/server";
import { HeaderWrapper } from "@/components/layout/HeaderWrapper";
import { FooterWrapper } from "@/components/layout/FooterWrapper";
import { PageHero } from "@/components/sections/PageHero";
import { FadeIn } from "@/components/motion/FadeIn";

const projects = [
  { key: "academic" },
  { key: "dental" },
  { key: "productIntro" },
  { key: "hospital" },
];

export default async function ProjectsPage({
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
        <PageHero label={t("projects.label")} title={t("projects.title")} />

        <section className="w-full bg-background">
          <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 xl:px-12 py-16 lg:py-24">
            <FadeIn direction="up">
              <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
                {t("projects.description")}
              </p>
            </FadeIn>

            <div className="space-y-6 mt-12">
              {projects.map((project, index) => (
                <FadeIn key={project.key} direction="up" delay={index * 0.05}>
                  <div className="flex flex-col md:flex-row gap-6 bg-white rounded-lg overflow-hidden shadow-card">
                    <div className="w-full md:w-48 h-48 md:h-auto bg-muted flex-shrink-0" />
                    <div className="p-6 md:p-8 flex flex-col justify-center">
                      <h3 className="text-xl font-semibold text-navy mb-2">
                        {t(`project.${project.key}.title`)}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {t(`project.${project.key}.description`)}
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
