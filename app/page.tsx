"use client";

import { useEffect, useState } from "react";
import { Fira_Sans } from "next/font/google";

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

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
    <main className="min-h-screen bg-[#f3f1ed] text-[#1f1f1f]">
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/85 backdrop-blur-md shadow-md" : "bg-[#efefef]"
        }`}
      >
        <div className="flex justify-center pt-10 pb-6">
          <a href="/">
  <img
    src="/EngineeringDay-Logo.png"
    alt="Engineering Day"
    className={`w-auto transition-all duration-300 ${
      scrolled ? "h-26 md:h-30" : "h-36 md:h-38"
    }`}
  />
</a>
        </div>

        <div className="border-t border-[#d9a441] px-10 py-3 flex justify-between items-center">
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
              className="hover:text-[#d9a441] transition-colors"
            >
              ENGINEERING DAY 2026
            </a>

            <a href="#" className="hover:text-[#d9a441] transition-colors">
              ATTENDING HEROES
            </a>

            <div className="relative group">
              <button className="flex items-center gap-2 uppercase hover:text-[#d9a441] transition-colors">
                <span>THE GRAND PRIZE FOR ENGINEERING</span>
                <span className="text-[9px]">▾</span>
              </button>

              <div className="invisible absolute left-0 top-full z-50 mt-3 w-80 translate-y-2 bg-white opacity-0 shadow-xl ring-1 ring-black/5 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="py-3">
                  <a
                    href="#"
                    className="block px-5 py-3 text-[11px] uppercase tracking-[0.12em] hover:bg-[#f7f3ea] hover:text-[#d9a441]"
                  >
                    INNOVATION
                  </a>
                  <a
                    href="#"
                    className="block px-5 py-3 text-[11px] uppercase tracking-[0.12em] hover:bg-[#f7f3ea] hover:text-[#d9a441]"
                  >
                    LEADERSHIP
                  </a>
                  <a
                    href="#"
                    className="block px-5 py-3 text-[11px] uppercase tracking-[0.12em] hover:bg-[#f7f3ea] hover:text-[#d9a441]"
                  >
                    RISING STAR
                  </a>
                  <a
                    href="#"
                    className="block px-5 py-3 text-[11px] uppercase tracking-[0.12em] hover:bg-[#f7f3ea] hover:text-[#d9a441]"
                  >
                    ROLE MODEL OF THE YEAR
                  </a>
                  <a
                    href="#"
                    className="block px-5 py-3 text-[11px] uppercase tracking-[0.12em] hover:bg-[#f7f3ea] hover:text-[#d9a441]"
                  >
                    SUSTAINABILITY
                  </a>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center gap-2 uppercase hover:text-[#d9a441] transition-colors">
                <span>PRE-EVENTS</span>
                <span className="text-[9px]">▾</span>
              </button>

              <div className="invisible absolute left-0 top-full z-50 mt-3 w-72 translate-y-2 bg-white opacity-0 shadow-xl ring-1 ring-black/5 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="py-3">
                  <a
                    href="#"
                    className="block px-5 py-3 text-[11px] uppercase tracking-[0.12em] hover:bg-[#f7f3ea] hover:text-[#d9a441]"
                  >
                    CAREER DAY @ GÖTEBORG
                  </a>
                  <a
                    href="#"
                    className="block px-5 py-3 text-[11px] uppercase tracking-[0.12em] hover:bg-[#f7f3ea] hover:text-[#d9a441]"
                  >
                    CAREER DAY @ MALMÖ
                  </a>
                  <a
                    href="#"
                    className="block px-5 py-3 text-[11px] uppercase tracking-[0.12em] hover:bg-[#f7f3ea] hover:text-[#d9a441]"
                  >
                    CAREER DAY @ STOCKHOLM
                  </a>
                </div>
              </div>
            </div>

            <a href="#" className="hover:text-[#d9a441] transition-colors">
              CONTACT
            </a>
          </div>
        </div>
      </nav>

      <section className="px-6 md:px-12 lg:px-20 py-24">
        <div className="max-w-5xl mx-auto">
          <p
            className={`${firaSans.className} text-[11px] uppercase tracking-[0.24em] text-[#a27a26] mb-6`}
          >
            START PAGE
          </p>

          <h1 className="text-5xl md:text-7xl leading-[1.02] font-serif font-light text-[#1f1f1f] max-w-4xl">
            Här bygger vi startsidan vidare.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#4d4d4d]">
            Nu har startsidan samma header som eventsidan. Nästa steg blir att
            bygga själva innehållet under den.
          </p>
        </div>
      </section>
    </main>
  );
}