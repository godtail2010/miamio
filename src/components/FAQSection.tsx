"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const FAQS = [
  {
    question: "まつ毛エクステが初めてで、デザインが似合うか不安です。",
    answer: "miamioでは、施術前に骨格や眉のバランス、普段のメイクなどを踏まえた入念なカウンセリングを行います。理想の雰囲気（ナチュラル、切れ長、縦長など）に合わせて毛の長さやカールをミリ単位で調整しますので、初めての方もご安心ください。",
  },
  {
    question: "ラッシュリフト（まつ毛パーマ）とマツエクはどちらが良いですか？",
    answer: "「自まつ毛を活かしてナチュラルに仕上げたい」「ビューラーの手間を省きたい」方はラッシュリフトがおすすめです。「自まつ毛以上の長さや濃さが欲しい」「アイライン効果を出したい」方はマツエクが適しています。カウンセリング時にまつ毛の状態を拝見し、最適な施術をご提案いたします。",
  },
  {
    question: "施術時間はどのくらいかかりますか？",
    answer: "初回のお客様は、カウンセリングに15分〜20分ほどお時間をいただきます。施術時間はラッシュリフトで約60分、マツエクは本数によりますが60分〜90分程度です。お時間には余裕を持ってお越しいただけますと幸いです。",
  },
  {
    question: "当日のメイクはしていっても大丈夫ですか？",
    answer: "アイシャドウ、マスカラ、アイライン、ビューラーなどのアイメイクは避けてご来店ください。ファンデーションやチーク、眉メイクはしていただいて問題ありません。アイメイクが残っているとグルーやパーマ液の密着度が下がり、持続期間が短くなる原因となります。",
  },
  {
    question: "施術後のお手入れで注意することはありますか？",
    answer: "施術後4〜5時間は、グルーやパーマ剤が完全に安定するまでまつ毛を濡らさないようにしてください。また、洗顔時はオイルクレンジングを避け（マツエクの場合）、まつ毛を強くこすらないように優しく洗ってください。洗顔後はコームで整え、美容液で保湿していただくことで美しい仕上がりが長持ちします。",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Structured Data (JSON-LD) for Local Business FAQPage
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <section className="py-24 px-6 sm:py-32 sm:px-12 bg-brand-bg border-t border-brand-border/40">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <FadeIn direction="up">
            <span className="text-[10px] tracking-[0.25em] text-brand-accent font-medium block mb-2">
              QUESTIONS & ANSWERS
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-light tracking-[0.15em] text-brand-text">
              よくあるご質問
            </h2>
          </FadeIn>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <FadeIn
                key={index}
                direction="up"
                delay={index * 0.05}
                className="border-b border-brand-border/40 bg-white"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between py-6 px-6 sm:px-8 text-left hover:bg-neutral-50/50 transition-colors"
                >
                  <span className="text-xs sm:text-sm font-light tracking-wider text-brand-text pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="text-brand-accent shrink-0"
                  >
                    <ChevronDown size={16} strokeWidth={1.5} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 px-6 sm:px-8 text-xs sm:text-[13px] font-light leading-relaxed tracking-wider text-brand-muted border-t border-brand-border/10 pt-4">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
