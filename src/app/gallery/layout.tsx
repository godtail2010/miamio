import type { Metadata } from "next";

// gallery/page.tsx はクライアントコンポーネントのため、metadata はここで定義する
export const metadata: Metadata = {
  title: "GALLERY | miamio",
  description:
    "miamioの施術事例ギャラリー。ナチュラル・韓国風・一重向け・奥二重向けなど、目の形や理想の雰囲気に合わせたラッシュリフト・マツエクのデザイン事例をご覧いただけます。",
  alternates: {
    canonical: "/gallery",
  },
};

export default function GalleryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
