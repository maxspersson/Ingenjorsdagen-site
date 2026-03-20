"use client";

import { useEffect, useState } from "react";
import { Fira_Sans } from "next/font/google";

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [grandPrizeOpen, setGrandPrizeOpen] = useState(false);
  const [preEventsOpen, setPreEventsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
  className={`sticky top-0 z-50 text-[#1f1f1f] transition-all duration-300 ${
    scrolled ? "bg-white/85 backdrop-blur-md shadow-md" : "bg-white"
  }`}
>
      <div className="flex justify-center px-6 pt-6 pb-5 md:pt-10 md:pb-6">
        <a href="/">
          <img
            src="/EngineeringDay-Logo.png"
            alt="Engineering Day"
            className={`w-auto transition-all duration-300 ${
              scrolled
                ? "h-[72px] sm:h-[82px] md:h-[112px]"
                : "h-[92px] sm:h-[104px] md:h-[152px]"
            }`}
          />
        </a>
      </div>

<div className="border-t border-[#d9a441] px-4 py-3 text-[#1f1f1f] sm:px-6 md:px-10">        <div className="hidden xl:flex items-center justify-between">
          <div
            className={`${firaSans.className} text-[10px] font-medium tracking-[0.18em] uppercase`}
          >
            STOCKHOLM, 21 OCTOBER 2026
          </div>

          <div
            className={`${firaSans.className} flex items-center gap-8 text-[10px] font-medium tracking-[0.16em] uppercase`}
          >
            <a
              href="/engineering-day-2026"
              className="transition-colors hover:text-[#d9a441]"
            >
              ENGINEERING DAY 2026
            </a>

            <a
              href="/attending-heroes"
              className="transition-colors hover:text-[#d9a441]"
            >
              ATTENDING HEROES
            </a>

            <div className="relative group flex items-center gap-2">
              <a
                href="/the-grand-prize-for-engineering"
                className="uppercase transition-colors hover:text-[#d9a441]"
              >
                THE GRAND PRIZE FOR ENGINEERING
              </a>

              <button
                type="button"
                className="text-[9px] transition-colors hover:text-[#d9a441]"
              >
                ▾
              </button>

              <div className="invisible absolute left-0 top-full z-50 w-80 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <div className="bg-white shadow-xl ring-1 ring-black/5">
                  <div className="py-3">
                    <a
                      href="/the-grand-prize-for-engineering/innovation"
                      className="block px-5 py-3 text-[11px] uppercase tracking-[0.12em] hover:bg-[#f7f3ea] hover:text-[#d9a441]"
                    >
                      INNOVATION
                    </a>

                    <a
                      href="/the-grand-prize-for-engineering/leadership"
                      className="block px-5 py-3 text-[11px] uppercase tracking-[0.12em] hover:bg-[#f7f3ea] hover:text-[#d9a441]"
                    >
                      LEADERSHIP
                    </a>

                    <a
                      href="/the-grand-prize-for-engineering/sustainability"
                      className="block px-5 py-3 text-[11px] uppercase tracking-[0.12em] hover:bg-[#f7f3ea] hover:text-[#d9a441]"
                    >
                      SUSTAINABILITY
                    </a>

                    <a
                      href="/the-grand-prize-for-engineering/rising-star"
                      className="block px-5 py-3 text-[11px] uppercase tracking-[0.12em] hover:bg-[#f7f3ea] hover:text-[#d9a441]"
                    >
                      RISING STAR
                    </a>

                    <a
                      href="/the-grand-prize-for-engineering/role-model-of-the-year"
                      className="block px-5 py-3 text-[11px] uppercase tracking-[0.12em] hover:bg-[#f7f3ea] hover:text-[#d9a441]"
                    >
                      ROLE MODEL OF THE YEAR
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group flex items-center gap-2">
              <a
                href="/pre-events"
                className="uppercase transition-colors hover:text-[#d9a441]"
              >
                PRE-EVENTS
              </a>

              <button
                type="button"
                className="text-[9px] transition-colors hover:text-[#d9a441]"
              >
                ▾
              </button>

              <div className="invisible absolute left-0 top-full z-50 w-72 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <div className="bg-white shadow-xl ring-1 ring-black/5">
                  <div className="py-3">
                    <a
                      href="/pre-events/goteborg"
                      className="block px-5 py-3 text-[11px] uppercase tracking-[0.12em] hover:bg-[#f7f3ea] hover:text-[#d9a441]"
                    >
                      CAREER DAY @ GÖTEBORG
                    </a>
                    <a
                      href="/pre-events/malmo"
                      className="block px-5 py-3 text-[11px] uppercase tracking-[0.12em] hover:bg-[#f7f3ea] hover:text-[#d9a441]"
                    >
                      CAREER DAY @ MALMÖ
                    </a>
                    <a
                      href="/pre-events/stockholm"
                      className="block px-5 py-3 text-[11px] uppercase tracking-[0.12em] hover:bg-[#f7f3ea] hover:text-[#d9a441]"
                    >
                      CAREER DAY @ STOCKHOLM
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="/contact-us"
              className="transition-colors hover:text-[#d9a441]"
            >
              CONTACT
            </a>
          </div>
        </div>

        <div className="flex xl:hidden items-center justify-between gap-4">
          <div
            className={`${firaSans.className} text-[9px] sm:text-[10px] font-medium tracking-[0.16em] uppercase`}
          >
            STOCKHOLM, 21 OCTOBER 2026
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className={`${firaSans.className} inline-flex items-center gap-2 text-[10px] font-medium tracking-[0.16em] uppercase`}
          >
            MENU
            <span className="text-[#d9a441] text-sm leading-none">
              {mobileMenuOpen ? "−" : "+"}
            </span>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
<div className="xl:hidden border-t border-[#d9a441] bg-white px-4 py-2 text-[#1f1f1f] sm:px-6">          <div
            className={`${firaSans.className} flex flex-col text-[11px] font-medium tracking-[0.14em] uppercase`}
          >
            <a
              href="/engineering-day-2026"
              className="border-b border-black/8 py-4"
            >
              ENGINEERING DAY 2026
            </a>

            <a
              href="/attending-heroes"
              className="border-b border-black/8 py-4"
            >
              ATTENDING HEROES
            </a>

            <div className="border-b border-black/8 py-4">
              <div className="flex items-center justify-between gap-4">
                <a
                  href="/the-grand-prize-for-engineering"
                  className="flex-1 text-left"
                >
                  THE GRAND PRIZE FOR ENGINEERING
                </a>

                <button
                  type="button"
                  aria-label="Toggle Grand Prize submenu"
                  onClick={() => setGrandPrizeOpen((prev) => !prev)}
                  className="shrink-0 text-[#d9a441] text-sm leading-none"
                >
                  {grandPrizeOpen ? "−" : "+"}
                </button>
              </div>

              {grandPrizeOpen && (
                <div className="mt-4 flex flex-col border-l border-[#d9a441]/40 pl-4 text-[10px] tracking-[0.12em] text-black/70">
                  <a
                    href="/the-grand-prize-for-engineering/innovation"
                    className="py-2"
                  >
                    INNOVATION
                  </a>
                  <a
                    href="/the-grand-prize-for-engineering/leadership"
                    className="py-2"
                  >
                    LEADERSHIP
                  </a>
                  <a
                    href="/the-grand-prize-for-engineering/sustainability"
                    className="py-2"
                  >
                    SUSTAINABILITY
                  </a>
                  <a
                    href="/the-grand-prize-for-engineering/rising-star"
                    className="py-2"
                  >
                    RISING STAR
                  </a>
                  <a
                    href="/the-grand-prize-for-engineering/role-model-of-the-year"
                    className="py-2"
                  >
                    ROLE MODEL OF THE YEAR
                  </a>
                </div>
              )}
            </div>

            <div className="border-b border-black/8 py-4">
              <div className="flex items-center justify-between gap-4">
                <a href="/pre-events" className="flex-1 text-left">
                  PRE-EVENTS
                </a>

                <button
                  type="button"
                  aria-label="Toggle Pre-events submenu"
                  onClick={() => setPreEventsOpen((prev) => !prev)}
                  className="shrink-0 text-[#d9a441] text-sm leading-none"
                >
                  {preEventsOpen ? "−" : "+"}
                </button>
              </div>

              {preEventsOpen && (
                <div className="mt-4 flex flex-col border-l border-[#d9a441]/40 pl-4 text-[10px] tracking-[0.12em] text-black/70">
                  <a href="/pre-events/goteborg" className="py-2">
                    CAREER DAY @ GÖTEBORG
                  </a>
                  <a href="/pre-events/malmo" className="py-2">
                    CAREER DAY @ MALMÖ
                  </a>
                  <a href="/pre-events/stockholm" className="py-2">
                    CAREER DAY @ STOCKHOLM
                  </a>
                </div>
              )}
            </div>

            <a href="/contact-us" className="py-4">
              CONTACT
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}