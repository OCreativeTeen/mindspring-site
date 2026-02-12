"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function SetLang() {
  const pathname = usePathname();

  useEffect(() => {
    const lang = pathname?.startsWith("/en") ? "en" : "zh-CN";
    document.documentElement.lang = lang;
  }, [pathname]);

  return null;
}
