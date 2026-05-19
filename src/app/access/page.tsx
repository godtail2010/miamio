import FadeIn from "@/components/FadeIn";
import { MapPin, Clock, Compass, CreditCard, Car } from "lucide-react";

export const metadata = {
  title: "ACCESS | miamio",
  description: "miamioへのアクセス・店舗情報。相鉄線「鶴ヶ峰駅」南口より徒歩2分。営業時間、住所、駐車場情報、お支払い方法を掲載。アクセスマップと道案内もこちらから。",
};

export default function AccessPage() {
  // LocalBusiness Schema structured markup for local SEO
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "miamio (ミアミオ)",
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    "priceRange": "¥6,000 - ¥10,000",
    "telephone": "03-0000-0000",
    "address": {
      "@type": "PostalAddress",
      "postalCode": "241-0022",
      "addressRegion": "神奈川県",
      "addressLocality": "横浜市旭区",
      "streetAddress": "鶴ケ峰2-67-6 セイワビル302",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "35.4746",
      "longitude": "139.5488",
    },
    "url": "https://miamio-salon.pages.dev",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "10:00",
      "closes": "17:00",
    },
  };

  return (
    <div className="py-16 px-6 sm:py-24 sm:px-12 max-w-5xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />

      {/* Title */}
      <div className="text-center mb-20">
        <FadeIn direction="up">
          <span className="text-[10px] tracking-[0.25em] text-brand-accent font-medium block mb-2">
            SALON ACCESS
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-light tracking-[0.15em] text-brand-text">
            アクセス・サロン情報
          </h1>
          <p className="mt-3 text-[10px] font-light tracking-wider text-brand-muted max-w-md mx-auto">
            相鉄線「鶴ヶ峰駅」から徒歩2分。完全貸切のプライベート空間でお待ちしております。
          </p>
        </FadeIn>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Info list */}
        <div className="lg:col-span-5 space-y-10">
          <FadeIn direction="up">
            <h2 className="font-serif text-xl font-light tracking-wider text-brand-text mb-6">
              店舗情報
            </h2>

            <div className="space-y-8 text-xs sm:text-sm font-light tracking-wider leading-relaxed text-brand-muted">
              {/* Address */}
              <div className="flex gap-4 items-start">
                <MapPin className="text-brand-accent shrink-0 mt-0.5" size={18} strokeWidth={1.5} />
                <div>
                  <h4 className="text-[10px] font-medium text-brand-text tracking-widest uppercase mb-1">住所</h4>
                  <p>〒241-0022<br></br>神奈川県横浜市旭区鶴ケ峰2-67-6 セイワビル302</p>
                  <p className="text-[10px] text-brand-accent mt-1 leading-relaxed">
                    ※ プライベートサロンのため、部屋番号などの詳細住所は、ご予約確定時にHotPepper Beautyからの自動送信メールにてお伝えいたします。
                  </p>
                </div>
              </div>

              {/* Nearest Station */}
              <div className="flex gap-4 items-start">
                <Compass className="text-brand-accent shrink-0 mt-0.5" size={18} strokeWidth={1.5} />
                <div>
                  <h4 className="text-[10px] font-medium text-brand-text tracking-widest uppercase mb-1">最寄り駅</h4>
                  <p>相鉄本線「鶴ヶ峰駅」南口より徒歩2分</p>
                  <p className="text-[10px] text-brand-muted mt-1 leading-relaxed">
                    南口改札を出て、駅直結ビル「ココロット鶴ヶ峰」を通り抜けた坂道沿いにあるネイビーの建物の3階になります。
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4 items-start">
                <Clock className="text-brand-accent shrink-0 mt-0.5" size={18} strokeWidth={1.5} />
                <div>
                  <h4 className="text-[10px] font-medium text-brand-text tracking-widest uppercase mb-1">営業時間</h4>
                  <p>10:00 - 17:00 (最終受付 16:00)</p>
                  <p>定休日: 不定休</p>
                </div>
              </div>

              {/* Parking */}
              <div className="flex gap-4 items-start">
                <Car className="text-brand-accent shrink-0 mt-0.5" size={18} strokeWidth={1.5} />
                <div>
                  <h4 className="text-[10px] font-medium text-brand-text tracking-widest uppercase mb-1">駐車場</h4>
                  <p>専用駐車場なし</p>
                  <p className="text-[10px] text-brand-muted mt-1 leading-relaxed">
                    ※ 恐れ入りますが、お車でお越しの際は近嶺のコインパーキングをご利用ください。（徒歩2分圏内に複数ございます。）
                  </p>
                </div>
              </div>

              {/* Payment */}
              <div className="flex gap-4 items-start">
                <CreditCard className="text-brand-accent shrink-0 mt-0.5" size={18} strokeWidth={1.5} />
                <div>
                  <h4 className="text-[10px] font-medium text-brand-text tracking-widest uppercase mb-1">お支払い方法</h4>
                  <p>現金 / クレジットカード (VISA, MasterCard, American Express, JCB) / 電子マネー (QUICPay, iD) / QRコード決済 (PayPay)</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Map column */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <FadeIn direction="up" className="h-[300px] sm:h-[450px] relative bg-brand-bg border border-brand-border/40 flex flex-col items-center justify-center p-8 text-center">
            {/* Minimal aesthetic styled Map Placeholder */}
            <span className="font-serif text-lg font-light tracking-widest text-brand-text mb-2">miamio Salon Map</span>
            <p className="text-[11px] font-light leading-relaxed tracking-wider text-brand-muted max-w-sm mb-6">
              駅前の喧騒から一本入った穏やかなプライベート空間です。静かで落ち着いた隠れ家でおくつろぎください。
            </p>
            <a
              href="https://maps.app.goo.gl/D2mJF8vQYfVJn7A59"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-brand-accent px-8 py-3 text-[10px] font-light tracking-[0.2em] text-brand-accent hover:bg-brand-accent hover:text-white transition-colors"
            >
              GOOGLE MAP でルートを確認する
            </a>
          </FadeIn>

          <FadeIn direction="up" className="bg-[#F7F5F2] border border-brand-border/40 p-6 sm:p-8 space-y-3">
            <h3 className="font-serif text-sm font-light tracking-wider text-brand-text">
              道順のご案内（鶴ヶ峰駅より）
            </h3>
            <ol className="text-xs font-light leading-relaxed tracking-wider text-brand-muted space-y-2 list-decimal list-inside pl-1">
              <li>相鉄線「鶴ヶ峰駅」改札口を出て、左側の南口方向に進みます。</li>
              <li>駅直結の商業ビル「ココロット鶴ヶ峰」の中に入り、そのまま直進して外の広場に出ます。</li>
              <li>広場の先にある緩やかな坂道を少しだけ上ります。</li>
              <li>坂道の途中、左手に見える紺色（ネイビー）の建物「セイワビル」の3階（302号室）が当サロンです。※1階は東洋ハウジング様です。</li>
            </ol>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
