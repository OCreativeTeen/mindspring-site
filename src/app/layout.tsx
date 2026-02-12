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
    "在一个不断瓦解与重构的时代，我们帮助人重新找到内在的锚点。跨学科心理支持——连接现实、关系、精神与未来。",
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
