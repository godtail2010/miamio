import FadeIn from "@/components/FadeIn";
import { Calendar, HelpCircle, AlertCircle } from "lucide-react";

export const metadata = {
  title: "FIRST VISIT | miamio",
  description: "初めての方へ。miamioのオンライン・ホットペッパー予約方法、ご来店から施術・お帰りまでの流れ、当日の注意事項やよくある不安について分かりやすくご案内します。",
  alternates: {
    canonical: "/first-visit",
  },
};

const VISITING_STEPS = [
  {
    step: "01",
    title: "ご予約",
    desc: "当サロンは完全予約制です。24時間受付可能なHotPepper Beautyより空き状況をご確認の上、ご予約ください。メニューに迷われる場合は「ラッシュリフト相談クーポン」または「マツエク本数相談クーポン」をお選びいただけますと、当日カウンセリングにて最適なご提案をいたします。",
  },
  {
    step: "02",
    title: "ご来店・カウンセリングシート記入",
    desc: "ご予約時間の10分前にお越しください。ウェルカムハーブティーを召し上がっていただきながら、カウンセリングシートに現在のまつ毛の状態や、アレルギーの有無、理想のデザインについてご記入いただきます。",
  },
  {
    step: "03",
    title: "丁寧なカウンセリング",
    desc: "シートをもとに、施術担当者がじっくりとお話を伺います。普段のメイクの雰囲気やお悩みに合わせ、骨格・毛流れを見極めながら、あなたに最も似合う毛質・カール・長さをミリ単位でデザイン設計します。疑問点や不安なことも、この時にすべてお気軽にお聞きください。",
  },
  {
    step: "04",
    title: "施術開始",
    desc: "包み込まれるような柔らかさの最高級電動リクライニングベッドでお休みいただきます。施術中は極力お肌に負担をかけないよう、デリケートな保護テープ貼りや商材の塗布を行います。多くのお客様が途中で眠りにつかれますので、どうぞ安心しておリラックスください。",
  },
  {
    step: "05",
    title: "お仕上がりの確認・アフターケア説明",
    desc: "鏡でお仕上がりを確認いただきます。その際、長持ちさせるための日々のお手入れ方法や、おすすめのコーティング剤の使い方、洗顔時の注意点などをアドバイスいたします。簡単なメイク直しができるパウダースペースもございます。",
  },
];

const PRECAUTIONS = [
  "アレルギーや過去にパーマ液・グルーでかぶれた経験がある方は、必ず事前にお申し出ください。敏感肌の方にはパッチテスト（有料・要事前予約）も実施可能です。",
  "施術当日は、マスカラ、アイライン、ビューラー、アイシャドウなどのアイメイクは一切行わずにお越しください。メイクが残っている場合、モチの低下やパーマのかかりムラの原因になります。",
  "美容整形手術、二重埋没、アートメイク、レーシック手術等を3ヶ月以内に受けられた方は、医師の許可がある場合を除き、施術をお控えいただいております。",
  "ハードコンタクトレンズをご使用中の方は、施術時に必ず外していただきます。ケースと保存液をご持参ください。（ソフトレンズは装着したままでも施術可能ですが、乾燥が気になる方は外されることをおすすめします。）",
];

export default function FirstVisitPage() {
  return (
    <div className="py-16 px-6 sm:py-24 sm:px-12 max-w-4xl mx-auto">
      {/* Title */}
      <div className="text-center mb-20">
        <FadeIn direction="up">
          <span className="text-[10px] tracking-[0.25em] text-brand-accent font-medium block mb-2">
            WELCOME TO miamio
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-light tracking-[0.15em] text-brand-text">
            初めての方へ
          </h1>
          <p className="mt-3 text-xs font-light tracking-wider text-brand-muted max-w-md mx-auto">
            ご来店からお帰りまでの流れ、よくある不安にお答えします。<br />初めてのマツエクやラッシュリフトも、安心してお任せください。
          </p>
        </FadeIn>
      </div>

      {/* 1. Reserve info */}
      <section className="mb-24 bg-white border border-brand-border/40 p-8 sm:p-10">
        <div className="flex items-start gap-4">
          <Calendar className="text-brand-accent shrink-0 mt-1" size={20} strokeWidth={1.5} />
          <div className="space-y-4">
            <h2 className="font-serif text-lg font-light tracking-wider text-brand-text">
              ご予約方法について
            </h2>
            <p className="text-xs sm:text-sm font-light leading-relaxed tracking-wider text-brand-muted">
              当サロンは、お客様一人ひとりに十分な時間を確保し丁寧におもてなしをするため、<b>完全予約制・完全貸切（1ゲスト制）</b>とさせていただいております。
              お電話やメールでの受付は行っておらず、予約管理の手間を排して施術に集中するため、すべて<b>HotPepper Beautyからのオンライン予約</b>に一本化しております。
            </p>
            <p className="text-xs font-light leading-relaxed tracking-wider text-brand-muted">
              空き状況の確認から予約確定まで数タップで完結いたします。下記の予約ボタンよりお気軽にお進みください。
            </p>
            <div className="pt-2">
              <a
                href="https://beauty.hotpepper.jp/kr/slnH000631368/coupon/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-brand-accent text-white px-8 py-3.5 text-[10px] font-light tracking-[0.25em] hover:bg-brand-accent-hover transition-colors"
              >
                HOTPEPPER BEAUTY で予約状況を確認
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Process / Flow */}
      <section className="mb-24">
        <div className="text-center mb-16">
          <FadeIn direction="up">
            <span className="text-[10px] tracking-[0.25em] text-brand-accent font-medium block mb-2">
              FLOW OF VISIT
            </span>
            <h2 className="font-serif text-2xl font-light tracking-[0.15em] text-brand-text">
              来店の流れ
            </h2>
          </FadeIn>
        </div>

        <div className="space-y-12 relative before:absolute before:left-6 before:top-2 before:bottom-2 before:w-[1px] before:bg-brand-border/40">
          {VISITING_STEPS.map((step, index) => (
            <FadeIn key={step.step} direction="up" delay={index * 0.05} className="relative pl-14 sm:pl-16">
              {/* Step indicator */}
              <div className="absolute left-3 -translate-x-1/2 w-6 h-6 rounded-full bg-brand-accent flex items-center justify-center border border-white text-white text-[9px] font-medium tracking-wider">
                {step.step}
              </div>
              <div className="bg-white border border-brand-border/40 p-6 sm:p-8 space-y-3">
                <h3 className="font-serif text-base font-light tracking-wider text-brand-text">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm font-light leading-relaxed tracking-wider text-brand-muted">
                  {step.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* 3. Precautions / Notes */}
      <section className="mb-24 bg-[#F7F5F2] border border-brand-border/40 p-8 sm:p-10">
        <div className="flex items-start gap-4">
          <AlertCircle className="text-brand-accent shrink-0 mt-1" size={20} strokeWidth={1.5} />
          <div className="space-y-6">
            <div>
              <h2 className="font-serif text-lg font-light tracking-wider text-brand-text mb-2">
                ご来店時の注意事項
              </h2>
              <p className="text-xs font-light leading-relaxed tracking-wider text-brand-muted">
                施術の効果を最大限に発揮し、安全に進めるため、以下の注意事項を事前にご確認ください。
              </p>
            </div>

            <ul className="space-y-4">
              {PRECAUTIONS.map((item, index) => (
                <li key={index} className="text-xs font-light leading-relaxed tracking-wider text-brand-muted flex items-start gap-2.5">
                  <span className="text-brand-accent mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Common worries */}
      <section className="border-t border-brand-border/40 pt-20">
        <div className="text-center mb-16">
          <FadeIn direction="up">
            <span className="text-[10px] tracking-[0.25em] text-brand-accent font-medium block mb-2">
              REASSURANCE
            </span>
            <h2 className="font-serif text-2xl font-light tracking-[0.15em] text-brand-text">
              よくある不安や疑問
            </h2>
          </FadeIn>
        </div>

        <div className="space-y-8">
          {[
            {
              q: "敏感肌やアレルギー体質でも大丈夫ですか？",
              a: "はい、当サロンでは低刺激の国産グルーやアルコールフリーの商材をご用意しております。また、心配な方にはパッチテストを施術前に行い、数日様子を見てから本施術を行うことも可能です。カウンセリング時にご相談ください。",
            },
            {
              q: "まつ毛が短い・少ないのですがパーマやエクステはできますか？",
              a: "全く問題ありません。自まつ毛が短めの方にもフィットするロッドや、地まつ毛の細さに合わせた超軽量フラットラッシュ（太さ0.1mm）をご用意しております。負担をかけずに、本来持っている長さを綺麗に引き出します。",
            },
            {
              q: "マツエクのモチ（持続期間）はどのくらいですか？",
              a: "毛周期やお手入れ環境にもよりますが、マツエクの場合は約4週間〜6週間、ラッシュリフト（まつ毛パーマ）の場合は約4週間〜8週間美しい状態が持続します。3〜4週間前後での定期的なお直し（リペア）をしていただくことで、常に美しい状態をキープいただけます。",
            },
          ].map((item, index) => (
            <FadeIn key={index} direction="up" delay={index * 0.05} className="bg-white border border-brand-border/40 p-6 sm:p-8 space-y-3">
              <div className="flex gap-3 items-start">
                <HelpCircle className="text-brand-accent shrink-0 mt-0.5" size={16} strokeWidth={1.5} />
                <h3 className="text-xs sm:text-sm font-medium tracking-wider text-brand-text">
                  {item.q}
                </h3>
              </div>
              <p className="text-xs sm:text-[13px] font-light leading-relaxed tracking-wider text-brand-muted pl-7">
                {item.a}
              </p>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
