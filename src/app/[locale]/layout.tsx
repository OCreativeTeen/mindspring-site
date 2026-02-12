import type { Metadata } from "next";
import "../globals.css";
import { locales, type Locale } from "@/i18n/config";

const titles: Record<Locale, string> = {
  zh: "MindStoryRoom | 心理咨询",
  en: "MindStoryRoom | Counseling",
};

const descriptions: Record<Locale, string> = {
  zh: "让焦虑慢下来，让生活重新有秩序。面向高压工作者、关系困扰与情绪反复人群的结构化心理咨询服务。",
  en: "Slow down anxiety. Restore order to your life. Structured, confidential counseling for high-pressure professionals.",
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
