import type { Metadata } from "next";
import { Inter, Noto_Sans_SC } from "next/font/google";
import "./globals.css";
import SetLang from "@/components/SetLang";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const notoSans = Noto_Sans_SC({
  subsets: ["latin"],
  variable: "--font-source-han-like",
  display: "swap",
});

export const metadata: Metadata = {
  title: "心源心理健康 | MindSpring Wellness",
  description:
    "不断瓦解重构的时代? 重寻内在的锚点..",
  metadataBase: new URL("https://mindspringwellness.ca"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${inter.variable} ${notoSans.variable} antialiased`}>
        <SetLang />
        {children}
      </body>
    </html>
  );
}
