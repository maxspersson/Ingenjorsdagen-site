"use client";

import Link from "next/link";

export default function SiteHeader() {
  return (
    <nav className="w-full bg-[#f3f1ed] text-[#1f1f1f]">
      {/* Logo */}
      <div className="flex justify-center pt-10 pb-6">
        <Link href="/" aria-label="Go to homepage">
          <img
            src="/EngineeringDay-Logo.png"
            alt="Engineering Day"
            className="h-28 md:h-32 w-auto"
          />
        </Link>
      </div>

      {/* Bottom row */}
      <div className="border-t border-[#d9a441] px-10 py-3 flex items-center justify-between text-[10px] uppercase tracking-[0.16em]">
        <div>
          Stockholm, 21 October 2026
        </div>

        <div className="flex gap-8">
          <Link href="/">Start</Link>
          <Link href="/engineering-day-2026">
            Engineering Day 2026
          </Link>
        </div>
      </div>
    </nav>
  );
}