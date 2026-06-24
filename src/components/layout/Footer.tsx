"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export type FooterItem = {
  _id: string;
  label: string;
  url: string;
  order?: number;
};

export function Footer({ items }: { items?: FooterItem[] }) {
  const t = useTranslations();

  const footerLinks = items?.length
    ? items
        .slice()
        .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
        .map((item) => ({ key: item._id, label: item.label, href: item.url }))
    : [
        { key: "about", label: t("nav.about"), href: "/about" },
        { key: "services", label: t("nav.services"), href: "/services" },
        { key: "products", label: t("nav.products"), href: "/products" },
        { key: "projects", label: t("nav.projects"), href: "/projects" },
        { key: "contact", label: t("nav.contact"), href: "/contact" },
      ];

  return (
    <footer className="w-full bg-navy-dark text-white">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 xl:px-12 py-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div className="text-xl font-semibold tracking-[0.1em]">MARMANSU</div>
          <nav className="flex flex-wrap gap-6 text-sm text-white/70">
            {footerLinks.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-white/60">
          <p>© {new Date().getFullYear()} MARMANSU LLC. {t("footer.rights")}.</p>
          <nav className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              {t("footer.privacy")}
            </Link>
            <Link href="/terms-of-use" className="hover:text-white transition-colors">
              {t("footer.terms")}
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
