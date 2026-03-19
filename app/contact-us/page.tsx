"use client";

import SiteHeader from "@/app/components/SiteHeader";
import { Fira_Sans } from "next/font/google";

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function ContactUsPage() {
  return (
    <main className="min-h-screen bg-[#f3f1ed] text-[#1f1f1f]">
      <SiteHeader />

      <section className="bg-[#f3f1ed] px-6 md:px-12 lg:px-20 pt-24 md:pt-28 pb-16 md:pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 md:mb-12">
            <p
              className={`${firaSans.className} text-[13px] uppercase tracking-[0.24em] text-[#a27a26] mb-4`}
            >
              CONTACT
            </p>

            <div className="w-14 h-px bg-[#d9a441]" />
          </div>

          <div className="max-w-4xl mx-auto text-center mb-12 md:mb-14">
            <h1 className="text-[3.2rem] md:text-[4.4rem] lg:text-[5rem] leading-[1.02] font-serif font-light text-[#1f1f1f] mb-6">
              Get in touch
            </h1>

            <p className="italic text-[1.22rem] md:text-[1.4rem] leading-[1.45] text-[#5f5a52]">
              Questions about Engineering Day, partnerships or participation.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <p className="text-[1.16rem] md:text-[1.3rem] leading-[1.82] text-[#2c2c2c] text-center">
              Whether you would like to learn more about Engineering Day,
              explore a partnership or get in touch with the team, we are happy
              to hear from you.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f1ed] px-6 md:px-12 lg:px-20 pt-6 md:pt-8 pb-24 md:pb-28">
        <div className="max-w-5xl mx-auto border-t border-black/10">
          <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6 border-b border-black/10 py-8 md:py-10">
            <div>
              <p
                className={`${firaSans.className} text-[12px] uppercase tracking-[0.18em] text-[#8b8276]`}
              >
                General inquiries
              </p>
            </div>

            <div>
              <a
                href="mailto:info@ingenjorsdagen.se"
                className="font-serif text-[1.6rem] md:text-[2rem] leading-[1.15] text-[#1f1f1f] hover:text-[#a27a26] transition-colors"
              >
                info@ingenjorsdagen.se
              </a>

              <p className="mt-3 text-[1rem] md:text-[1.08rem] leading-[1.8] text-[#55514a]">
                For general questions about Engineering Day, participation,
                programme information or the event platform.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6 border-b border-black/10 py-8 md:py-10">
            <div>
              <p
                className={`${firaSans.className} text-[12px] uppercase tracking-[0.18em] text-[#8b8276]`}
              >
                Partnerships & collaborations
              </p>
            </div>

            <div>
              <a
                href="mailto:linus.persson@nyteknikgroup.se"
                className="font-serif text-[1.6rem] md:text-[2rem] leading-[1.15] text-[#1f1f1f] hover:text-[#a27a26] transition-colors"
              >
                linus.persson@nyteknikgroup.se
              </a>

              <p className="mt-3 text-[1rem] md:text-[1.08rem] leading-[1.8] text-[#55514a]">
                For partnership opportunities, collaborations and conversations
                related to Engineering Day and The Grand Prize for Engineering.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#f3f1ed] pt-28 pb-14">
        <div className="max-w-3xl mx-auto text-center px-6">
          <p className="text-[1.05rem] md:text-[1.15rem] text-[#3e3c38] leading-[1.9]">
            Engineering Day - Sweden's first official day for engineers. We
            celebrate our engineers and their powers of innovation, creativity
            and hard work. The event is also a forum for knowledge-sharing and
            networking.
          </p>

          <p className="mt-5 text-sm text-black/40 italic tracking-[0.02em]">
            A part of Ny Teknik
          </p>

          <div className="flex justify-center items-center gap-8 mt-12">
            <a
              href="https://www.linkedin.com/company/ingenj%C3%B6rsdagen/"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-60 hover:opacity-100 transition duration-200"
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
              className="opacity-60 hover:opacity-100 transition duration-200"
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
              className="opacity-60 hover:opacity-100 transition duration-200"
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
              className="opacity-60 hover:opacity-100 transition duration-200"
            >
              <img
                src="/Website.png"
                alt="Ny Teknik"
                className="h-5 w-5 object-contain"
              />
            </a>
          </div>

          <div className="mt-12 text-[11px] tracking-[0.12em] text-black/30 uppercase">
            © 2026 Ny Teknik
          </div>
        </div>
      </footer>
    </main>
  );
}