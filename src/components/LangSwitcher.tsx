"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { localeNames, locales } from "@/i18n/config";

export default function LangSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-1 rounded-full bg-[var(--accent)] p-1">
      {locales.map((loc) => {
        const newPath = pathname?.replace(`/${locale}`, `/${loc}`) ?? `/${loc}`;
        const isActive = loc === locale;

        return (
          <Link
            key={loc}
            href={newPath}
            className={`rounded-full px-3 py-1 text-xs !font-bold transition-colors ${
              isActive
                ? "bg-white/25 !text-white"
                : "!text-white/85 hover:bg-white/15 hover:!text-white"
            }`}
          >
            {localeNames[loc]}
          </Link>
        );
      })}
    </div>
  );
}
