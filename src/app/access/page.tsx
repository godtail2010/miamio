import FadeIn from "@/components/FadeIn";
import { MapPin, Clock, Compass, CreditCard, Car } from "lucide-react";

export const metadata = {
  title: "ACCESS | miamio",
  description: "miamioへのアクセス・店舗情報。表参道駅徒歩5分、原宿駅徒歩12分。営業時間、住所、駐車場情報、お支払い方法を掲載。アクセスマップと道案内もこちらから。",
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
      "postalCode": "150-0001",
      "addressRegion": "東京都",
      "addressLocality": "渋谷区",
      "streetAddress": "神宮前 0-0-0",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "35.6662",
      "longitude": "139.7093",
    },
    "url": "https://miamio-salon.pages.dev",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "10:00",
      "closes": "20:00",
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
            表参道・原宿エリアの閑静な一角。完全貸切のプライベート空間でお待ちしております。
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
                  <p>〒150-0001 東京都渋谷区神宮前 0-0-0</p>
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
                  <p>東京メトロ各線「表参道駅」A2出口より徒歩5分</p>
                  <p>JR山手線「原宿駅」竹下口より徒歩12分</p>
                  <p className="text-[10px] text-brand-muted mt-1 leading-relaxed">
                    表参道ヒルズの裏手、キャットストリートから一本入った閑静な住宅街に位置するヴィンテージマンションになります。
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4 items-start">
                <Clock className="text-brand-accent shrink-0 mt-0.5" size={18} strokeWidth={1.5} />
                <div>
                  <h4 className="text-[10px] font-medium text-brand-text tracking-widest uppercase mb-1">営業時間</h4>
                  <p>10:00 - 20:00 (最終受付 18:30)</p>
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
                    ※ 恐れ入りますが、お車でお越しの際は近隣のコインパーキングをご利用ください。（徒歩2分圏内に複数ございます。）
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
              プライベートを厳守した穏やかな空間です。表参道の喧騒から離れた隠れ家でおくつろぎください。
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
              道順のご案内（表参道駅より）
            </h3>
            <ol className="text-xs font-light leading-relaxed tracking-wider text-brand-muted space-y-2 list-decimal list-inside pl-1">
              <li>表参道駅「A2出口」を出て、Apple Store表参道の角を右折します。</li>
              <li>つきあたり（新潟館ネスパス跡地）を左折し、すぐに右折して静かな路地を進みます。</li>
              <li>フライングタイガーの通りを越え、さらにキャットストリート方向に直進します。</li>
              <li>閑静な住宅街に入り、右手にあるブラウンのタイル貼りのマンション（1階がセレクトショップ）の〇〇号室になります。</li>
            </ol>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
