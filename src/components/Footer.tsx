import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-border/40 bg-brand-bg py-16 px-6 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl font-light tracking-[0.2em] text-brand-text">
                miamio
              </span>
            </Link>
            <p className="text-xs font-light leading-relaxed tracking-wider text-brand-muted">
              ナチュラルにセンスが良い、<br />
              大人女性のためのプライベートアイラッシュサロン。
            </p>
          </div>

          {/* Site Map */}
          <div>
            <h4 className="text-[10px] font-medium tracking-[0.25em] text-brand-text uppercase mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {[
                { name: "TOP", href: "/" },
                { name: "MENU", href: "/menu" },
                { name: "GALLERY", href: "/gallery" },
                { name: "ABOUT", href: "/about" },
                { name: "FIRST VISIT", href: "/first-visit" },
                { name: "ACCESS", href: "/access" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[10px] font-light tracking-[0.2em] text-brand-muted hover:text-brand-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-[10px] font-medium tracking-[0.25em] text-brand-text uppercase mb-4">
              Salon Info
            </h4>
            <address className="not-italic text-[10px] font-light tracking-widest leading-relaxed text-brand-muted space-y-2">
              <p>神奈川県横浜市旭区鶴ケ峰２―６７－６ セイワビル３０２</p>
              <p>相鉄線 鶴ヶ峰駅 南口より徒歩2分</p>
              <p>営業時間: 10:00 - 17:00</p>
              <p>定休日: 不定休</p>
            </address>
          </div>

          {/* Social / Reservation Links */}
          <div>
            <h4 className="text-[10px] font-medium tracking-[0.25em] text-brand-text uppercase mb-4">
              Follow Us
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-light tracking-[0.2em] text-brand-muted hover:text-brand-accent transition-colors"
                >
                  INSTAGRAM
                </a>
              </li>
              <li>
                <a
                  href="https://beauty.hotpepper.jp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-light tracking-[0.2em] text-brand-muted hover:text-brand-accent transition-colors"
                >
                  HOTPEPPER BEAUTY
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 border-t border-brand-border/20 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-[9px] font-light tracking-[0.2em] text-brand-muted">
            &copy; {currentYear} miamio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
