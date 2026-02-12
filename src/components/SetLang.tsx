"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function SetLang() {
  const pathname = usePathname();

  useEffect(() => {
    let lang = "zh-CN";
    if (pathname?.startsWith("/en")) lang = "en";
    else if (pathname?.startsWith("/zh-TW")) lang = "zh-TW";
    else if (pathname?.startsWith("/zh")) lang = "zh-CN";
    document.documentElement.lang = lang;
  }, [pathname]);

  return null;
}
