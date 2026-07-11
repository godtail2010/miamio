import FadeIn from "@/components/FadeIn";

const MENU_CATEGORIES = [
  {
    id: "lash-lift",
    shortName: "まつげパーマ",
    categoryName: "Lash Lift / まつげパーマ",
    desc: "自まつ毛本来の長さを活かし、瞳に光を呼び込むナチュラルな仕上がり。",
    items: [
      {
        name: "【新規様】次世代ラッシュリフト or まつげパーマ",
        time: "60 min",
        price: "¥6,000",
        features: [
          "うるつやトリートメント付き◎",
          "ロットの種類豊富！デザイン選択可",
          "自まつ毛をぱっちり上げたい方に",
        ],
        desc: "エクステよりも自然に、自分のまつ毛を根元からしっかり立ち上げます。",
      },
      {
        name: "ラッシュリフト or まつげパーマ♪うるつやトリートメント付",
        time: "60 min",
        price: "¥5,200",
        features: [
          "うるつやトリートメント付き",
          "まつ毛パーマでぱっちりお目元に！",
          "再来のお客様にもおすすめ",
        ],
        desc: "定期的なメンテナンスでお得にまつ毛パーマを楽しみたい方に。",
      },
      {
        name: "【再来様】上下・次世代ラッシュリフト or まつげパーマ",
        time: "75 min",
        price: "¥7,700",
        features: [
          "うるつやトリートメント付き",
          "長さを最大限に見せるデザイン",
          "丸みを活かしたデザインも選択可能",
        ],
        desc: "上下のまつ毛パーマでさらに華やかな目元へ。※下まつげは状態によりお断りする場合があります。",
      },
      {
        name: "下まつ毛パーマ",
        time: "40 min",
        price: "¥4,500",
        features: [
          "下まつ毛もハッキリさせたい方に",
          "他メニューとセットで1000円オフ",
          "中顔面短縮＆小顔効果",
        ],
        desc: "下まつ毛を下に向かわせることで、目の縦幅を広げ印象的な目元を作ります。",
      },
    ],
  },
  {
    id: "eyebrow",
    shortName: "アイブロウ",
    categoryName: "Eyebrow / アイブロウ",
    desc: "骨格に合わせて美しい眉デザインを作り出し、お顔の第一印象を引き締めます。",
    items: [
      {
        name: "【新規様】アイブロウワックス似合わせ眉",
        time: "45 min",
        price: "¥5,000",
        features: [
          "骨格を見て下描きデザイン",
          "はみ出した産毛をワックス処理",
          "※3週間眉を伸ばした状態でご来店ください",
        ],
        desc: "自分では難しい眉毛のお手入れ。骨格に合わせた黄金比デザインをご提案します。",
      },
      {
        name: "【新規様】アイブロウワックス＋毛量調整で濃さ調整☆",
        time: "45 min",
        price: "¥5,400",
        features: [
          "濃さが気になる方に",
          "抜け感・透明感・ふんわり眉",
          "※3週間眉を伸ばした状態でご来店ください",
        ],
        desc: "通常のアイブロウワックスに、濃さを軽減させる毛量調整をプラスしたメニューです。",
      },
      {
        name: "【大人気♪】ブロウリフトワックス【眉パーマ＋眉ワックス】",
        time: "60 min",
        price: "¥5,900",
        features: [
          "自然な存在感・垢抜け眉",
          "ナチュラルに毛流れを動かします",
          "下がり眉・細眉さんにおすすめ",
        ],
        desc: "次世代眉パーマで毛流れを整え、ワックスで産毛を取り除く当店大人気のセットメニューです。",
      },
      {
        name: "【再来様】アイブロウワックス 美眉毛クーポン",
        time: "45 min",
        price: "¥4,900",
        features: [
          "再来のお客様専用クーポン",
          "定期的な眉毛のメンテナンスに",
          "※毛量調整＋500円にて追加可能",
        ],
        desc: "2回目以降も美しい眉毛をキープするためのメンテナンスメニューです。",
      },
      {
        name: "【美眉プラス】アイブロウワックス＋毛量調整",
        time: "45 min",
        price: "¥5,400",
        features: [
          "濃さが気になる方に",
          "抜け感・透明感・ふんわり眉",
          "通常のワックスに毛量調整をプラス",
        ],
        desc: "通常のアイブロウワックスに濃さを軽減させる毛量調整をプラス☆ 眉毛の濃さが気になる方にオススメ。※3週間眉を伸ばした状態でご来店ください。",
      },
      {
        name: "【美眉スタイリング】ブロウリフトワックス（眉パーマ＋眉ワックス）",
        time: "60 min",
        price: "¥7,000",
        features: [
          "立体的な眉毛を再現",
          "毛流れを整え不要な毛を除去",
          "自然で美しい仕上がりに",
        ],
        desc: "ワックスで不要な毛を除去して形を整え、パーマによって毛を立体的にみせて自然で美しい眉毛を再現することが可能です。※3週間眉を伸ばした状態でご来店ください",
      },
    ],
  },
  {
    id: "extension",
    shortName: "マツエク",
    categoryName: "Eyelash Extension / マツエク（極柔フラットラッシュ）",
    desc: "非常に柔らかく軽量なフラットラッシュを使用し、自まつ毛に優しく自然な密度感をプラス。",
    items: [
      {
        name: "【極柔フラットラッシュ】60本 (オフ無料)",
        time: "60 min",
        price: "¥3,800",
        features: [
          "ご新規様お試しに最適",
          "仕上げコート剤無料",
          "オフ無料♪",
        ],
        desc: "ナチュラルな目元にしたい方にオススメ☆ エクステが初めての方のお試しにも◎",
      },
      {
        name: "【極柔フラットラッシュ】80本 (オフ無料)",
        time: "60 min",
        price: "¥4,950",
        features: [
          "ナチュラル仕上げ",
          "仕上げコート剤無料",
          "ブライダルのお試しにも◎",
        ],
        desc: "すっぴんでも浮かない自然な濃さを出したい方にぴったりです。",
      },
      {
        name: "【極柔フラットラッシュ】100本 (オフ無料)",
        time: "60 min",
        price: "¥5,500",
        features: [
          "ナチュラルだけど存在感☆",
          "仕上げコート剤無料",
          "ぱっちりな目元にしたい方に",
        ],
        desc: "適度なボリューム感で、マスカラを塗ったような華やかさを演出します。",
      },
      {
        name: "【極柔フラットラッシュ】120本 (オフ無料)",
        time: "75 min",
        price: "¥6,100",
        features: [
          "当店大人気メニュー☆",
          "仕上げコート剤無料",
          "ブライダル・イベント前に♪",
        ],
        desc: "一番人気の本数！印象的な目元にしたい方にオススメです。",
      },
      {
        name: "【極柔フラットラッシュ】140本 (オフ無料)",
        time: "90 min",
        price: "¥7,000",
        features: [
          "しっかり濃さ出し密度up☆",
          "仕上げコート剤無料",
          "華やかな目元にしたい方に",
        ],
        desc: "アイライン効果をさらに引き立てたい方や、華やかなボリューム感を出したい方に。",
      },
      {
        name: "下まつげエクステ 20本〜40本",
        time: "",
        price: "¥2,300〜",
        features: [
          "ノーメイクでもアイラインを引いたような目元に",
          "目の縦幅を強調してぱっちりと",
          "上まつげメニューとの組み合わせ◎",
        ],
        desc: "下まつげにもエクステをプラスして、より印象的な目元へ。20本(¥2,300)/30本(¥3,300)/40本(¥4,300)から選択。",
      },
      {
        name: "アップワードラッシュ（オプション）",
        time: "",
        price: "¥1,500〜",
        features: [
          "自まつ毛を上向きに立ち上げてから装着",
          "下がりまつ毛さんにおすすめ",
          "エクステの角度が揃い華やかな仕上がりに",
        ],
        desc: "特殊な技術で自まつ毛を上向きに整えてからエクステを装着するオプションメニューです。オフ無し(¥1,500)/オフ有り(¥2,000)。",
      },
      {
        name: "【再来様】フラットラッシュ 付け足し (3週間以内)",
        time: "30〜60 min",
        price: "¥3,060〜",
        features: [
          "40本〜140本まで細かく選べる",
          "付け替えの場合は1週間保証付き",
          "再来のお客様専用",
        ],
        desc: "3週間以内のご来店でご利用いただける付け足しメニューです。40本(¥3,060)/60本(¥4,560)/80本(¥5,940)/100本(¥6,600)/120本(¥7,320)/140本(¥8,400)から選択。",
      },
      {
        name: "【再来様】フラットラッシュ コース",
        time: "45〜90 min",
        price: "¥3,570〜",
        features: [
          "仕上げコーティング込み",
          "付け替えの場合は1週間保証付き",
          "40本〜160本まで選べる",
        ],
        desc: "リピーター様専用のフラットラッシュコース。40本(¥3,570)/60本(¥5,320)/80本(¥6,930)/100本(¥7,700)/120本(¥8,540)/140本(¥9,800)/160本(¥11,200)から選択。",
      },
    ],
  },
  {
    id: "care",
    shortName: "ケア・その他",
    categoryName: "Care & Others / ケア・その他メニュー",
    desc: "まつ毛の健康状態を第一に考え、持続力を最大化するオプションメニュー。",
    items: [
      {
        name: "アイシャンプー",
        time: "10 min",
        price: "¥1,000",
        features: [
          "濃密な泡で摩擦レス洗浄",
          "メイク残りや皮脂汚れをオフ",
          "まつ毛ダニ予防・エクステの持続性up",
        ],
        desc: "日々の洗顔では落としきれないメイク汚れや皮脂をしっかりと洗い上げます。",
      },
      {
        name: "うるつやトリートメント＋アイシャンプー",
        time: "15 min",
        price: "¥1,500",
        features: [
          "トリートメントとシャンプーのセット",
          "切れ毛が改善",
          "まつ毛エクステ・パーマが長持ち",
        ],
        desc: "まつ毛の汚れを落としたらトリートメントでケア♪",
      },
      {
        name: "うるつやケラチントリートメント",
        time: "10 min",
        price: "¥500",
        features: [
          "紫外線などのダメージをケア",
          "まつ毛に栄養を補給",
          "ハリやコシのある健康なまつ毛に",
        ],
        desc: "ダメージを受けたまつげに栄養を与えることで、健康なまつげに整えます。",
      },
      {
        name: "【リピーター様】当店・他店エクステオフ",
        time: "15 min",
        price: "¥500",
        features: [
          "リピーター様向けのオフ",
          "まつげメニューと一緒にご予約ください",
          "丁寧なオフで自まつ毛を保護",
        ],
        desc: "付け替えオフの場合はまつげメニューと一緒に予約してください。オフのみをご希望の場合は¥2,000、ご新規様の付け替えオフは無料です。",
      },
      {
        name: "まつ毛パーマ落とし",
        time: "",
        price: "¥4,500",
        features: [
          "かかりすぎたカールをリセット",
          "他メニューとセットで¥1,000",
          "自まつ毛への負担を抑えて丁寧にオフ",
        ],
        desc: "まつげパーマのカールを落として自然な状態に戻します。パーマのかけ直し前のリセットにもおすすめです。",
      },
      {
        name: "口コミ特典アイシャンプー＆トリートメント☆プレゼント♪",
        time: "15 min",
        price: "¥0",
        features: [
          "口コミをご投稿いただいたお客様限定",
          "アイシャンプートリートメント",
          "次回ご来店時にプレゼント",
        ],
        desc: "口コミをご投稿いただいたお客様限定☆アイシャンプートリートメントプレゼント！※口コミの投稿を確認します。確認できない際は無効となります。",
      },
    ],
  },
];

export const metadata = {
  title: "MENU | miamio",
  description: "miamioの施術メニューと料金表。パリジェンヌラッシュリフト、フラットラッシュ、まつげパーマ、高濃度ケラチントリートメントなどの料金と施術時間を紹介。",
  alternates: {
    canonical: "/menu",
  },
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
          <p className="mt-3 text-xs font-light tracking-wider text-brand-muted max-w-md mx-auto">
            すべてのメニューに丁寧なカウンセリングが含まれます。<br />当日の状態に合わせた調整も可能です。
          </p>
        </FadeIn>
      </div>

      {/* Category Anchor Navigation */}
      <nav
        aria-label="メニューカテゴリ"
        className="sticky top-20 z-30 -mx-6 sm:mx-0 mb-16 bg-brand-bg/90 backdrop-blur-md border-y border-brand-border/40"
      >
        <div className="flex justify-start sm:justify-center gap-1 overflow-x-auto no-scrollbar px-4 py-3">
          {MENU_CATEGORIES.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className="shrink-0 px-4 py-2 text-[11px] font-light tracking-[0.15em] text-brand-muted hover:text-brand-accent transition-colors whitespace-nowrap"
            >
              {category.shortName}
            </a>
          ))}
        </div>
      </nav>

      {/* Menu Categories */}
      <div className="space-y-24">
        {MENU_CATEGORIES.map((category) => (
          <div
            key={category.categoryName}
            id={category.id}
            className="space-y-10 scroll-mt-40"
          >
            {/* Category Header */}
            <FadeIn direction="up">
              <div className="border-b border-brand-border/40 pb-4">
                <h2 className="font-serif text-lg sm:text-xl font-light tracking-wider text-brand-text">
                  {category.categoryName}
                </h2>
                <p className="text-[11px] font-light tracking-wider text-brand-muted mt-1">
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
                        {item.time && (
                          <span className="text-[9px] font-light text-brand-muted tracking-widest block">
                            {item.time}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Desc */}
                    <p className="text-xs font-light leading-relaxed tracking-wider text-brand-muted">
                      {item.desc}
                    </p>

                    {/* Features checklist */}
                    <ul className="space-y-2 pt-2 border-t border-brand-border/10">
                      {item.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2 text-[11px] font-light tracking-wider text-brand-text">
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
        <p className="text-[11px] font-light leading-relaxed tracking-wider text-brand-muted max-w-xl mx-auto space-y-1">
          <span>・すべての表示料金は税込価格です。</span><br />
          <span>・当サロンは完全予約制の女性専用プライベートサロンです。</span><br />
          <span>・初めてお越しいただく際は、カウンセリングシートのご記入がございますので、予約時間の10分前を目安にご来店ください。</span>
        </p>
      </FadeIn>
    </div>
  );
}
