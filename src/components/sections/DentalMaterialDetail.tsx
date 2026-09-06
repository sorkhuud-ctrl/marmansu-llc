import { ArrowLeft, Factory, Package, ShieldAlert } from "lucide-react";
import Image from "@/components/common/Image";
import { Link } from "@/i18n/routing";

export type DentalMaterialDetailContent = {
  name: string;
  image: string;
  imageAlt: string;
  backLabel: string;
  breadcrumbProducts: string;
  breadcrumbDentalMaterials: string;
  manufacturerLabel: string;
  manufacturer: string;
  classificationLabel: string;
  classification: string;
  packagingLabel: string;
  packaging: string;
  sections: {
    title: string;
    items: string[];
    precaution?: boolean;
  }[];
};

export function DentalMaterialDetail({
  content,
}: {
  content: DentalMaterialDetailContent;
}) {
  return (
    <section className="w-full bg-background">
      <div className="mx-auto max-w-[1100px] px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <Link href="/products" className="transition-colors hover:text-navy">
            {content.breadcrumbProducts}
          </Link>
          <span aria-hidden="true">/</span>
          <Link href="/products#dental-materials" className="transition-colors hover:text-navy">
            {content.breadcrumbDentalMaterials}
          </Link>
          <span aria-hidden="true">/</span>
          <span className="font-medium text-navy">{content.name}</span>
        </nav>

        <Link
          href="/products#dental-materials"
          className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-primary"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          {content.backLabel}
        </Link>

        <div className="mt-8 grid gap-10 rounded-xl border border-border bg-white p-6 shadow-card sm:p-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:p-10">
          <div className="relative min-h-72 sm:min-h-80">
            <Image
              src={content.image}
              alt={content.imageAlt}
              fill
              sizes="(min-width: 1024px) 450px, 100vw"
              className="object-contain"
            />
          </div>
          <div>
            <p className="text-sm font-semibold tracking-wide text-primary">{content.classification}</p>
            <h1 className="mt-3 text-3xl font-semibold text-navy sm:text-4xl">{content.name}</h1>
            <dl className="mt-8 grid gap-5 border-t border-border pt-6">
              <div className="flex gap-3">
                <Factory className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <dt className="text-sm font-semibold text-navy">{content.manufacturerLabel}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">{content.manufacturer}</dd>
                </div>
              </div>
              <div className="flex gap-3">
                <Package className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <dt className="text-sm font-semibold text-navy">{content.packagingLabel}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">{content.packaging}</dd>
                </div>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {content.sections.map((section) => (
            <section
              key={section.title}
              className={`rounded-xl border p-6 sm:p-7 ${
                section.precaution
                  ? "border-amber-200 bg-amber-50 md:col-span-2"
                  : "border-border bg-white"
              }`}
            >
              <div className="flex items-center gap-3">
                {section.precaution ? (
                  <ShieldAlert className="size-5 shrink-0 text-amber-700" aria-hidden="true" />
                ) : null}
                <h2 className="text-xl font-semibold text-navy">{section.title}</h2>
              </div>
              <ul
                className={`mt-5 space-y-3 text-sm leading-relaxed text-muted-foreground ${
                  section.precaution ? "max-w-4xl" : ""
                }`}
              >
                {section.items.map((item) => (
                  <li key={item} className="border-t border-current/10 pt-3 first:border-t-0 first:pt-0">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
