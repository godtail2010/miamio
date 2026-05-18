"use client";

import { motion } from "framer-motion";

export default function StickyCTA() {
  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-brand-border/40 bg-brand-bg/80 backdrop-blur-md px-4 py-3 md:hidden shadow-[0_-5px_20px_-10px_rgba(0,0,0,0.05)]"
    >
      <div className="flex gap-3 max-w-md mx-auto">
        {/* Instagram CTA */}
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 border border-brand-border bg-brand-surface py-3 text-[10px] font-medium tracking-[0.25em] text-brand-text hover:bg-neutral-50 transition-colors rounded-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
          INSTAGRAM
        </a>

        {/* HotPepper CTA */}
        <a
          href="https://beauty.hotpepper.jp"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[1.5] flex items-center justify-center gap-2 bg-brand-accent py-3 text-[10px] font-medium tracking-[0.25em] text-white hover:bg-brand-accent-hover transition-colors rounded-none shadow-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          RESERVE
        </a>
      </div>
    </motion.div>
  );
}
