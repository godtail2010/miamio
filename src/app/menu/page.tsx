import FadeIn from "@/components/FadeIn";

const MENU_CATEGORIES = [
  {
    categoryName: "Lash Lift / 次世代まつげパーマ",
    desc: "自まつ毛本来の長さを活かし、瞳に光を呼び込むナチュラルな仕上がり。",
    items: [
      {
        name: "【新規様】次世代ラッシュリフト or まつげパーマ",
        time: "60 min",
        price: "¥6,000",
        features: [
          "うるつやトリートメント付きでダメージを最小限に",
          "ロットの種類が豊富で、お好みのデザイン選択が可能",
          "自まつ毛をぱっちり立ち上げ、瞳に光を取り込みます",
        ],
        desc: "ご新規様向けの人気メニュー。お客様一人ひとりの目元の形に合わせたオーダーメイドデザインで、ナチュラルかつぱっちりした目元へ仕上げます。",
      },
      {
        name: "【再来様】ラッシュリフト or まつげパーマ（うるつやトリートメント付）",
        time: "60 min",
        price: "¥5,200",
        features: [
          "定期的なメンテナンス用のお得なリピートクーポン",
          "自まつ毛の潤いを保つうるつやトリートメント仕上げ",
          "デザインの微調整や前回の仕上がりの再現も可能",
        ],
        desc: "2回目以降ご来店のお客様専用のまつげパーマメニューです。美しいカールを常にキープできるよう、まつ毛への負担を考慮して丁寧に施術します。",
      },
      {
        name: "【再来様】上下・次世代ラッシュリフト or まつげパーマ",
        time: "75 min",
        price: "¥7,700",
        features: [
          "上下のまつ毛を同時にリフトアップする贅沢なメニュー",
          "下まつげのカールで中顔面短縮＆小顔効果を演出",
          "自まつ毛の長さを上下ともに最大限に引き出します",
        ],
        desc: "上下のまつげパーマを施すことで、目をさらに大きく見せ、すっきりとした印象に。下まつ毛の状態に合わせて最適なカールをご提案します（下まつ毛の状態により施術が難しい場合があります）。",
      },
    ],
  },
  {
    categoryName: "Eyebrow / 似合わせ眉・アイブロウ",
    desc: "骨格や自眉に合わせた黄金比デザインで、第一印象を変える眉スタイリング。",
    items: [
      {
        name: "【新規様】アイブロウワックス似合わせ眉（眉スタイリング）",
        time: "45 min",
        price: "¥5,000",
        features: [
          "骨格や筋肉の動きを見極める似合わせ眉デザイン",
          "肌に優しい低刺激ワックスによる余分な産毛の処理",
          "眉の描き方やメイクアドバイス付き",
        ],
        desc: "自分でお手入れするのが難しい方におすすめの眉毛ワックスメニュー。余分な毛を処理することで、朝のメイクが劇的に楽になります。（※3週間程度、眉毛を伸ばした状態でのご来店を推奨します）",
      },
      {
        name: "【新規様】ブロウリフトワックス（眉パーマ ＋ 眉ワックス）",
        time: "60 min",
        price: "¥5,900",
        features: [
          "毛流れを整えて立体感を出す眉毛パーマ（ブロウリフト）",
          "ワックス脱毛による不要な眉周りの産毛ケア",
          "下がり眉や薄眉、バラつきのある毛並みの改善に効果的",
        ],
        desc: "眉毛の毛流れを矯正して、ふんわりとした自然な太さと存在感を出すトレンドメニューです。眉全体の印象が垢抜けます。（※3週間程度、眉毛を伸ばした状態でのご来店を推奨します）",
      },
    ],
  },
  {
    categoryName: "Eyelash Extension / まつ毛エクステ（極柔フラットラッシュ）",
    desc: "非常に柔らかく軽量なフラットラッシュを使用し、自まつ毛に優しく自然な密度感をプラス。",
    items: [
      {
        name: "【新規様】極柔フラットラッシュ 80本（オフ無料）",
        time: "60 min",
        price: "¥4,950",
        features: [
          "他店オフ無料 ＆ 仕上げのコーティング剤無料サービス",
          "自然で派手すぎないナチュラルな目元の仕上がり",
          "ブライダルやお呼ばれイベントの「お試し」にも最適",
        ],
        desc: "自まつ毛の負担を極限まで抑えたフラットラッシュで、優しく密度をアップ。すっぴんでも浮かない自然な濃さを出したい方にぴったりです。",
      },
      {
        name: "【新規様】極柔フラットラッシュ 120本（オフ無料・当店大人気）",
        time: "75 min",
        price: "¥6,100",
        features: [
          "当サロンの定番・一番人気のエクステメニュー",
          "他店オフ無料 ＆ 仕上げのコーティング剤無料サービス",
          "アイライン効果と抜け感を両立するベストバランス",
        ],
        desc: "程よいボリューム感で、マスカラいらずのぱっちりした目元を演出します。初めてのエクステやデザインに迷われた際におすすめのメニューです。",
      },
      {
        name: "【新規様】極柔フラットラッシュ 140本（オフ無料）",
        time: "90 min",
        price: "¥7,000",
        features: [
          "他店オフ無料 ＆ 仕上げのコーティング剤無料サービス",
          "しっかりとした密度感と華やかな濃さを演出",
          "特別なイベントやボリュームが欲しい方向け",
        ],
        desc: "140本でまつ毛全体の密度を高く見せつつ、フラットラッシュ特有の柔らかさで自まつ毛への負担を抑えてしっかりと存在感のある瞳に仕上げます。",
      },
    ],
  },
  {
    categoryName: "Care / オプション・トリートメント",
    desc: "まつ毛の健康を第一に考え、長持ちと補修を両立させるケアメニュー。",
    items: [
      {
        name: "高濃度ケラチン補修トリートメント",
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
        name: "ディープアイシャンプー",
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
