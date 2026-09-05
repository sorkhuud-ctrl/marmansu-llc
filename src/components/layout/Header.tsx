"use client";

import { useState } from "react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export type HeaderItem = {
  _id: string;
  label: string;
  url: string;
  order?: number;
};

export function Header({ items }: { items?: HeaderItem[] }) {
  const t = useTranslations("nav");
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = items?.length
    ? items
        .slice()
        .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
        .map((item) => ({ key: item._id, label: item.label, href: item.url }))
    : [
        { key: "home", label: t("home"), href: "/" },
        { key: "about", label: t("about"), href: "/about" },
        { key: "services", label: t("services"), href: "/services" },
        { key: "products", label: t("products"), href: "/products" },
        { key: "projects", label: t("projects"), href: "/projects" },
        { key: "partners", label: t("partners"), href: "/partners" },
        { key: "news", label: t("news"), href: "/news" },
        { key: "contact", label: t("contact"), href: "/contact" },
      ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-lg font-semibold tracking-[0.08em] text-navy">
            MARMANSU
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-navy transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-6">
            <LanguageSwitcher />
          </div>

          <button
            type="button"
            className="lg:hidden p-2 text-navy"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="mx-auto max-w-[1280px] px-4 py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-foreground/80 hover:text-navy transition-colors py-2"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded bg-navy px-6 py-3 text-sm font-medium text-white hover:bg-navy-light transition-colors"
            >
              {t("contact")}
            </Link>
            <div className="pt-4 border-t border-border">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
