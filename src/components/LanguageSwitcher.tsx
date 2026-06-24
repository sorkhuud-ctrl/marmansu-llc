"use client";

import { Link, usePathname } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { cn } from "@/lib/utils";

const LABELS: Record<string, string> = { en: "EN", mn: "MN", ja: "JA" };

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-2 text-sm font-medium">
      {["en", "mn", "ja"].map((l) => (
        <Link
          key={l}
          href={pathname}
          locale={l}
          className={cn(
            "px-1 transition-colors",
            l === locale
              ? "text-navy font-semibold"
              : "text-muted-foreground hover:text-navy"
          )}
        >
          {LABELS[l] ?? l.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
