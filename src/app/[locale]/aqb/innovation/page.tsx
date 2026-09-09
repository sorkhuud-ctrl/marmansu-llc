import type { Metadata } from "next";
import { FooterWrapper } from "@/components/layout/FooterWrapper";
import { HeaderWrapper } from "@/components/layout/HeaderWrapper";
import { AqbInnovationExperience } from "@/components/sections/AqbInnovationExperience";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: locale === "mn" ? "AQB Имплантын инноваци | Re-crystallized HA & One-Piece | MARMANSU" : "AQB Implant Innovation | Re-crystallized HA & One-Piece | MARMANSU",
    description: locale === "mn"
      ? "AQB Implant System-ийн Re-crystallized HA, One-Piece бүтэц, Японы 30+ жилийн клиникийн хэрэглээ, клиникийн нотолгоо болон Монголд бий болгох үнэ цэн."
      : "Explore AQB Implant System innovation: Re-crystallized HA, One-Piece design, 30+ years of Japanese clinical use, clinical evidence, and value for Mongolia.",
  };
}

export default async function AqbInnovationPage({ params }: PageProps) {
  const { locale } = await params;

  return (
    <>
      <HeaderWrapper locale={locale} />
      <AqbInnovationExperience />
      <FooterWrapper locale={locale} />
    </>
  );
}
