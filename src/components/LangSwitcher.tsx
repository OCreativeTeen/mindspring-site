"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { localeNames, locales } from "@/i18n/config";

export default function LangSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();

  return (
    <div className="inline-flex w-fit max-w-full items-center gap-0.5 rounded-full bg-[var(--accent)] p-0.5">
      {locales.map((loc) => {
        const newPath = pathname?.replace(`/${locale}`, `/${loc}`) ?? `/${loc}`;
        const isActive = loc === locale;

        return (
          <Link
            key={loc}
            href={newPath}
            className={`rounded-full px-2 py-0.5 text-[10px] !font-bold transition-colors md:px-2.5 md:text-[11px] ${
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
