import Image from "next/image";
import FadeIn from "@/components/FadeIn";

const IMAGES = {
  owner: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600", // Owner Portrait
  counseling: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800", // Counseling eye closeup
  hygiene: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800", // Clean beauty tools
  materials: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800", // Quality cosmetics bottles
  interior1: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800", // Interior salon
  interior2: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80&w=800", // Soft lighting sofa
};

export const metadata = {
  title: "ABOUT | miamio",
  description: "miamioのサロン紹介。オーナーアイデザイナーMioの想い、丁寧なカウンセリング方針、徹底した衛生管理、厳選した高品質商材についてご紹介します。",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="py-16 px-6 sm:py-24 sm:px-12 max-w-5xl mx-auto">
      {/* 1. Header Title */}
      <div className="text-center mb-20">
        <FadeIn direction="up">
          <span className="text-[10px] tracking-[0.25em] text-brand-accent font-medium block mb-2">
            ABOUT THE SALON
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-light tracking-[0.15em] text-brand-text">
            サロンについて
          </h1>
          <p className="mt-3 text-[10px] font-light tracking-wider text-brand-muted max-w-md mx-auto">
            miamioが大切にする、丁寧さ、安心感、そして「ナチュラルにセンスが良い」デザインへのこだわり。
          </p>
        </FadeIn>
      </div>

      {/* 2. Owner & Vision */}
      <section className="mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-5 relative h-[380px] sm:h-[480px]">
            <FadeIn direction="up">
              <Image
                src={IMAGES.owner}
                alt="Owner Mio Portrait"
                fill
                className="object-cover grayscale-[15%] border border-brand-border/20"
              />
            </FadeIn>
          </div>

          <div className="lg:col-span-7">
            <FadeIn direction="up" delay={0.15}>
              <span className="text-[10px] tracking-[0.25em] text-brand-accent font-medium block mb-2">
                OWNER&apos;S VOICE
              </span>
              <h2 className="font-serif text-2xl font-light tracking-wider text-brand-text mb-6">
                まつ毛を通じて、<br />日常に自信と心地よさを
              </h2>
              <div className="space-y-6 text-xs sm:text-sm font-light leading-relaxed tracking-wider text-brand-muted">
                <p>
                  はじめまして。miamioオーナーのMioです。
                  都内大手まつ毛サロンで指名売上トップの技術者として数千名のお客様を担当後、一人ひとりのお客様とより深く、静かに向き合いたいという想いから、鶴ヶ峰にこの小さなプライベートサロンを立ち上げました。
                </p>
                <p>
                  私が施術において最も大切にしているのは、「溶け込むような自然さ」です。
                  不自然に作り込まれた太いマツエクや、角度が急すぎるパーマではなく、ご自身の骨格、毛流れ、そして何よりその人が持つ「雰囲気」に美しく添うような目元づくりを目指しています。
                </p>
                <p>
                  「目元が変わるだけで、毎朝のメイクがこんなに楽しく、心が軽くなる。」
                  そんな嬉しい驚きを、ぜひ当サロンで体験していただければ幸いです。
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3. Core Values Grid */}
      <section className="space-y-20 border-t border-brand-border/40 pt-20">
        {/* Value 1: Counseling */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-4">
            <FadeIn direction="up">
              <span className="text-[9px] tracking-[0.25em] text-brand-accent font-medium block">
                01 / COUNSELING
              </span>
              <h3 className="font-serif text-xl font-light tracking-wider text-brand-text">
                瞳の魅力を最大限に引き出すカウンセリング
              </h3>
              <p className="text-xs sm:text-sm font-light leading-relaxed tracking-wider text-brand-muted">
                初めてのご来店時は、20分ほどカウンセリングの時間をいただいております。まつ毛の毛量や生え癖、まぶたの形を詳しく分析し、お客様が抱える不安やお好みのテイストをお聞きした上で、最適なデザインをスケッチや写真を用いてご提案します。
              </p>
            </FadeIn>
          </div>
          <div className="lg:col-span-6 relative h-[250px] sm:h-[300px]">
            <FadeIn direction="up" delay={0.1}>
              <Image
                src={IMAGES.counseling}
                alt="Counseling process"
                fill
                className="object-cover grayscale-[10%]"
              />
            </FadeIn>
          </div>
        </div>

        {/* Value 2: Hygiene */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 lg:order-2 space-y-4">
            <FadeIn direction="up">
              <span className="text-[9px] tracking-[0.25em] text-brand-accent font-medium block">
                02 / SANITATION
              </span>
              <h3 className="font-serif text-xl font-light tracking-wider text-brand-text">
                医療機関レベルの徹底した衛生管理
              </h3>
              <p className="text-xs sm:text-sm font-light leading-relaxed tracking-wider text-brand-muted">
                お客様のデリケートな目元に直接触れるため、器具の消毒管理は最優先事項です。施術に使用するピンセット類は、毎回超音波洗浄器と紫外線殺菌機にて消毒処理を施しています。また、アイパッチやマイクロブラシ等はすべて使い捨て商材を採用し、お客様ごとに新しいものを使用しています。
              </p>
            </FadeIn>
          </div>
          <div className="lg:col-span-6 lg:order-1 relative h-[250px] sm:h-[300px]">
            <FadeIn direction="up" delay={0.1}>
              <Image
                src={IMAGES.hygiene}
                alt="Hygiene management"
                fill
                className="object-cover grayscale-[10%]"
              />
            </FadeIn>
          </div>
        </div>

        {/* Value 3: Premium Products */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-4">
            <FadeIn direction="up">
              <span className="text-[9px] tracking-[0.25em] text-brand-accent font-medium block">
                03 / PRODUCTS
              </span>
              <h3 className="font-serif text-xl font-light tracking-wider text-brand-text">
                まつ毛をいたわる厳選された高品質商材
              </h3>
              <p className="text-xs sm:text-sm font-light leading-relaxed tracking-wider text-brand-muted">
                施術時に使用する薬剤やグルー（接着剤）は、すべてアレルギーテスト済みの低刺激な国産最高級品のみを厳選しています。ラッシュリフトではまつ毛の痛みを補修する高濃度トリートメント剤を標準仕様し、マツエクでは非常に軽くて柔らかい「極細フラットラッシュ」を使用することで、地まつ毛への負担を最小限に抑えています。
              </p>
            </FadeIn>
          </div>
          <div className="lg:col-span-6 relative h-[250px] sm:h-[300px]">
            <FadeIn direction="up" delay={0.1}>
              <Image
                src={IMAGES.materials}
                alt="Premium materials"
                fill
                className="object-cover grayscale-[10%]"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 4. Salon Space Interior */}
      <section className="border-t border-brand-border/40 pt-20 mt-20">
        <div className="text-center mb-12">
          <FadeIn direction="up">
            <span className="text-[10px] tracking-[0.25em] text-brand-accent font-medium block mb-2">
              ENVIRONMENT
            </span>
            <h3 className="font-serif text-2xl font-light tracking-[0.15em] text-brand-text">
              心ほぐれるプライベート空間
            </h3>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FadeIn direction="up" className="relative h-[250px] sm:h-[350px]">
            <Image
              src={IMAGES.interior1}
              alt="Salon environment view 1"
              fill
              className="object-cover grayscale-[5%]"
            />
          </FadeIn>
          <FadeIn direction="up" delay={0.1} className="relative h-[250px] sm:h-[350px]">
            <Image
              src={IMAGES.interior2}
              alt="Salon environment view 2"
              fill
              className="object-cover grayscale-[5%]"
            />
          </FadeIn>
        </div>

        <FadeIn direction="up" className="mt-8 text-center max-w-lg mx-auto">
          <p className="text-[11px] font-light leading-relaxed tracking-wider text-brand-muted">
            サロン内は完全貸切となっておりますので、他のお客様と居合わせることはございません。
            施術中は、包み込まれるような寝心地の最高級リクライニングソファで、静かに音楽を聴きながらリラックスしてお過ごしいただけます。
          </p>
        </FadeIn>
      </section>
    </div>
  );
}
