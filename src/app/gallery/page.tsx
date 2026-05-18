"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "@/components/FadeIn";

const CATEGORIES = [
  { id: "all", name: "すべて" },
  { id: "natural", name: "ナチュラル" },
  { id: "korean", name: "韓国風" },
  { id: "single", name: "一重向け" },
  { id: "hooded", name: "奥二重向け" },
  { id: "office", name: "仕事向け" },
  { id: "volume", name: "ボリューム系" },
];

const GALLERY_ITEMS = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1582298538104-fc2c3055b089?auto=format&fit=crop&q=80&w=600",
    title: "ヌーディラッシュリフト",
    categories: ["natural", "office", "korean"],
    style: "Lash Lift",
    desc: "自まつ毛を自然に際立たせる、束感を極限まで抑えたオフィス向けデザイン。",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=600",
    title: "韓国風コリアンラッシュ",
    categories: ["korean", "natural"],
    style: "Lash Lift",
    desc: "中央にしっかりと束感を持たせた、光を反射する韓国アイドルのような目元。",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=600",
    title: "フラットウイスピー (100本)",
    categories: ["volume", "hooded"],
    style: "Extension",
    desc: "奥二重の方のまぶたに干渉しない絶妙な長さとカール。目頭を短めにしたデザイン。",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&q=80&w=600",
    title: "一重さん向けカールリフト",
    categories: ["single", "natural"],
    style: "Lash Lift",
    desc: "一重まぶたの厚みを避けて、まぶたの先からすっと上向きに見せるオリジナルパーマ。",
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=600",
    title: "オフィス・ヌードラッシュ",
    categories: ["office", "natural"],
    style: "Extension",
    desc: "マツエクと気付かれないほどの細さ（0.1mm）をミックス。優しく知的な瞳を演出。",
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=600",
    title: "ハイボリューム・フェザー",
    categories: ["volume"],
    style: "Extension",
    desc: "軽さを極めたフェザーフラットラッシュ。密度を出しつつも重さを全く感じさせません。",
  },
  {
    id: 7,
    img: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80&w=600",
    title: "奥二重さん向けニュアンスラッシュ",
    categories: ["hooded", "natural", "office"],
    style: "Lash Lift",
    desc: "目頭はゆるめに、目尻にかけて優しくカールする、大人らしい優しいニュアンスアイ。",
  },
  {
    id: 8,
    img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=600",
    title: "ドーリー束感マツエク",
    categories: ["korean", "volume"],
    style: "Extension",
    desc: "束感コーティングを施した、ぱっちりとした瞳。立体感を出したいイベント前におすすめ。",
  },
];

export default function GalleryPage() {
  const [selectedCat, setSelectedCat] = useState("all");

  const filteredItems = GALLERY_ITEMS.filter((item) =>
    selectedCat === "all" ? true : item.categories.includes(selectedCat)
  );

  return (
    <div className="py-16 px-6 sm:py-24 sm:px-12 max-w-6xl mx-auto">
      {/* Title */}
      <div className="text-center mb-16">
        <FadeIn direction="up">
          <span className="text-[10px] tracking-[0.25em] text-brand-accent font-medium block mb-2">
            DESIGN PORTFOLIO
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-light tracking-[0.15em] text-brand-text">
            施術事例ギャラリー
          </h1>
          <p className="mt-3 text-[10px] font-light tracking-wider text-brand-muted max-w-md mx-auto">
            ご自身の目の形や、理想の雰囲気に合わせて絞り込みいただけます。<br />カウンセリング時の画像提示にもご活用ください。
          </p>
        </FadeIn>
      </div>

      {/* Filter Tabs */}
      <FadeIn direction="up" className="mb-12">
        <div className="flex flex-wrap justify-center gap-2 border-b border-brand-border/40 pb-6">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCat(cat.id)}
              className={`px-4 py-2 text-[10px] font-light tracking-[0.2em] transition-all duration-300 relative ${
                selectedCat === cat.id
                  ? "text-brand-accent"
                  : "text-brand-muted hover:text-brand-text"
              }`}
            >
              {cat.name}
              {selectedCat === cat.id && (
                <motion.span
                  layoutId="activeGalleryTab"
                  className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-brand-accent"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </FadeIn>

      {/* Grid portfolio */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              key={item.id}
              className="bg-white border border-brand-border/40 flex flex-col group overflow-hidden"
            >
              {/* Image box */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-102 transition-transform duration-500 grayscale-[10%]"
                />
                <div className="absolute top-3 left-3 bg-brand-bg/90 backdrop-blur-sm border border-brand-border/40 px-2.5 py-1">
                  <span className="text-[8px] font-light tracking-[0.2em] text-brand-accent uppercase">
                    {item.style}
                  </span>
                </div>
              </div>

              {/* Text box */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-sm font-light tracking-wider text-brand-text mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[10px] font-light leading-relaxed tracking-wider text-brand-muted">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-brand-border/15 flex flex-wrap gap-1">
                  {item.categories.map((c) => {
                    const catObj = CATEGORIES.find((cat) => cat.id === c);
                    return catObj ? (
                      <span
                        key={c}
                        className="text-[8px] font-light text-brand-accent tracking-widest bg-brand-bg px-2 py-0.5 border border-brand-border/20"
                      >
                        #{catObj.name}
                      </span>
                    ) : null;
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Booking CTA */}
      <FadeIn direction="up" className="mt-20 text-center">
        <p className="text-[11px] font-light tracking-wider text-brand-muted mb-4">
          気になるデザインが見つかったら、お気軽にご相談ください。
        </p>
        <a
          href="https://beauty.hotpepper.jp"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-brand-accent text-white px-10 py-4 text-xs font-light tracking-[0.25em] transition-all duration-300 hover:bg-brand-accent-hover shadow-sm"
        >
          HOTPEPPER BEAUTY で空き状況を確認
        </a>
      </FadeIn>
    </div>
  );
}
