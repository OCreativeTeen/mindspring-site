/**
 * 網站功能開關與設定
 * 修改後需重新 build / 重新整理
 */

export const siteConfig = {
  /** 是否顯示 YouTube 頻道區塊（首頁 hero 下方） */
  showYouTubeSection: true,
  /**
   * 首頁置頂宣傳用 YouTube 影片。可填完整網址（watch / youtu.be）或 11 位影片 ID；
   * 空字串則仍顯示頻道連結與訂閱提示，但不顯示播放器。
   */
  featuredYoutubeVideo:
    "https://www.youtube.com/watch?v=acGKBkUxN8Y" as string,
  /** YouTube 頻道連結（@ 或 channel URL） */
  youtubeChannelUrl: "https://www.youtube.com/@creativeteen4995",
  /** e-Transfer 收款信箱（彈窗內顯示） */
  eTransferEmail: "admin@mindspringwellness.ca",
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

/** 從網址或 ID 解析可用於 /embed/ 的 YouTube 影片 ID */
export function getYoutubeVideoIdForEmbed(input: string): string | null {
  const s = input.trim();
  if (!s) return null;
  if (/^[a-zA-Z0-9_-]{11}$/.test(s)) return s;
  try {
    const u = new URL(s);
    if (u.hostname === "youtu.be" || u.hostname.endsWith(".youtu.be")) {
      const id = u.pathname.replace(/^\//, "").split("/")[0];
      return id?.length === 11 ? id : null;
    }
    if (u.hostname.includes("youtube.com")) {
      const v = u.searchParams.get("v");
      if (v && /^[a-zA-Z0-9_-]{11}$/.test(v)) return v;
      const parts = u.pathname.split("/").filter(Boolean);
      const embedIdx = parts.indexOf("embed");
      if (
        embedIdx >= 0 &&
        parts[embedIdx + 1] &&
        /^[a-zA-Z0-9_-]{11}$/.test(parts[embedIdx + 1])
      ) {
        return parts[embedIdx + 1];
      }
    }
  } catch {
    return null;
  }
  return null;
}
