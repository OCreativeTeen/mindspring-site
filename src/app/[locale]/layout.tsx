import type { Metadata } from "next";
import "../globals.css";
import { locales, type Locale } from "@/i18n/config";

const titles: Record<Locale, string> = {
  zh: "心源心理健康 | MindSpring Wellness",
  "zh-TW": "心源心理健康 | MindSpring Wellness",
  en: "MindSpring Wellness | 心源心理健康",
};

const descriptions: Record<Locale, string> = {
  zh: "在不断瓦解重构的时代，重新找到内在的锚点",
  "zh-TW": "在不斷瓦解重構的時代，重新找到內在的錨點",
  en: "When everything feels in flux, we help people return to their inner anchor",
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: titles[locale as Locale],
    description: descriptions[locale as Locale],
    metadataBase: new URL("https://mindspringwellness.ca"),
    alternates: {
      languages: {
        zh: "/zh",
        "zh-TW": "/zh-TW",
        en: "/en",
      },
    },
  };
}

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  return <>{children}</>;
}
