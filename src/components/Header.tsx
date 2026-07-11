"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { name: "TOP", href: "/" },
  { name: "MENU", href: "/menu" },
  { name: "GALLERY", href: "/gallery" },
  { name: "ABOUT", href: "/about" },
  { name: "FIRST VISIT", href: "/first-visit" },
  { name: "ACCESS", href: "/access" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  // メニュー展開中は背景のスクロールをロックする
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-brand-border/40 bg-brand-bg/80 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
            {/* Eyelash SVG Icon */}
            <svg 
              width="26" 
              height="26" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="text-brand-accent group-hover:text-brand-text transition-colors mt-1"
            >
              {/* Eyelid curve */}
              <path d="M2 12C2 12 5 7.5 12 7.5C19 7.5 22 12 22 12" />
              {/* Lashes */}
              <path d="M12 7.5V4" />
              <path d="M16 8.5L18.5 5.5" />
              <path d="M8 8.5L5.5 5.5" />
              <path d="M19.5 10L22 8" />
              <path d="M4.5 10L2 8" />
            </svg>
            
            <div className="flex flex-col justify-center pt-1">
              <span className="text-[8px] sm:text-[9px] font-medium tracking-[0.25em] text-brand-muted uppercase leading-none mb-1 ml-0.5">
                Eyelash Salon
              </span>
              <span className="font-serif text-xl sm:text-2xl font-light tracking-[0.2em] text-brand-text leading-none">
                miamio
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative py-2 text-xs font-light tracking-[0.2em] text-brand-text transition-colors hover:text-brand-accent"
                >
                  {item.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeUnderline"
                      className="absolute bottom-0 left-0 h-[1px] w-full bg-brand-accent"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
            <a
              href="https://beauty.hotpepper.jp/kr/slnH000631368/coupon/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-brand-accent px-6 py-2.5 text-[10px] font-light tracking-[0.25em] text-brand-accent transition-all duration-300 hover:bg-brand-accent hover:text-white"
            >
              RESERVE
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="block md:hidden p-2 text-brand-text focus:outline-none"
          >
            {isOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 z-30 flex flex-col justify-center bg-brand-bg px-8 pt-20"
          >
            <nav className="flex flex-col items-center space-y-8 text-center">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="font-serif text-xl font-light tracking-[0.25em] text-brand-text hover:text-brand-accent transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://beauty.hotpepper.jp/kr/slnH000631368/coupon/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full max-w-xs border border-brand-accent py-4 text-xs font-light tracking-[0.25em] text-brand-accent bg-transparent hover:bg-brand-accent hover:text-white transition-all duration-300"
              >
                HOTPEPPER で予約する
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
