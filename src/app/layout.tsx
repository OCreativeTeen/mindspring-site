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
  title: "心源心理健康中心 | MindSpring Wellness",
  description:
    "让焦虑慢下来，让生活重新有秩序。面向高压工作者、关系困扰与情绪反复人群的结构化心理咨询服务。",
  metadataBase: new URL("https://mindstoryroom.com"),
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
