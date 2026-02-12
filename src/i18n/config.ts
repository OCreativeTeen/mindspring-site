export const locales = ["zh", "zh-TW", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "zh-TW";

export const localeNames: Record<Locale, string> = {
  zh: "简",
  "zh-TW": "繁",
  en: "EN",
};
