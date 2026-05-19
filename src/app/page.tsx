import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { ArrowRight, Sparkles, Shield, Heart } from "lucide-react";
import FAQSection from "@/components/FAQSection";

// Aesthetic Unsplash Images
const IMAGES = {
  hero: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80&w=1200", // Eye close-up sunlight
  concept: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&q=80&w=800", // Aesop-style bottle and towel
  menu1: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=600", // Clean beauty skin
  menu2: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=600", // Eyelash curl closeup
  before: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&q=80&w=500", // Eye natural
  after: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80&w=500", // Eye curled
  owner: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600", // Soft female portrait
  salon1: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800", // Minimal interior
  salon2: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80&w=800", // Warm neutral room
  insta1: "/images/instagram/insta1.jpg",
  insta2: "/images/instagram/insta2.jpg",
  insta3: "/images/instagram/insta3.jpg",
  insta4: "/images/instagram/insta4.jpg",
  insta5: "/images/instagram/insta5.jpg",
  insta6: "/images/instagram/insta6.jpg",
};

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* 1. Hero Section */}
      <section className="relative h-[90vh] w-full flex items-center justify-center bg-[#F4F1EE]">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src={IMAGES.hero}
            alt="miamio main visual"
            fill
            className="object-cover object-center opacity-85 brightness-95 transform scale-105 animate-[subtle-zoom_20s_infinite_alternate]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />
        </div>

        <div className="relative z-10 max-w-4xl px-6 text-center text-white">
          <FadeIn direction="up">
            <span className="font-serif text-[10px] sm:text-xs tracking-[0.3em] uppercase text-white/95 mb-4 block">
              Private Eyelash Salon
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-light tracking-[0.15em] leading-normal sm:leading-relaxed text-white">
            自然体に、
            <br className="sm:hidden" />
            ほんの少しのニュアンスを。
          </h1>
          <p className="mt-6 text-xs sm:text-sm font-light tracking-[0.15em] text-white/90 leading-loose max-w-lg mx-auto">
            まるで自まつ毛がスッと伸びたかのような、
            <br />
            あなたの日常に静かに溶け込むアイデザイン。
          </p>
          <div className="mt-10">
            <a
              href="https://beauty.hotpepper.jp/kr/slnH000631368/coupon/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-brand-text px-10 py-4 text-xs font-light tracking-[0.25em] transition-all duration-300 hover:bg-brand-accent hover:text-white"
            >
              HOTPEPPER BEAUTY で予約
            </a>
          </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. Concept Section */}
      <section className="py-24 px-6 sm:py-32 sm:px-12 bg-brand-bg">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-7">
              <FadeIn direction="up">
                <span className="text-[10px] tracking-[0.25em] text-brand-accent font-medium block mb-3">
                  OUR PHILOSOPHY
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-light tracking-[0.15em] leading-relaxed text-brand-text mb-6">
                  大型サロンが苦手な、
                  <br />
                  あなたのための静かな隠れ家
                </h2>
                <div className="space-y-6 text-xs sm:text-sm font-light leading-relaxed tracking-wider text-brand-muted">
                  <p>
                    せわしない日常から少しだけ離れて、自然光がやさしく差し込むプライベートな空間へ。
                    miamio（ミアミオ）は、完全個室・完全予約制の小さなお店です。
                  </p>
                  <p>
                    「高級すぎて緊張する空間」でもなく、「生活感にあふれた場所」でもない。
                    お気に入りのミニマルなカフェや、愛用しているスキンケアブランドのショップを訪れたときのような、静かで洗練された時間が流れます。
                  </p>
                  <p>
                    過度に作り込まれた美しさではなく、あなた本来の瞳の魅力を最大限に引き出すナチュラルでセンスの良い仕上がりをご提案します。
                  </p>
                </div>
              </FadeIn>
            </div>
            <div className="lg:col-span-5 relative h-[380px] sm:h-[450px]">
              <FadeIn direction="up" delay={0.2} className="h-full">
                <Image
                  src={IMAGES.concept}
                  alt="Aesthetic interior details"
                  fill
                  className="object-cover grayscale-[20%]"
                />
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Popular Menu Section */}
      <section className="py-20 px-6 sm:py-28 sm:px-12 bg-white border-t border-brand-border/30">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <FadeIn direction="up">
              <span className="text-[10px] tracking-[0.25em] text-brand-accent font-medium block mb-2">
                RECOMMENDED
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-light tracking-[0.15em] text-brand-text">
                人気メニュー
              </h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Natural Lash Lift",
                price: "¥6,600",
                time: "60 min",
                desc: "根元から立ち上げ、自まつ毛の長さを最大限に活かした清潔感あふれる仕上がり。初めての方に最も選ばれる次世代まつげパーマです。",
                img: IMAGES.menu1,
              },
              {
                title: "Clean Wispy Extension",
                price: "¥8,800",
                time: "75 min",
                desc: "極細の毛束を絶妙なニュアンスで配置し、抜け感と自然な陰影を演出するマツエク。まるで自まつ毛が増えたかのような仕上がりです。",
                img: IMAGES.menu2,
              },
              {
                title: "Wet Look / 束感デザイン",
                price: "¥7,700",
                time: "60 min",
                desc: "韓国メイクのようなツヤ感と束感を作り出すラッシュリフト。瞳に光が入り込みやすく、クリアで生き生きとした表情を引き出します。",
                img: IMAGES.hero,
              },
            ].map((menu, i) => (
              <FadeIn key={menu.title} direction="up" delay={i * 0.1} className="flex flex-col h-full bg-brand-bg">
                <div className="relative h-56 w-full">
                  <Image
                    src={menu.img}
                    alt={menu.title}
                    fill
                    className="object-cover grayscale-[10%]"
                  />
                </div>
                <div className="p-6 sm:p-8 flex flex-col flex-1">
                  <h3 className="font-serif text-lg font-light tracking-wider text-brand-text mb-1">
                    {menu.title}
                  </h3>
                  <div className="flex items-center gap-3 text-[10px] text-brand-accent font-medium tracking-widest mb-4">
                    <span>{menu.price}</span>
                    <span className="w-1 h-1 bg-brand-accent rounded-full" />
                    <span>{menu.time}</span>
                  </div>
                  <p className="text-[11px] font-light leading-relaxed tracking-wider text-brand-muted flex-grow mb-6">
                    {menu.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="text-center mt-12">
            <FadeIn direction="up">
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 text-xs font-light tracking-[0.2em] text-brand-text hover:text-brand-accent transition-colors"
              >
                すべてのメニューを見る
                <ArrowRight size={14} strokeWidth={1.5} />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 4. Before / After Section */}
      <section className="py-20 px-6 sm:py-28 sm:px-12 bg-brand-bg">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <FadeIn direction="up">
              <span className="text-[10px] tracking-[0.25em] text-brand-accent font-medium block mb-2">
                TRANSFORMATION
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-light tracking-[0.15em] text-brand-text">
                Before / After
              </h2>
              <p className="mt-3 text-[10px] font-light tracking-wider text-brand-muted">
                瞳が引き出す、本来のニュアンス
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white p-6 sm:p-10 border border-brand-border/40">
            {/* Visual Grid Comparison */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <span className="text-[9px] font-medium tracking-[0.25em] text-brand-muted block text-center">
                  BEFORE
                </span>
                <div className="relative h-40 sm:h-48 w-full">
                  <Image
                    src={IMAGES.before}
                    alt="Eyelash before treatment"
                    fill
                    className="object-cover rounded-none"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <span className="text-[9px] font-medium tracking-[0.25em] text-brand-accent block text-center">
                  AFTER (Lash Lift)
                </span>
                <div className="relative h-40 sm:h-48 w-full">
                  <Image
                    src={IMAGES.after}
                    alt="Eyelash after treatment"
                    fill
                    className="object-cover rounded-none"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6 md:pl-6">
              <FadeIn direction="up">
                <h3 className="font-serif text-xl font-light tracking-wider text-brand-text">
                  自然な立ち上がりで、<br />クリアな印象の目元へ
                </h3>
                <p className="text-[11px] font-light leading-relaxed tracking-wider text-brand-muted">
                  下向きに生えていた自まつ毛を根元から優しくリフトアップ。
                  不自然な急カーブを避け、すっと前に伸びるようなアングルに仕上げることで、まぶた全体もすっきりとした印象に。マスカラなしでもクリアで知的な眼差しを作ります。
                </p>
                <div className="pt-2">
                  <Link
                    href="/gallery"
                    className="inline-flex items-center gap-2 text-[10px] font-medium tracking-[0.2em] text-brand-accent hover:text-brand-text transition-colors"
                  >
                    ギャラリーで他の事例を見る
                    <ArrowRight size={12} strokeWidth={1.5} />
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Owner Message Section */}
      <section className="py-24 px-6 sm:py-32 sm:px-12 bg-white">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-5 relative h-[380px] sm:h-[480px]">
              <FadeIn direction="up" className="h-full">
                <Image
                  src={IMAGES.owner}
                  alt="Salon Owner Mami"
                  fill
                  className="object-cover grayscale-[15%]"
                />
              </FadeIn>
            </div>

            <div className="lg:col-span-7">
              <FadeIn direction="up" delay={0.2}>
                <span className="text-[10px] tracking-[0.25em] text-brand-accent font-medium block mb-3">
                  OWNER MESSAGE
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-light tracking-[0.15em] text-brand-text mb-2">
                  Mami
                </h2>
                <span className="text-[10px] font-light tracking-[0.2em] text-brand-muted block mb-6">
                  オーナーアイデザイナー
                </span>

                <div className="space-y-6 text-xs sm:text-sm font-light leading-relaxed tracking-wider text-brand-muted">
                  <p>
                    「目を大きく見せたいけれど、いかにも“やっています”という不自然さは避けたい。」
                    お客様から最も多くいただくお悩みです。
                  </p>
                  <p>
                    私たちは、単にまつ毛を長く太くするのではなく、お客様それぞれの顔立ち、眉、骨格、そして醸し出す雰囲気に調和するアイデザインを追求しています。
                  </p>
                  <p>
                    miamioでは、目の形や毛質に合わせる丁寧なカウンセリング時間を非常に大切にしております。初めての方も、まずは気軽にお悩みをお聞かせください。
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 mt-10 border-t border-brand-border/40">
                  <div className="flex items-start gap-3">
                    <Sparkles size={16} strokeWidth={1.5} className="text-brand-accent shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-[11px] font-medium text-brand-text mb-1 tracking-wider">丁寧なカウンセリング</h4>
                      <p className="text-[9px] font-light text-brand-muted leading-relaxed tracking-wide">骨格や毛流れを見極め、理想の「抜け感」をご提案します。</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield size={16} strokeWidth={1.5} className="text-brand-accent shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-[11px] font-medium text-brand-text mb-1 tracking-wider">安心の衛生管理</h4>
                      <p className="text-[9px] font-light text-brand-muted leading-relaxed tracking-wide">器具の紫外線消毒や使い捨て商材の使用を徹底しています。</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart size={16} strokeWidth={1.5} className="text-brand-accent shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-[11px] font-medium text-brand-text mb-1 tracking-wider">厳選された低刺激商材</h4>
                      <p className="text-[9px] font-light text-brand-muted leading-relaxed tracking-wide">国産低刺激グルーや美容成分配合のパーマ剤を使用しています。</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Salon Space Gallery Section */}
      <section className="py-20 bg-brand-bg overflow-hidden border-y border-brand-border/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <FadeIn direction="up">
              <span className="text-[10px] tracking-[0.25em] text-brand-accent font-medium block mb-2">
                SALON ENVIRONMENT
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-light tracking-[0.15em] text-brand-text">
                心地よい空間
              </h2>
            </FadeIn>
          </div>
        </div>
        <div className="flex gap-4 md:gap-6 overflow-x-auto px-6 max-w-7xl mx-auto no-scrollbar scroll-smooth">
          <div className="min-w-[280px] sm:min-w-[450px] h-64 sm:h-[350px] relative">
            <Image
              src={IMAGES.salon1}
              alt="Treatment Room Minimalist Interior"
              fill
              className="object-cover grayscale-[10%]"
            />
          </div>
          <div className="min-w-[280px] sm:min-w-[450px] h-64 sm:h-[350px] relative">
            <Image
              src={IMAGES.salon2}
              alt="Treatment Sofa Sunlight"
              fill
              className="object-cover grayscale-[10%]"
            />
          </div>
          <div className="min-w-[280px] sm:min-w-[350px] h-64 sm:h-[350px] relative">
            <Image
              src={IMAGES.concept}
              alt="Aesthetic linen details"
              fill
              className="object-cover grayscale-[10%]"
            />
          </div>
        </div>
      </section>

      {/* 7. Instagram Embed Section */}
      <section className="py-24 px-6 sm:py-32 sm:px-12 bg-white">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <FadeIn direction="up">
              <span className="text-[10px] tracking-[0.25em] text-brand-accent font-medium block mb-2">
                INSTAGRAM
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-light tracking-[0.15em] text-brand-text">
                @miamio_eyelash
              </h2>
              <p className="mt-3 text-[10px] font-light tracking-wider text-brand-muted">
                最新デザインや空き状況を毎日更新しています
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
            {[IMAGES.insta1, IMAGES.insta2, IMAGES.insta3, IMAGES.insta4, IMAGES.insta5, IMAGES.insta6].map((img, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.05} className="aspect-square relative group overflow-hidden bg-neutral-100">
                <a href="https://www.instagram.com/miamio_eyelash/?hl=ja" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                  <Image
                    src={img}
                    alt={`Instagram feed item ${i + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 grayscale-[10%]"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-[9px] font-light tracking-[0.2em]">VIEW ON INSTAGRAM</span>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ Section */}
      <FAQSection />

      {/* 9. Access Section */}
      <section className="py-24 px-6 sm:py-32 sm:px-12 bg-white border-t border-brand-border/40">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-5 space-y-8">
              <FadeIn direction="up">
                <span className="text-[10px] tracking-[0.25em] text-brand-accent font-medium block mb-2">
                  ACCESS
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-light tracking-[0.15em] text-brand-text mb-8">
                  アクセス・店舗情報
                </h2>

                <div className="space-y-6 text-xs sm:text-sm font-light tracking-wider leading-relaxed text-brand-muted">
                  <div>
                    <h4 className="text-[10px] font-medium text-brand-text tracking-widest uppercase mb-1">住所</h4>
                    <p>〒241-0022<br></br>神奈川県横浜市旭区鶴ケ峰2-67-6 セイワビル302</p>
                    <p className="text-[10px] text-brand-accent mt-1">※ プライベートサロンのため、詳細な部屋番号はご予約確定時にお伝えいたします。</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-medium text-brand-text tracking-widest uppercase mb-1">最寄り駅</h4>
                    <p>相鉄本線「鶴ヶ峰駅」南口より徒歩2分</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-medium text-brand-text tracking-widest uppercase mb-1">営業時間・定休日</h4>
                    <p>10:00 - 17:00 (最終受付 16:00)</p>
                    <p>定休日: 不定休</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-medium text-brand-text tracking-widest uppercase mb-1">お支払い方法</h4>
                    <p>現金 / VISA / MasterCard / American Express / JCB / QUICPay / PayPay</p>
                  </div>
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-7 h-[300px] sm:h-[450px] relative bg-brand-bg border border-brand-border/40">
              {/* Map Placeholder or simple minimal SVG map styling */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center space-y-4">
                <span className="font-serif text-lg font-light tracking-widest text-brand-text">miamio Salon Map</span>
                <p className="text-[11px] font-light leading-relaxed tracking-wider text-brand-muted max-w-sm">
                  駅前の喧騒から一本入った緩やかな坂道沿いにある、落ち着いた建物の3階にある一室です。
                </p>
                <a
                  href="https://maps.app.goo.gl/D2mJF8vQYfVJn7A59"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-brand-accent px-6 py-2.5 text-[10px] font-light tracking-[0.2em] text-brand-accent hover:bg-brand-accent hover:text-white transition-colors"
                >
                  GOOGLE MAP で開く
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
