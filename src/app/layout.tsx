import type { Metadata, Viewport } from "next";
import { Noto_Sans_JP, Cormorant_Garamond } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-sans",
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  title: "miamio | 横浜・鶴ヶ峰のプライベートまつ毛エクステ・ラッシュリフトサロン",
  description:
    "相鉄線・鶴ヶ峰駅徒歩2分。ナチュラルで洗練された目元を提案する完全個室・1ゲスト制（完全予約制）のプライベートサロン「miamio」。アイデザイナー歴10年のオーナーによる丁寧なカウンセリングと安心の衛生管理で、初めての方もリラックスしてお過ごしいただけます。",
  keywords: [
    "miamio",
    "マツエク",
    "まつ毛エクステ",
    "ラッシュリフト",
    "まつ毛パーマ",
    "鶴ヶ峰",
    "二俣川",
    "横浜",
    "旭区",
    "相鉄線",
    "プライベートサロン",
    "完全個室",
  ],
  openGraph: {
    title: "miamio | 横浜・鶴ヶ峰のプライベートまつ毛エクステ・ラッシュリフトサロン",
    description:
      "ナチュラルで洗練された目元を提案する完全個室・1ゲスト制のプライベートサロン「miamio」。相鉄線・鶴ヶ峰駅徒歩2分。",
    type: "website",
    locale: "ja_JP",
    siteName: "miamio",
    url: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSansJp.variable} ${cormorantGaramond.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-brand-bg text-brand-text">
        <Header />
        <main className="flex-grow pb-20 md:pb-0">{children}</main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
