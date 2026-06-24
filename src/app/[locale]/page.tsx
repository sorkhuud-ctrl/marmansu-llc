import { HeaderWrapper } from "@/components/layout/HeaderWrapper";
import { FooterWrapper } from "@/components/layout/FooterWrapper";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { NewsSection } from "@/components/sections/NewsSection";
import { CtaSection } from "@/components/sections/CtaSection";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <>
      <HeaderWrapper locale={locale} />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProductsSection />
        <ProjectsSection />
        <PartnersSection />
        <NewsSection />
        <CtaSection />
      </main>
      <FooterWrapper locale={locale} />
    </>
  );
}
