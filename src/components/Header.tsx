"use client";

import { useState } from "react";
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

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-brand-border/40 bg-brand-bg/80 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="font-serif text-2xl font-light tracking-[0.2em] text-brand-text">
              miamio
            </span>
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
