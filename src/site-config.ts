/**
 * 網站功能開關與設定
 * 修改後需重新 build / 重新整理
 */

export const siteConfig = {
  /** 是否顯示 YouTube 頻道區塊 */
  showYouTubeSection: true,
  /** YouTube 頻道連結（@ 或 channel URL） */
  youtubeChannelUrl: "https://www.youtube.com/@creativeteen4995",
} as const;

/** Stripe 付款連結（與預約區塊「信用卡付款」彈窗對應） */
export const stripePaymentOptions = [
  {
    id: "single",
    url: "https://buy.stripe.com/9B6bIU1Eb7gC49xdkXdEs03",
  },
  {
    id: "couple",
    url: "https://buy.stripe.com/aFa9AMbeLcAWfSfep1dEs00",
  },
  {
    id: "other100",
    url: "https://buy.stripe.com/aFa28kciP0SeeOb94HdEs05",
  },
  {
    id: "other180",
    url: "https://buy.stripe.com/3cI5kw96DbwS49x1CfdEs02",
  },
  {
    id: "other250",
    url: "https://buy.stripe.com/eVqaEQaaHcAW6hFa8LdEs04",
  },
] as const;

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
