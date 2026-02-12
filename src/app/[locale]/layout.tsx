import type { Metadata } from "next";
import "../globals.css";
import { locales, type Locale } from "@/i18n/config";

const titles: Record<Locale, string> = {
  zh: "心源心理健康中心 | MindSpring Wellness",
  en: "MindSpring Wellness | 心源心理健康中心",
};

const descriptions: Record<Locale, string> = {
  zh: "在一个不断瓦解与重构的时代，我们帮助人重新找到内在的锚点。跨学科心理支持——连接现实、关系、精神与未来。",
  en: "In an era of constant disruption and reconstruction, we help people rediscover their inner anchor. Cross-disciplinary mental support connecting reality, relationships, spirit, and future.",
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
    metadataBase: new URL("https://mindstoryroom.com"),
    alternates: {
      languages: {
        zh: "/zh",
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
