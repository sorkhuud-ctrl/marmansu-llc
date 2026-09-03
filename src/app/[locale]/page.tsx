import { HeaderWrapper } from "@/components/layout/HeaderWrapper";
import { FooterWrapper } from "@/components/layout/FooterWrapper";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { AqbSection } from "@/components/sections/AqbSection";
import { DentalSolutionsSection } from "@/components/sections/DentalSolutionsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { CooperationSection } from "@/components/sections/CooperationSection";
import { PartnershipSection } from "@/components/sections/PartnershipSection";

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
        <AqbSection />
        <DentalSolutionsSection />
        <ServicesSection />
        <EducationSection />
        <CooperationSection />
        <PartnershipSection />
      </main>
      <FooterWrapper locale={locale} />
    </>
  );
}
