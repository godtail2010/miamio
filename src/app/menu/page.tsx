import FadeIn from "@/components/FadeIn";

const MENU_CATEGORIES = [
  {
    categoryName: "Lash Lift / 次世代まつげパーマ",
    desc: "自まつ毛本来の長さを活かし、瞳に光を呼び込むナチュラルな仕上がり。",
    items: [
      {
        name: "Natural Lash Lift / パリジェンヌ・ラッシュリフト",
        time: "60 min",
        price: "¥6,600",
        features: [
          "根元から80度上向きに立ち上げるリフトアップ効果",
          "まぶた全体の引き上げ効果と、自然な長さの演出",
          "ビューラー不要で自まつ毛を痛めずに持続",
        ],
        desc: "自まつ毛を一番長く見せることができる次世代デザイン。派手になりすぎず、上品ですっきりとした目元をご希望の方に最適です。",
      },
      {
        name: "Wet Look / 束感ラッシュリフト",
        time: "60 min",
        price: "¥7,700",
        features: [
          "最新の韓国風・束感デザイン仕上げ",
          "トリートメント美容液によるうるおい仕上げ",
          "クリアで際立つ存在感のある瞳を演出",
        ],
        desc: "韓国アイドルのようなツヤのある束感を再現したデザイン。瞳をクリアに、パッと華やかに引き立てます。仕上げ用コーティング剤の使い方もお教えします。",
      },
    ],
  },
  {
    categoryName: "Eyelash Extension / まつ毛エクステ",
    desc: "極細の厳選商材を使用し、上品な濃さと長さをプラスするデザインマツエク。",
    items: [
      {
        name: "Clean Wispy Flat Lash (80本)",
        time: "60 min",
        price: "¥7,700",
        features: [
          "自まつ毛に優しいフラットラッシュ使用",
          "中央が凹んだフラット形状で吸いつくような持続力",
          "抜け感を出したウイスピースタイル",
        ],
        desc: "「マツエクは濃くなりすぎて苦手」という方におすすめ。細く軽い質感で、まるで地毛が増えたかのようなソフトで上品な仕上がりです。",
      },
      {
        name: "Full Soft Volume Extension (120本)",
        time: "75 min",
        price: "¥8,800",
        features: [
          "骨格や眉の形に合わせた黄金比デザイン",
          "毛量や毛質に合わせ、長さと太さを細かくミックス",
          "しなやかでチクチクしない極上のつけ心地",
        ],
        desc: "しっかりと目元の印象を引き立てつつ、ナチュラルさを損なわないベストバランス。日常使いから特別なイベント前にも選ばれる人気本数です。",
      },
    ],
  },
  {
    categoryName: "Care / オプション・トリートメント",
    desc: "まつ毛の健康を第一に考え、長持ちと補修を両立させるケアメニュー。",
    items: [
      {
        name: "High Concentrated Keratin Treatment / 高濃度ケラチン補修",
        time: "10 min",
        price: "¥1,650",
        features: [
          "まつ毛の主成分である高濃度ケラチンをダイレクトに補給",
          "パーマやエクステのダメージを内部から修復",
          "まつ毛にハリとコシを与え、施術の持続力もアップ",
        ],
        desc: "パーマやエクステとの同時施術がおすすめです。乾燥や傷みが気になるまつ毛を芯からいたわります。",
      },
      {
        name: "Deep Lash Foaming Wash / ディープアイシャンプー",
        time: "10 min",
        price: "¥1,100",
        features: [
          "普段の洗顔では落としきれない毛穴の皮脂やメイク汚れを除去",
          "まつ毛ダニの予防、肌荒れの防止に効果的",
          "施術前の使用でグルーの吸着力が格段に向上",
        ],
        desc: "濃密な弾力泡で目元を優しくディープクレンジングします。すっきりとした爽快感が人気です。",
      },
    ],
  },
];

export const metadata = {
  title: "MENU | miamio",
  description: "miamioの施術メニューと料金表。パリジェンヌラッシュリフト、フラットラッシュ、まつげパーマ、高濃度ケラチントリートメントなどの料金と施術時間を紹介。",
};

export default function MenuPage() {
  return (
    <div className="py-16 px-6 sm:py-24 sm:px-12 max-w-5xl mx-auto">
      {/* Title */}
      <div className="text-center mb-20">
        <FadeIn direction="up">
          <span className="text-[10px] tracking-[0.25em] text-brand-accent font-medium block mb-2">
            SALON MENU
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-light tracking-[0.15em] text-brand-text">
            メニュー・料金
          </h1>
          <p className="mt-3 text-[10px] font-light tracking-wider text-brand-muted max-w-md mx-auto">
            すべてのメニューに丁寧なカウンセリングが含まれます。<br />当日の状態に合わせた調整も可能です。
          </p>
        </FadeIn>
      </div>

      {/* Menu Categories */}
      <div className="space-y-24">
        {MENU_CATEGORIES.map((category) => (
          <div key={category.categoryName} className="space-y-10">
            {/* Category Header */}
            <FadeIn direction="up">
              <div className="border-b border-brand-border/40 pb-4">
                <h2 className="font-serif text-lg sm:text-xl font-light tracking-wider text-brand-text">
                  {category.categoryName}
                </h2>
                <p className="text-[10px] font-light tracking-wider text-brand-muted mt-1">
                  {category.desc}
                </p>
              </div>
            </FadeIn>

            {/* Menu Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {category.items.map((item, itemIdx) => (
                <FadeIn
                  key={item.name}
                  direction="up"
                  delay={itemIdx * 0.05}
                  className="bg-white border border-brand-border/40 p-6 sm:p-8 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex justify-between items-start gap-4">
                      <h3 className="font-serif text-base font-light tracking-wider text-brand-text">
                        {item.name}
                      </h3>
                      <div className="text-right shrink-0">
                        <span className="text-sm font-medium tracking-wider text-brand-accent block">
                          {item.price}
                        </span>
                        <span className="text-[9px] font-light text-brand-muted tracking-widest block">
                          {item.time}
                        </span>
                      </div>
                    </div>

                    {/* Desc */}
                    <p className="text-[11px] font-light leading-relaxed tracking-wider text-brand-muted">
                      {item.desc}
                    </p>

                    {/* Features checklist */}
                    <ul className="space-y-2 pt-2 border-t border-brand-border/10">
                      {item.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2 text-[10px] font-light tracking-wider text-brand-text">
                          <span className="text-brand-accent mt-0.5">•</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA button inside card */}
                  <div className="mt-8 pt-4">
                    <a
                      href="https://beauty.hotpepper.jp/kr/slnH000631368/coupon/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full block text-center border border-brand-accent py-3 text-[10px] font-light tracking-[0.25em] text-brand-accent hover:bg-brand-accent hover:text-white transition-colors"
                    >
                      HOTPEPPER でこのメニューを予約
                    </a>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Note Section */}
      <FadeIn direction="up" className="mt-24 p-8 bg-brand-bg border border-brand-border/40 text-center">
        <h4 className="font-serif text-sm font-light tracking-wider text-brand-text mb-3">
          施術に関するご案内
        </h4>
        <p className="text-[10px] font-light leading-relaxed tracking-wider text-brand-muted max-w-xl mx-auto space-y-1">
          <span>・すべての表示料金は税込価格です。</span><br />
          <span>・当サロンは完全予約制の女性専用プライベートサロンです。</span><br />
          <span>・初めてお越しいただく際は、カウンセリングシートのご記入がございますので、予約時間の10分前を目安にご来店ください。</span>
        </p>
      </FadeIn>
    </div>
  );
}
