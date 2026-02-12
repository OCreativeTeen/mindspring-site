export const locales = ["zh", "zh-TW", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "zh";

export const localeNames: Record<Locale, string> = {
  zh: "简体",
  "zh-TW": "繁體",
  en: "English",
};
