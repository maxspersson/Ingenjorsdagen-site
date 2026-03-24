"use client";

import { Fira_Sans } from "next/font/google";
import SiteHeader from "@/app/components/SiteHeader";

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function Page() {
  return (
   <main className="min-h-screen overflow-x-hidden bg-[#111111]">
      <SiteHeader />

      <section className="relative overflow-hidden bg-[#0f0e0d] text-[#f4efe7]">
        <div className="absolute inset-0">
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/grand-prize-for-engineering.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="absolute inset-0 bg-black/42" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(217,164,65,0.12),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.04),transparent_24%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.34)_0%,rgba(0,0,0,0.18)_40%,rgba(0,0,0,0.42)_100%)]" />

        <div className="relative px-5 md:px-12 lg:px-20">
          <div className="mx-auto flex min-h-[72vh] max-w-7xl items-center pt-14 pb-16 sm:min-h-[76vh] sm:pt-16 sm:pb-20 md:min-h-[82vh] md:pt-20 md:pb-32">
            <div className="max-w-4xl">
              <p
                className={`${firaSans.className} mb-6 text-[10px] uppercase tracking-[0.26em] text-[#d9a441] sm:mb-7 md:mb-8 md:text-[11px]`}
              >
                The Grand Prize for Engineering
              </p>

              <h1 className="font-serif text-[2.7rem] leading-[0.94] font-light tracking-[-0.04em] text-[#f7f1e8] sm:text-[3.4rem] md:text-[5.1rem] lg:text-[6.2rem]">
                Celebrating the people
                <br />
                behind the progress
              </h1>

              <p className="mt-6 max-w-xl text-[1rem] leading-[1.75] text-[#d6d0c7] sm:mt-7 sm:text-[1.05rem] md:mt-8 md:text-[15px] md:leading-relaxed">
                Since 2021, we have celebrated the engineers, ideas and
                achievements that turn innovation into real-world impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f1ed] px-5 pt-20 pb-20 sm:pt-22 sm:pb-22 md:px-12 md:pt-24 md:pb-24 lg:px-20 lg:pt-28 lg:pb-28">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 md:mb-12">
            <p
              className={`${firaSans.className} mb-3 md:mb-4 text-[11px] md:text-[13px] uppercase tracking-[0.24em] text-[#a27a26]`}
            >
              WHY?
            </p>

            <div className="w-14 h-px bg-[#d9a441]" />
          </div>

          <div className="max-w-4xl mx-auto text-center mb-10 md:mb-14">
            <h2 className="text-[2.2rem] sm:text-[2.6rem] md:text-[4.05rem] lg:text-[4.6rem] leading-[1.04] font-serif font-light text-[#1f1f1f] mb-5 md:mb-6">
              Engineering that matters
            </h2>

            <p className="italic text-[1.06rem] sm:text-[1.14rem] md:text-[1.4rem] leading-[1.45] text-[#5f5a52]">
              A prize for engineering that creates lasting impact.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <p className="text-[1rem] sm:text-[1.05rem] md:text-[1.3rem] leading-[1.82] text-[#2c2c2c] mb-6 md:mb-8">
              Engineering has always been at the core of progress. From
              infrastructure and energy systems to digital platforms and
              intelligent machines, it is engineers who translate ideas into
              reality.
            </p>

            <p className="text-[1rem] sm:text-[1.05rem] md:text-[1.3rem] leading-[1.82] text-[#2c2c2c] mb-8 md:mb-10">
              The Grand Prize for Engineering exists to recognize individuals
              and teams whose work not only advances technology, but creates
              lasting impact in society.
            </p>

            <p className="text-[0.98rem] sm:text-[1.02rem] md:text-[1.22rem] leading-[1.85] md:leading-[1.9] text-[#555]">
              It highlights the people, ideas and achievements that move
              industries forward and shape the future through knowledge, courage
              and execution.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f1ed] px-5 pt-20 pb-20 sm:pt-22 sm:pb-22 md:px-12 md:pt-24 md:pb-24 lg:px-20 lg:pt-28 lg:pb-28">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 md:mb-12">
            <p
              className={`${firaSans.className} mb-3 md:mb-4 text-[11px] md:text-[13px] uppercase tracking-[0.24em] text-[#a27a26]`}
            >
              WHO?
            </p>

            <div className="w-14 h-px bg-[#d9a441]" />
          </div>

          <div className="max-w-4xl mx-auto text-center mb-10 md:mb-14">
            <h2 className="text-[2.2rem] sm:text-[2.6rem] md:text-[4.05rem] lg:text-[4.6rem] leading-[1.04] font-serif font-light text-[#1f1f1f] mb-5 md:mb-6">
              The people behind the progress
            </h2>

            <p className="italic text-[1.06rem] sm:text-[1.14rem] md:text-[1.4rem] leading-[1.45] text-[#5f5a52]">
              Individuals and teams redefining what engineering can achieve.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <p className="text-[1rem] sm:text-[1.05rem] md:text-[1.3rem] leading-[1.82] text-[#2c2c2c] mb-6 md:mb-8">
              The Grand Prize for Engineering recognizes individuals and teams
              who have distinguished themselves through exceptional work,
              innovation and leadership. Their contributions push boundaries,
              solve real-world challenges and create meaningful impact across
              industries.
            </p>

            <p className="text-[1rem] sm:text-[1.05rem] md:text-[1.3rem] leading-[1.82] text-[#2c2c2c] mb-8 md:mb-10">
              The prize is awarded across five categories: Innovation,
              Leadership, Sustainability, Rising Star and Role Model of the
              Year. Together, they reflect the breadth of engineering and the
              many ways progress is shaped.
            </p>

            <p className="text-[0.98rem] sm:text-[1.02rem] md:text-[1.22rem] leading-[1.85] md:leading-[1.9] text-[#555]">
              From breakthrough technologies to transformative leadership, each
              category highlights those who contribute to building a more
              advanced, sustainable and resilient society.
            </p>
          </div>
        </div>
      </section>

      <section
        id="categories"
        className="bg-[#f3f1ed] px-5 pt-20 pb-20 sm:pt-22 sm:pb-22 md:px-12 md:pt-24 md:pb-24 lg:px-20 lg:pt-28 lg:pb-28"
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 md:mb-12">
            <p
              className={`${firaSans.className} mb-3 md:mb-4 text-[11px] md:text-[13px] uppercase tracking-[0.24em] text-[#a27a26]`}
            >
              WHAT?
            </p>

            <div className="w-14 h-px bg-[#d9a441]" />
          </div>

          <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-[2.2rem] sm:text-[2.6rem] md:text-[4.05rem] lg:text-[4.6rem] leading-[1.04] font-serif font-light text-[#1f1f1f] mb-5 md:mb-6">
              Five ways engineering
              <br />
              <span className="block">makes an impact</span>
            </h2>

            <p className="italic text-[1.06rem] sm:text-[1.14rem] md:text-[1.4rem] leading-[1.45] text-[#5f5a52]">
              Explore the five award categories within The Grand Prize for
              Engineering.
            </p>
          </div>

          <div className="max-w-4xl mx-auto border-t border-black/10">
            <a
              href="/the-grand-prize-for-engineering/innovation"
              className="group grid grid-cols-1 md:grid-cols-[1fr_auto] items-start md:items-end gap-3 md:gap-4 border-b border-black/10 py-6 md:py-8 transition-colors hover:text-[#a27a26]"
            >
              <div>
<h3 className="font-serif text-[1.55rem] sm:text-[1.7rem] md:text-[2.4rem] leading-[1.05] text-[#1f1f1f]">                  
  Innovation
                </h3>
                <p className="mt-2 text-[0.98rem] md:text-[1.08rem] leading-[1.7] text-[#5a5a5a] group-hover:text-[#6a6256]">
                  For breakthrough ideas, technologies and solutions with the
                  power to create real-world change.
                </p>
              </div>
              <span
                className={`${firaSans.className} text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-[#8b8276] group-hover:text-[#a27a26]`}
              >
                Read more
              </span>
            </a>

            <a
              href="/the-grand-prize-for-engineering/leadership"
              className="group grid grid-cols-1 md:grid-cols-[1fr_auto] items-start md:items-end gap-3 md:gap-4 border-b border-black/10 py-6 md:py-8 transition-colors hover:text-[#a27a26]"
            >
              <div>
                <h3 className="font-serif text-[1.55rem] sm:text-[1.7rem] md:text-[2.4rem] leading-[1.05] text-[#1f1f1f]">  
                  Leadership
                </h3>
                <p className="mt-2 text-[0.98rem] md:text-[1.08rem] leading-[1.7] text-[#5a5a5a] group-hover:text-[#6a6256]">
                  For leaders who create progress by combining technical
                  understanding with vision, courage and direction.
                </p>
              </div>
              <span
                className={`${firaSans.className} text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-[#8b8276] group-hover:text-[#a27a26]`}
              >
                Read more
              </span>
            </a>

            <a
              href="/the-grand-prize-for-engineering/sustainability"
              className="group grid grid-cols-1 md:grid-cols-[1fr_auto] items-start md:items-end gap-3 md:gap-4 border-b border-black/10 py-6 md:py-8 transition-colors hover:text-[#a27a26]"
            >
              <div>
                <h3 className="font-serif text-[1.55rem] sm:text-[1.7rem] md:text-[2.4rem] leading-[1.05] text-[#1f1f1f]">  
                  Sustainability
                </h3>
                <p className="mt-2 text-[0.98rem] md:text-[1.08rem] leading-[1.7] text-[#5a5a5a] group-hover:text-[#6a6256]">
                  For engineering that helps accelerate the transition toward a
                  more sustainable and resilient society.
                </p>
              </div>
              <span
                className={`${firaSans.className} text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-[#8b8276] group-hover:text-[#a27a26]`}
              >
                Read more
              </span>
            </a>

            <a
              href="/the-grand-prize-for-engineering/rising-star"
              className="group grid grid-cols-1 md:grid-cols-[1fr_auto] items-start md:items-end gap-3 md:gap-4 border-b border-black/10 py-6 md:py-8 transition-colors hover:text-[#a27a26]"
            >
              <div>
                <h3 className="font-serif text-[1.55rem] sm:text-[1.7rem] md:text-[2.4rem] leading-[1.05] text-[#1f1f1f]">  
                  Rising Star
                </h3>
                <p className="mt-2 text-[0.98rem] md:text-[1.08rem] leading-[1.7] text-[#5a5a5a] group-hover:text-[#6a6256]">
                  For emerging engineers whose ideas, leadership or technical
                  achievements point clearly toward the future.
                </p>
              </div>
              <span
                className={`${firaSans.className} text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-[#8b8276] group-hover:text-[#a27a26]`}
              >
                Read more
              </span>
            </a>

            <a
              href="/the-grand-prize-for-engineering/role-model-of-the-year"
              className="group grid grid-cols-1 md:grid-cols-[1fr_auto] items-start md:items-end gap-3 md:gap-4 border-b border-black/10 py-6 md:py-8 transition-colors hover:text-[#a27a26]"
            >
              <div>
                <h3 className="font-serif text-[1.55rem] sm:text-[1.7rem] md:text-[2.4rem] leading-[1.05] text-[#1f1f1f]">  
                  Role Model of the Year
                </h3>
                <p className="mt-2 text-[0.98rem] md:text-[1.08rem] leading-[1.7] text-[#5a5a5a] group-hover:text-[#6a6256]">
                  For those who inspire others through leadership, expertise and
                  a clear commitment to positive change.
                </p>
              </div>
              <span
                className={`${firaSans.className} text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-[#8b8276] group-hover:text-[#a27a26]`}
              >
                Read more
              </span>
            </a>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-5 py-20 text-white sm:py-24 md:px-12 md:py-32 lg:px-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/award-group.jpg')" }}
        />

        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.55),rgba(0,0,0,0.72))]" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h2 className="mb-5 md:mb-6 font-serif text-[2rem] sm:text-[2.4rem] md:text-[3.4rem] lg:text-[4rem] leading-[1.08]">
            Engineering deserves recognition
          </h2>

          <p className="mb-8 md:mb-10 text-[1rem] sm:text-[1.08rem] md:text-[1.3rem] leading-[1.7] text-[#d0d0d0]">
            The Grand Prize for Engineering highlights the people and ideas that
            move society forward — not for attention, but for impact.
          </p>

          <a
            href="/engineering-day-2026"
            className="inline-block mt-4 md:mt-6 text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-[#a27a26] hover:text-[#d9a441] transition-colors"
          >
            The winners will be celebrated at SPACE, Stockholm · October 21
          </a>
        </div>
      </section>

      <footer className="bg-[#f3f1ed] pt-12 pb-12 md:pt-12 md:pb-14">
        <div className="max-w-3xl mx-auto text-center px-5 md:px-6">
          <p className="text-[1rem] md:text-[1.15rem] text-[#3e3c38] leading-[1.85] md:leading-[1.9]">
            Engineering Day – Sweden&apos;s first official day for engineers. We
            celebrate our engineers and their powers of innovation, creativity
            and hard work. The event is also a forum for knowledge-sharing and
            networking.
          </p>

          <p className="mt-5 text-sm text-black/40 italic tracking-[0.02em]">
            A part of Ny Teknik
          </p>

          <div className="flex justify-center items-center gap-8 mt-10 md:mt-12">
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

          <div className="mt-10 md:mt-12 text-[11px] tracking-[0.12em] text-black/30 uppercase">
            © 2026 Ny Teknik
          </div>
        </div>
      </footer>
    </main>
  );
}