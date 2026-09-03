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
        { key: "home", label: t("nav.home"), href: "/" },
        { key: "about", label: t("nav.about"), href: "/about" },
        { key: "services", label: t("nav.services"), href: "/services" },
        { key: "products", label: t("nav.products"), href: "/products" },
        { key: "projects", label: t("nav.projects"), href: "/projects" },
        { key: "partners", label: t("nav.partners"), href: "/partners" },
        { key: "news", label: t("nav.news"), href: "/news" },
        { key: "contact", label: t("nav.contact"), href: "/contact" },
      ];

  return (
    <footer className="w-full bg-navy text-white">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 xl:px-12 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <div className="text-lg font-semibold tracking-[0.08em] mb-2">MARMANSU</div>
            <p className="text-sm text-white/70 leading-relaxed">
              Connecting Japanese Healthcare with Mongolia
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xs font-semibold uppercase text-white mb-4">Navigation</h4>
              <nav className="space-y-2">
                {footerLinks.map((item) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    className="text-sm text-white/70 hover:text-white transition-colors block"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase text-white mb-4">Contact</h4>
              <div className="space-y-2">
                <div className="text-sm text-white/70">
                  <a
                    href="tel:+976-77182255"
                    className="hover:text-white transition-colors"
                  >
                    7718 2255
                  </a>
                  <span>, </span>
                  <a
                    href="tel:+976-99440974"
                    className="hover:text-white transition-colors"
                  >
                    9944 0974
                  </a>
                </div>
                <a
                  href="mailto:marmansullc@gmail.com"
                  className="text-sm text-white/70 hover:text-white transition-colors block"
                >
                  marmansullc@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} MARMANSU LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

