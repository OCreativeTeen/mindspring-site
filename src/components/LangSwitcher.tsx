"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { localeNames, locales } from "@/i18n/config";

export default function LangSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-1 rounded-full border border-[var(--border)] p-1">
      {locales.map((loc) => {
        const newPath = pathname?.replace(`/${locale}`, `/${loc}`) ?? `/${loc}`;
        const isActive = loc === locale;

        return (
          <Link
            key={loc}
            href={newPath}
            className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
              isActive
                ? "bg-[var(--accent)] text-white"
                : "text-[var(--muted)] hover:border-[var(--accent)]/30 hover:text-[var(--accent)]"
            }`}
          >
            {localeNames[loc]}
          </Link>
        );
      })}
    </div>
  );
}
