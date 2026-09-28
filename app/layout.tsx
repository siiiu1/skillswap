import type { Metadata } from "next";

import { SiteHeader } from "@/components/site-header";

import "./globals.css";

export const metadata: Metadata = {
  title: "SkillSwap 技能互换",
  description: "用 mock 数据搭建的年轻温暖风格技能互换应用骨架"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen bg-warm-mesh">
        <div className="relative min-h-screen bg-[linear-gradient(180deg,rgba(255,255,255,0.78),rgba(255,248,244,0.96))]">
          <SiteHeader />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
