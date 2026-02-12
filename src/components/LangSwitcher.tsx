"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { localeNames } from "@/i18n/config";

export default function LangSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();

  const targetLocale = locale === "zh" ? "en" : "zh";
  const newPath = pathname?.replace(`/${locale}`, `/${targetLocale}`) ?? `/${targetLocale}`;

  return (
    <Link
      href={newPath}
      className="rounded-full border border-[var(--border)] px-3 py-1.5 text-xs font-medium text-[var(--muted)] hover:border-[var(--accent)]/30 hover:text-[var(--accent)]"
    >
      {localeNames[targetLocale]}
    </Link>
  );
}
