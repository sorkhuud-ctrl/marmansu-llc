import { FooterWrapper } from "@/components/layout/FooterWrapper";
import { HeaderWrapper } from "@/components/layout/HeaderWrapper";
import { AqbHeroSection } from "@/components/sections/AqbHeroSection";
import { AqbMnHeroSection } from "@/components/sections/AqbMnHeroSection";
import { AqbKeyFeaturesSection } from "@/components/sections/AqbKeyFeaturesSection";
import { AqbMnKeyFeaturesSection } from "@/components/sections/AqbMnKeyFeaturesSection";
import { AqbMnHistorySection } from "@/components/sections/AqbMnHistorySection";
import { AqbMnClinicalPracticeSection } from "@/components/sections/AqbMnClinicalPracticeSection";
import { AqbMnProductLineupSection } from "@/components/sections/AqbMnProductLineupSection";
import { AqbInMongoliaSection } from "@/components/sections/AqbInMongoliaSection";
import { AqbMnInMongoliaSection } from "@/components/sections/AqbMnInMongoliaSection";
import { AqbMnInnovationSection } from "@/components/sections/AqbMnInnovationSection";
import { AqbLearnMoreSection } from "@/components/sections/AqbLearnMoreSection";
import { AqbInquirySection } from "@/components/sections/AqbInquirySection";
import { AqbOnePieceSection } from "@/components/sections/AqbOnePieceSection";
import { AqbPhilosophySection } from "@/components/sections/AqbPhilosophySection";
import { AqbSurfaceSection } from "@/components/sections/AqbSurfaceSection";
import { AqbMnHaTechnologySection } from "@/components/sections/aqb/AqbMnHaTechnologySection";
import { AqbBonePreservationSection } from "@/components/sections/AqbBonePreservationSection";
import { AqbClosingSection } from "@/components/sections/AqbClosingSection";
import { AqbIntegrationSection } from "@/components/sections/AqbIntegrationSection";
import { AqbLongTermCareSection } from "@/components/sections/AqbLongTermCareSection";
import { AqbOcclusionSection } from "@/components/sections/AqbOcclusionSection";

export default async function AqbPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <>
      <HeaderWrapper locale={locale} />
      <main className="flex-1">
        {locale === "mn" ? (
          <>
            <AqbMnHeroSection />
            <AqbMnKeyFeaturesSection />
            <AqbMnHaTechnologySection />
            <AqbMnHistorySection />
            <AqbMnClinicalPracticeSection />
            <AqbMnProductLineupSection />
            <AqbMnInMongoliaSection />
            <AqbMnInnovationSection />
            <AqbLearnMoreSection />
            <AqbInquirySection />
          </>
        ) : (
          <>
            <AqbHeroSection />
            <AqbPhilosophySection />
            <AqbOnePieceSection />
            <AqbSurfaceSection />
            <AqbBonePreservationSection />
            <AqbIntegrationSection />
            <AqbOcclusionSection />
            <AqbLongTermCareSection />
            <AqbClosingSection />
          </>
        )}
      </main>
      <FooterWrapper locale={locale} />
    </>
  );
}
