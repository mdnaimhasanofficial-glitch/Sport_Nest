"use client";

import Link from "next/link";

export function Header() {
  return (
    <header className="w-full bg-[#162A65] text-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-20 sm:px-6">
        {/* Left Logo */}
        <Link
          href="/"
          aria-label="Home"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#263C7E] sm:h-14 sm:w-14"
        >
          <svg
            viewBox="0 0 64 64"
            className="h-8 w-8 sm:h-10 sm:w-10"
            fill="none"
          >
            <path
              d="M32 9c0 0-2 3.2-2 4.6a2 2 0 0 0 4 0C34 12.2 32 9 32 9z"
              fill="#49C6F5"
            />
            <circle cx="23" cy="23" r="3" fill="#fff" />
            <circle cx="41" cy="23" r="3" fill="#fff" />
            <path d="M24 23h16l2.5 7h-21L24 23z" fill="#FBBF24" />
            <path d="M25.5 24.5h13l1.8 4.5H23.7l1.8-4.5z" fill="#38BDF8" />
            <rect x="20" y="30" width="24" height="12" rx="3" fill="#F59E0B" />
            <circle cx="24" cy="35" r="2" fill="#FEF08A" />
            <circle cx="40" cy="35" r="2" fill="#FEF08A" />
          </svg>
        </Link>

        {/* Right: Phone + WhatsApp + User */}
        <div className="flex items-center gap-3 sm:gap-6">
          <Link
            href="tel:+8801706785160"
            className="whitespace-nowrap text-xs font-medium text-white hover:text-sky-300 sm:text-base"
          >
            <span className="hidden sm:inline">Call us now: </span>
            +880170678-5160
          </Link>

          <Link
            href="https://wa.me/8801706785160"
            target="_blank"
            aria-label="WhatsApp"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white hover:bg-white/10"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.9"
            >
              <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
              <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
            </svg>
          </Link>

          <Link href={"/signin"}>SignIn</Link>
        </div>
      </div>
    </header>
  );
}
