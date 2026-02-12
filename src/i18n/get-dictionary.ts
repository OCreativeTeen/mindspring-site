import type { Locale } from "./config";

const dictionaries: Record<Locale, () => Promise<Record<string, unknown>>> = {
  zh: () => import("./locales/zh.json").then((m) => m.default),
  "zh-TW": () => import("./locales/zh-TW.json").then((m) => m.default),
  en: () => import("./locales/en.json").then((m) => m.default),
};

export async function getDictionary(locale: Locale) {
  return dictionaries[locale]?.() ?? dictionaries.zh();
}
