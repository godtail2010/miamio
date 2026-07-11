import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center bg-brand-bg">
      <span className="text-[10px] tracking-[0.25em] text-brand-accent font-medium block mb-4">
        404 NOT FOUND
      </span>
      <h1 className="font-serif text-2xl sm:text-3xl font-light tracking-[0.15em] text-brand-text mb-6">
        ページが見つかりません
      </h1>
      <p className="text-xs font-light leading-relaxed tracking-wider text-brand-muted max-w-md mb-10">
        お探しのページは移動または削除された可能性があります。
        <br />
        お手数ですが、トップページよりお進みください。
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 border border-brand-accent px-8 py-3.5 text-[10px] font-light tracking-[0.2em] text-brand-accent hover:bg-brand-accent hover:text-white transition-colors"
      >
        <ArrowLeft size={12} strokeWidth={1.5} />
        トップページへ戻る
      </Link>
    </div>
  );
}
