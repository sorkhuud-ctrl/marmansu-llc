import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { FooterWrapper } from "@/components/layout/FooterWrapper";
import { HeaderWrapper } from "@/components/layout/HeaderWrapper";
import {
  DentalMaterialDetail,
  type DentalMaterialDetailContent,
} from "@/components/sections/DentalMaterialDetail";
import { routing } from "@/i18n/routing";

const productDefinitions = {
  vitapex: {
    image: "/images/vitapex.jpg",
    brochure: "/downloads/vitapex-mn.pdf",
    sections: {
      composition: ["calciumHydroxide", "iodoform", "siliconeOil", "otherIngredients"],
      indications: ["rootCanalFilling", "vitalPulpotomy", "apexification", "activeInfection"],
      features: ["highPh", "iodoformFeature", "nonSetting"],
      directions: ["prepareCanal", "permanentTeeth", "deciduousTeeth", "temporarySeal"],
      precautions: ["disposableTip", "overextension", "professionalUse"],
    },
  },
  "calcipex-ii": {
    image: "/images/calcipex-ii.jpg",
    brochure: "/downloads/calcipex-ii-mn.pdf",
    sections: {
      composition: ["calciumHydroxide", "bariumSulfate", "premixedPaste"],
      indications: ["pulpCapping", "rootCanalDisinfection", "baseLiner", "deciduousFilling", "rootCanalMedication"],
      features: ["highPh", "secondaryDentin", "radiopaque", "syringePlacement"],
      directions: ["cleanAndDry", "placePaste", "temporarySeal"],
      precautions: ["allergy", "professionalUse", "overfilling", "storage"],
    },
  },
  periodon: {
    image: "/images/periodon-v2.jpg",
    brochure: "/downloads/periodon-mn.pdf",
    sections: {
      composition: ["paraformaldehyde", "dibucaine", "appearance"],
      indications: ["rootCanalDisinfection", "residualPulp"],
      features: ["disinfecting", "localAnesthesia", "postPulpectomy"],
      directions: ["amount", "cottonFiber", "temporarySeal", "maximumSevenDays"],
      precautions: ["caustic", "softTissue", "anaphylaxis", "medicalHistory"],
    },
  },
} as const;

type ProductSlug = keyof typeof productDefinitions;
type SectionName = keyof (typeof productDefinitions)[ProductSlug]["sections"];

const sectionNames: SectionName[] = [
  "composition",
  "indications",
  "features",
  "directions",
  "precautions",
];

function isProductSlug(slug: string): slug is ProductSlug {
  return slug in productDefinitions;
}

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    Object.keys(productDefinitions).map((slug) => ({ locale, slug })),
  );
}

export default async function DentalMaterialProductPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  if (!isProductSlug(slug)) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: "dentalProductDetails" });
  const product = productDefinitions[slug];
  const sections = sectionNames.map((sectionName) => ({
    title: t(`sections.${sectionName}`),
    items: product.sections[sectionName].map((item) => t(`${slug}.${sectionName}.${item}`)),
    precaution: sectionName === "precautions",
  }));

  const content: DentalMaterialDetailContent = {
    name: t(`${slug}.name`),
    image: product.image,
    imageAlt: t(`${slug}.imageAlt`),
    backLabel: t("backToDentalMaterials"),
    breadcrumbProducts: t("breadcrumbs.products"),
    breadcrumbDentalMaterials: t("breadcrumbs.dentalMaterials"),
    manufacturerLabel: t("labels.manufacturer"),
    manufacturer: t(`${slug}.manufacturer`),
    classificationLabel: t("labels.classification"),
    classification: t(`${slug}.classification`),
    packagingLabel: t("labels.packaging"),
    packaging: t(`${slug}.packaging`),
    brochureDownload:
      locale === "mn"
        ? {
            href: product.brochure,
            label: "PDF танилцуулга татах",
          }
        : undefined,
    sections,
  };

  return (
    <>
      <HeaderWrapper locale={locale} />
      <main className="flex-1">
        <DentalMaterialDetail content={content} />
      </main>
      <FooterWrapper locale={locale} />
    </>
  );
}
