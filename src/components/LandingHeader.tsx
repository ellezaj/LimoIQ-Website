"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/content";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "http://app.limoiq.localtest.me";
const LOGIN_URL = `${APP_URL}/login`;
const REGISTER_URL = `${APP_URL}/register`;

export default function LandingHeader() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="relative z-50 border-b border-iq-line bg-iq-bar">
      <div className="iq-container flex h-[72px] items-center justify-between sm:h-20">
        <a
          href="#"
          onClick={close}
          className="font-iq-display text-[22px] font-bold leading-none text-iq-gold"
        >
          LIMO IQ
        </a>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-iq text-sm text-white transition-colors hover:text-iq-gold"
            >
              {link.label}
            </a>
          ))}
          <div className="ml-2 flex items-center gap-3">
            <a
              href={LOGIN_URL}
              target="_top"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center rounded-md border border-iq-gold/80 px-4 font-iq text-sm font-medium text-iq-gold transition hover:border-iq-gold hover:bg-iq-gold/10"
            >
              Login
            </a>
            <a
              href={REGISTER_URL}
              target="_top"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center rounded-md bg-iq-gold px-5 font-iq text-sm font-medium text-iq-deep transition hover:brightness-110"
            >
              Get Started
            </a>
          </div>
        </nav>

        <button
          type="button"
          onClick={() => {
            console.log("[LimoIQ] Hamburger toggle clicked. Current state:", open);
            setOpen((v) => !v);
          }}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="relative z-50 flex h-10 w-10 cursor-pointer touch-manipulation select-none items-center justify-center rounded-md text-white transition hover:text-iq-gold md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Main"
          className="absolute inset-x-0 top-full z-50 border-b border-iq-line bg-iq-bar shadow-2xl md:hidden"
        >
          <div className="iq-container flex flex-col py-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={close}
                className="py-3 font-iq text-[15px] text-white"
              >
                {link.label}
              </a>
            ))}
            <div className="mb-2 mt-4 flex flex-col gap-2.5">
              <a
                href={LOGIN_URL}
                target="_top"
                rel="noopener noreferrer"
                onClick={close}
                className="inline-flex h-11 items-center justify-center rounded-md border border-iq-gold/80 font-iq text-sm font-medium text-iq-gold transition hover:border-iq-gold hover:bg-iq-gold/10"
              >
                Login
              </a>
              <a
                href={REGISTER_URL}
                target="_top"
                rel="noopener noreferrer"
                onClick={close}
                className="inline-flex h-11 items-center justify-center rounded-md bg-iq-gold font-iq text-sm font-medium text-iq-deep transition hover:brightness-110"
              >
                Get Started
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
