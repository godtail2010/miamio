"use client";

import { Star, Quote, ExternalLink } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { SITE_URL } from "@/lib/site";

const REVIEWS = [
  {
    age: "30代前半",
    menu: "次世代ラッシュリフト",
    rating: 5,
    text: "初めて伺いましたが、施術前にまつ毛の状態をしっかり見てくださり、私の目の形やまつ毛の生え癖に合うデザインを丁寧に提案してくださいました。仕上がりも本当に自然で、毎朝ビューラーをする手間がなくなって大満足です。また次回もぜひお願いしたいです！",
  },
  {
    age: "20代後半",
    menu: "極柔フラットラッシュ 120本",
    rating: 5,
    text: "大型サロンのせわしない雰囲気が苦手で、落ち着いて施術を受けられる隠れ家のようなサロンを探していました。完全個室なので周りの目が一切気にならず、心地よい空間でいつの間にか眠ってしまいました。仕上がりも驚くほど軽くて、持ちも素晴らしいです。",
  },
  {
    age: "40代前半",
    menu: "ブロウリフトワックス",
    rating: 5,
    text: "眉毛のパーマとワックスをお願いしました。眉のデザインをどう整えたらいいか長年悩んでいましたが、私の骨格に合わせて自然で綺麗な毛流れに仕上げていただきました。朝のメイクが劇的に楽になり、友人からも「垢抜けたね」と褒められて嬉しい限りです。",
  },
];

export default function ReviewsSection() {
  // 総合評価の構造化データ (JSON-LD)
  // ※ 評価値は HotPepper Beauty 掲載の口コミデータに基づく。更新時は表示側の数値と揃えること
  const ratingSchema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "miamio (ミアミオ)",
    "alternateName": "mia mio",
    "url": SITE_URL,
    "address": {
      "@type": "PostalAddress",
      "postalCode": "241-0022",
      "addressRegion": "神奈川県",
      "addressLocality": "横浜市旭区",
      "streetAddress": "鶴ケ峰2-67-6 セイワビル302",
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "bestRating": "5",
      "ratingCount": "72",
    },
  };

  return (
    <section className="py-24 px-6 sm:py-32 sm:px-12 bg-brand-bg border-t border-brand-border/40">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ratingSchema) }}
      />
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <FadeIn direction="up">
            <span className="text-[10px] tracking-[0.25em] text-brand-accent font-medium block mb-2">
              CUSTOMER REVIEWS
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-light tracking-[0.15em] text-brand-text mb-4">
              お客様の声
            </h2>
            <p className="text-xs font-light tracking-wider text-brand-muted max-w-md mx-auto leading-relaxed">
              ホットペッパービューティーにお寄せいただいた、お客様からの温かいメッセージの一部をご紹介します。
            </p>
          </FadeIn>
        </div>

        {/* Rating Summary Card */}
        <div className="max-w-md mx-auto mb-16 bg-white p-6 sm:p-8 border border-brand-border/30 text-center shadow-sm">
          <FadeIn direction="up">
            <span className="text-[10px] tracking-[0.15em] text-brand-muted block mb-1">
              HOTPEPPER BEAUTY 総合評価
            </span>
            <div className="flex items-center justify-center gap-1.5 my-2">
              <span className="font-serif text-3xl font-light tracking-tight text-brand-text">
                5.0
              </span>
              <span className="text-[11px] text-brand-muted mt-2">/ 5.0</span>
            </div>
            <div className="flex justify-center gap-0.5 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-[10px] text-brand-muted font-light tracking-wider">
              ※ 2026年7月時点・口コミ72件の評価データより
            </p>
          </FadeIn>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, i) => (
            <FadeIn
              key={i}
              direction="up"
              delay={i * 0.1}
              className="flex flex-col bg-white p-8 border border-brand-border/30 relative shadow-sm"
            >
              {/* Quote Icon Background */}
              <div className="absolute top-6 right-6 text-brand-accent/15">
                <Quote size={28} strokeWidth={1} />
              </div>

              {/* Review Card Header */}
              <div className="mb-4">
                <div className="flex gap-0.5 mb-2">
                  {[...Array(review.rating)].map((_, idx) => (
                    <Star key={idx} size={12} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="flex items-center gap-2 text-[10px] tracking-wider font-light text-brand-muted">
                  <span>{review.age}</span>
                  <span className="w-1 h-1 bg-brand-border rounded-full" />
                  <span>{review.menu}</span>
                </div>
              </div>

              {/* Review Text */}
              <p className="text-xs font-light leading-relaxed tracking-wider text-brand-text flex-grow">
                {review.text}
              </p>
            </FadeIn>
          ))}
        </div>

        {/* Call to Action Button */}
        <div className="text-center mt-16">
          <FadeIn direction="up">
            <a
              href="https://beauty.hotpepper.jp/kr/slnH000631368/review/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-brand-accent px-8 py-3.5 text-[10px] font-light tracking-[0.2em] text-brand-accent hover:bg-brand-accent hover:text-white transition-colors"
            >
              ホットペッパーでさらに口コミを見る
              <ExternalLink size={12} strokeWidth={1.5} />
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
