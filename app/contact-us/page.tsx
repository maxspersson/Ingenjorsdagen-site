"use client";

import SiteHeader from "@/app/components/SiteHeader";
import { Fira_Sans } from "next/font/google";

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function ContactUsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f3f1ed] text-[#1f1f1f]">
      <SiteHeader />

      <section className="bg-[#f3f1ed] px-5 pt-20 pb-14 md:px-12 md:pt-28 md:pb-20 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-9 md:mb-12">
            <p
              className={`${firaSans.className} mb-4 text-[12px] uppercase tracking-[0.22em] text-[#a27a26] md:text-[13px] md:tracking-[0.24em]`}
            >
              CONTACT
            </p>

            <div className="h-px w-14 bg-[#d9a441]" />
          </div>

          <div className="mx-auto mb-10 max-w-4xl text-center md:mb-14">
            <h1 className="mb-5 font-serif text-[2.35rem] font-light leading-[1.02] text-[#1f1f1f] sm:text-[2.8rem] md:mb-6 md:text-[4.4rem] lg:text-[5rem]">
              Get in touch
            </h1>

            <p className="mx-auto max-w-[23rem] text-[1.06rem] italic leading-[1.5] text-[#5f5a52] sm:max-w-[31rem] sm:text-[1.14rem] md:max-w-none md:text-[1.4rem] md:leading-[1.45]">
              Questions about Engineering Day, partnerships or participation.
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <p className="text-center text-[1.02rem] leading-[1.78] text-[#2c2c2c] sm:text-[1.08rem] md:text-[1.3rem] md:leading-[1.82]">
              Whether you would like to learn more about Engineering Day,
              explore a partnership or get in touch with the team, we are happy
              to hear from you.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f1ed] px-5 pt-4 pb-20 md:px-12 md:pt-8 md:pb-28 lg:px-20">
        <div className="mx-auto max-w-5xl border-t border-black/10">
          <div className="grid grid-cols-1 gap-4 border-b border-black/10 py-6 md:grid-cols-[240px_1fr] md:gap-6 md:py-10">
            <div>
              <p
                className={`${firaSans.className} text-[11px] uppercase tracking-[0.16em] text-[#8b8276] md:text-[12px] md:tracking-[0.18em]`}
              >
                General inquiries
              </p>
            </div>

            <div>
              <a
                href="mailto:info@ingenjorsdagen.se"
                className="break-words font-serif text-[1.35rem] leading-[1.12] text-[#1f1f1f] transition-colors hover:text-[#a27a26] sm:text-[1.5rem] md:text-[2rem] md:leading-[1.15]"
              >
                info@ingenjorsdagen.se
              </a>

              <p className="mt-3 text-[0.98rem] leading-[1.75] text-[#55514a] sm:text-[1rem] md:text-[1.08rem] md:leading-[1.8]">
                For general questions about Engineering Day, participation,
                programme information or the event platform.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 border-b border-black/10 py-6 md:grid-cols-[240px_1fr] md:gap-6 md:py-10">
            <div>
              <p
                className={`${firaSans.className} text-[11px] uppercase tracking-[0.16em] text-[#8b8276] md:text-[12px] md:tracking-[0.18em]`}
              >
                Partnerships & collaborations
              </p>
            </div>

            <div>
              <a
                href="mailto:linus.persson@nyteknikgroup.se"
                className="break-words font-serif text-[1.35rem] leading-[1.12] text-[#1f1f1f] transition-colors hover:text-[#a27a26] sm:text-[1.5rem] md:text-[2rem] md:leading-[1.15]"
              >
                linus.persson@nyteknikgroup.se
              </a>

              <p className="mt-3 text-[0.98rem] leading-[1.75] text-[#55514a] sm:text-[1rem] md:text-[1.08rem] md:leading-[1.8]">
                For partnership opportunities, collaborations and conversations
                related to Engineering Day and The Grand Prize for Engineering.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#f3f1ed] pt0 pb-12 md:pt0 md:pb-14">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-6">
          <p className="text-[0.98rem] leading-[1.82] text-[#3e3c38] sm:text-[1.02rem] md:text-[1.15rem] md:leading-[1.9]">
            Engineering Day - Sweden&apos;s first official day for engineers. We
            celebrate our engineers and their powers of innovation, creativity
            and hard work. The event is also a forum for knowledge-sharing and
            networking.
          </p>

          <p className="mt-4 text-[13px] italic tracking-[0.02em] text-black/40 md:mt-5 md:text-sm">
            A part of Ny Teknik
          </p>

          <div className="mt-10 flex items-center justify-center gap-7 md:mt-12 md:gap-8">
            <a
              href="https://www.linkedin.com/company/ingenj%C3%B6rsdagen/"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-60 transition duration-200 hover:opacity-100"
            >
              <img
                src="/Linkedin.svg"
                alt="LinkedIn"
                className="h-5 w-5 object-contain"
              />
            </a>

            <a
              href="https://www.instagram.com/engineeringdaysweden/"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-60 transition duration-200 hover:opacity-100"
            >
              <img
                src="/Instagram.png"
                alt="Instagram"
                className="h-5 w-5 object-contain"
              />
            </a>

            <a
              href="https://open.spotify.com/show/6FcEbcTbMfue0FLgwIoM8a?si=5d52f0a791e14f04"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-60 transition duration-200 hover:opacity-100"
            >
              <img
                src="/Spotify.png"
                alt="Spotify"
                className="h-5 w-5 object-contain"
              />
            </a>

            <a
              href="https://www.nyteknik.se/ingenjorsdagen"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-60 transition duration-200 hover:opacity-100"
            >
              <img
                src="/Website.png"
                alt="Ny Teknik"
                className="h-5 w-5 object-contain"
              />
            </a>
          </div>

          <div className="mt-10 text-[10px] uppercase tracking-[0.12em] text-black/30 md:mt-12 md:text-[11px]">
            © 2026 Ny Teknik
          </div>
        </div>
      </footer>
    </main>
  );
}