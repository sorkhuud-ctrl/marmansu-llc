import { HeaderWrapper } from "@/components/layout/HeaderWrapper";
import { FooterWrapper } from "@/components/layout/FooterWrapper";
import { AqbHeroSection } from "@/components/sections/AqbHeroSection";
import { AqbKeyFeaturesSection } from "@/components/sections/AqbKeyFeaturesSection";
import { AqbInMongoliaSection } from "@/components/sections/AqbInMongoliaSection";
import { AqbLearnMoreSection } from "@/components/sections/AqbLearnMoreSection";
import { AqbInquirySection } from "@/components/sections/AqbInquirySection";

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
        <AqbHeroSection />
        <AqbKeyFeaturesSection />
        <AqbInMongoliaSection />
        <AqbLearnMoreSection />
        <AqbInquirySection />
      </main>
      <FooterWrapper locale={locale} />
    </>
  );
}
