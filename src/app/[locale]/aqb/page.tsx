import { FooterWrapper } from "@/components/layout/FooterWrapper";
import { HeaderWrapper } from "@/components/layout/HeaderWrapper";
import { AqbHeroSection } from "@/components/sections/AqbHeroSection";
import { AqbKeyFeaturesSection } from "@/components/sections/AqbKeyFeaturesSection";
import { AqbInMongoliaSection } from "@/components/sections/AqbInMongoliaSection";
import { AqbOnePieceSection } from "@/components/sections/AqbOnePieceSection";
import { AqbPhilosophySection } from "@/components/sections/AqbPhilosophySection";
import { AqbSurfaceSection } from "@/components/sections/AqbSurfaceSection";
import { AqbBonePreservationSection } from "@/components/sections/AqbBonePreservationSection";
import { AqbClosingSection } from "@/components/sections/AqbClosingSection";
import { AqbIntegrationSection } from "@/components/sections/AqbIntegrationSection";
import { AqbLongTermCareSection } from "@/components/sections/AqbLongTermCareSection";
import { AqbOcclusionSection } from "@/components/sections/AqbOcclusionSection";
import { AqbNominationBrochure } from "@/components/sections/AqbNominationBrochure";

export default async function AqbPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (locale === "mn") {
    return <AqbNominationBrochure />;
  }

  return (
    <>
      <HeaderWrapper locale={locale} />
      <main className="flex-1">
        <AqbHeroSection />
        <AqbPhilosophySection />
        <AqbOnePieceSection />
        <AqbSurfaceSection />
        <AqbBonePreservationSection />
        <AqbIntegrationSection />
        <AqbOcclusionSection />
        <AqbLongTermCareSection />
        <AqbClosingSection />
      </main>
      <FooterWrapper locale={locale} />
    </>
  );
}
