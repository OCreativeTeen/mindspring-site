/**
 * 網站功能開關與設定
 * 修改後需重新 build / 重新整理
 */

export const siteConfig = {
  /** 是否顯示 YouTube 頻道區塊（預設關閉，改為 true 即可顯示） */
  showYouTubeSection: false,
} as const;

/** 區塊標題前的圖示（可改為其他 emoji 或字元） */
export const sectionIcons = {
  why: "🌍",
  vision: "✨",
  principles: "💎",
  mission: "🧭",
  offeringsServices: "📋",
  offeringsSpecialities: "🎯",
  offeringsServe: "👥",
  services: "🗂️",
  positioning: "📍",
  trustMethod: "⏱️",
  trustApproach: "🧠",
  trustConfidentiality: "🔒",
  about: "👤",
  booking: "📅",
  privacy: "🔐",
  faq: "❓",
  youtube: "▶️",
} as const;
