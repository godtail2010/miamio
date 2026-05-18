import type { Metadata, Viewport } from "next";
import { Noto_Sans_JP, Cormorant_Garamond } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
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
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "miamio | 表参道・原宿のプライベートまつ毛エクステ・ラッシュリフトサロン",
  description:
    "表参道駅徒歩5分。ナチュラルで洗練された目元を提案する完全個室・完全予約制のプライベートサロン「miamio」。丁寧なカウンセリングと安心の衛生管理で、初めての方もリラックスしてお過ごしいただけます。",
  keywords: [
    "miamio",
    "マツエク",
    "まつ毛エクステ",
    "ラッシュリフト",
    "まつ毛パーマ",
    "表参道",
    "原宿",
    "プライベートサロン",
    "完全個室",
  ],
  openGraph: {
    title: "miamio | 表参道・原宿のプライベートまつ毛エクステ・ラッシュリフトサロン",
    description:
      "ナチュラルで洗練された目元を提案する完全予約制プライベートサロン「miamio」。表参道駅徒歩5分。",
    type: "website",
    locale: "ja_JP",
    siteName: "miamio",
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
