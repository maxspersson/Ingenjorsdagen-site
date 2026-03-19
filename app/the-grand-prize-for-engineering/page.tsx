"use client";

import { useEffect, useState } from "react";
import { Fira_Sans } from "next/font/google";

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function SiteHeader() {
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
    <main className="min-h-screen bg-[#111111]">
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
          scrolled ? "h-[104px] md:h-[112px]" : "h-[144px] md:h-[152px]"
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

      {/* GRAND PRIZE */}
      <div className="relative group flex items-center gap-2">
        <a
          href="/the-grand-prize-for-engineering"
          className="uppercase hover:text-[#d9a441] transition-colors"
        >
          THE GRAND PRIZE FOR ENGINEERING
        </a>

        <span className="text-[9px]">▾</span>

        <div className="invisible absolute left-0 top-full z-50 mt-3 w-80 translate-y-2 bg-white opacity-0 shadow-xl ring-1 ring-black/5 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
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

      {/* PRE EVENTS */}
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

 <section className="relative overflow-hidden bg-[#0f0e0d] text-[#f4efe7]">
  {/* VIDEO */}
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

  {/* LIGHTER OVERLAY */}
  <div className="absolute inset-0 bg-black/42" />

  {/* GOLD ATMOSPHERE */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(217,164,65,0.12),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.04),transparent_24%)]" />

  {/* DEPTH */}
  <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.34)_0%,rgba(0,0,0,0.18)_40%,rgba(0,0,0,0.42)_100%)]" />

  <div className="relative px-6 md:px-12 lg:px-20">
    <div className="mx-auto flex min-h-[82vh] max-w-7xl items-center pt-20 pb-32">
      <div className="max-w-4xl">
        <p
          className={`${firaSans.className} mb-8 text-[11px] uppercase tracking-[0.28em] text-[#d9a441]`}
        >
          The Grand Prize for Engineering
        </p>

        <h1 className="font-serif text-[3.5rem] leading-[0.96] font-light tracking-[-0.03em] text-[#f7f1e8] md:text-[5.1rem] lg:text-[6.2rem]">
          Celebrating the people
          <br />
          behind the progress
        </h1>
        <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-[#d6d0c7]">
Since 2021, we have celebrated the engineers, ideas and achievements that turn innovation into real-world impact.</p>
      </div>
    </div>
  </div>
</section>
<section className="bg-[#f3f1ed] px-6 md:px-12 lg:px-20 pt-24 md:pt-28 pb-24 md:pb-28">
  <div className="max-w-6xl mx-auto">
    <div className="mb-10 md:mb-12">
      <p
        className={`${firaSans.className} text-[13px] uppercase tracking-[0.24em] text-[#a27a26] mb-4`}
      >
        WHY?
      </p>

      <div className="w-14 h-px bg-[#d9a441]" />
    </div>

    <div className="max-w-4xl mx-auto text-center mb-12 md:mb-14">
      <h2 className="text-[3rem] md:text-[4.05rem] lg:text-[4.6rem] leading-[1.03] font-serif font-light text-[#1f1f1f] mb-6">
Engineering that matters
        <br />
      </h2>

      <p className="italic text-[1.22rem] md:text-[1.4rem] leading-[1.45] text-[#5f5a52]">
        A prize for engineering that creates lasting impact.
      </p>
    </div>

    <div className="max-w-3xl mx-auto">
      <p className="text-[1.16rem] md:text-[1.3rem] leading-[1.82] text-[#2c2c2c] mb-8">
        Engineering has always been at the core of progress. From infrastructure
        and energy systems to digital platforms and intelligent machines, it is
        engineers who translate ideas into reality.
      </p>

      <p className="text-[1.16rem] md:text-[1.3rem] leading-[1.82] text-[#2c2c2c] mb-10">
        The Grand Prize for Engineering exists to recognize individuals and
        teams whose work not only advances technology, but creates lasting
        impact in society.
      </p>

      <p className="text-[1.1rem] md:text-[1.22rem] leading-[1.9] text-[#555]">
        It highlights the people, ideas and achievements that move industries
        forward and shape the future through knowledge, courage and execution.
      </p>
    </div>
  </div>
</section>
<section className="bg-[#f3f1ed] px-6 md:px-12 lg:px-20 pt-24 md:pt-28 pb-24 md:pb-28">
  <div className="max-w-6xl mx-auto">
    <div className="mb-10 md:mb-12">
      <p
        className={`${firaSans.className} text-[13px] uppercase tracking-[0.24em] text-[#a27a26] mb-4`}
      >
        WHO?
      </p>

      <div className="w-14 h-px bg-[#d9a441]" />
    </div>

    <div className="max-w-4xl mx-auto text-center mb-12 md:mb-14">
      <h2 className="text-[3rem] md:text-[4.05rem] lg:text-[4.6rem] leading-[1.03] font-serif font-light text-[#1f1f1f] mb-6">
        The people behind the progress
      </h2>

      <p className="italic text-[1.22rem] md:text-[1.4rem] leading-[1.45] text-[#5f5a52]">
        Individuals and teams redefining what engineering can achieve.
      </p>
    </div>

    <div className="max-w-3xl mx-auto">
      <p className="text-[1.16rem] md:text-[1.3rem] leading-[1.82] text-[#2c2c2c] mb-8">
        The Grand Prize for Engineering recognizes individuals and teams who
        have distinguished themselves through exceptional work, innovation and
        leadership. Their contributions push boundaries, solve real-world
        challenges and create meaningful impact across industries.
      </p>

      <p className="text-[1.16rem] md:text-[1.3rem] leading-[1.82] text-[#2c2c2c] mb-10">
        The prize is awarded across five categories: Innovation, Leadership,
        Sustainability, Rising Star and Role Model of the Year. Together, they
        reflect the breadth of engineering and the many ways progress is shaped.
      </p>

      <p className="text-[1.1rem] md:text-[1.22rem] leading-[1.9] text-[#555]">
        From breakthrough technologies to transformative leadership, each
        category highlights those who contribute to building a more advanced,
        sustainable and resilient society.
      </p>
    </div>
  </div>
</section>
<section
  id="categories"
  className="bg-[#f3f1ed] px-6 md:px-12 lg:px-20 pt-24 md:pt-28 pb-24 md:pb-28"
>
  <div className="max-w-6xl mx-auto">
    <div className="mb-10 md:mb-12">
      <p
        className={`${firaSans.className} text-[13px] uppercase tracking-[0.24em] text-[#a27a26] mb-4`}
      >
        WHAT?
      </p>

      <div className="w-14 h-px bg-[#d9a441]" />
    </div>

    <div className="max-w-4xl mx-auto text-center mb-14 md:mb-16">
      <h2 className="text-[3rem] md:text-[4.05rem] lg:text-[4.6rem] leading-[1.03] font-serif font-light text-[#1f1f1f] mb-6">
        Five ways engineering
        <br />
        <span className="block">makes an impact</span>
      </h2>

      <p className="italic text-[1.22rem] md:text-[1.4rem] leading-[1.45] text-[#5f5a52]">
        Explore the five award categories within The Grand Prize for Engineering.
      </p>
    </div>

    <div className="max-w-4xl mx-auto border-t border-black/10">
      <a
        href="/the-grand-prize-for-engineering/innovation"
        className="group grid grid-cols-1 md:grid-cols-[1fr_auto] items-end gap-4 border-b border-black/10 py-7 md:py-8 transition-colors hover:text-[#a27a26]"
      >
        <div>
          <h3 className="font-serif text-[1.9rem] md:text-[2.4rem] leading-[1.05]">
            Innovation
          </h3>
          <p className="mt-2 text-[1rem] md:text-[1.08rem] leading-[1.7] text-[#5a5a5a] group-hover:text-[#6a6256]">
            For breakthrough ideas, technologies and solutions with the power to create real-world change.
          </p>
        </div>
        <span
          className={`${firaSans.className} text-[11px] uppercase tracking-[0.18em] text-[#8b8276] group-hover:text-[#a27a26]`}
        >
          Read more
        </span>
      </a>

      <a
        href="/the-grand-prize-for-engineering/leadership"
        className="group grid grid-cols-1 md:grid-cols-[1fr_auto] items-end gap-4 border-b border-black/10 py-7 md:py-8 transition-colors hover:text-[#a27a26]"
      >
        <div>
          <h3 className="font-serif text-[1.9rem] md:text-[2.4rem] leading-[1.05]">
            Leadership
          </h3>
          <p className="mt-2 text-[1rem] md:text-[1.08rem] leading-[1.7] text-[#5a5a5a] group-hover:text-[#6a6256]">
            For leaders who create progress by combining technical understanding with vision, courage and direction.
          </p>
        </div>
        <span
          className={`${firaSans.className} text-[11px] uppercase tracking-[0.18em] text-[#8b8276] group-hover:text-[#a27a26]`}
        >
          Read more
        </span>
      </a>

      <a
        href="/the-grand-prize-for-engineering/sustainability"
        className="group grid grid-cols-1 md:grid-cols-[1fr_auto] items-end gap-4 border-b border-black/10 py-7 md:py-8 transition-colors hover:text-[#a27a26]"
      >
        <div>
          <h3 className="font-serif text-[1.9rem] md:text-[2.4rem] leading-[1.05]">
            Sustainability
          </h3>
          <p className="mt-2 text-[1rem] md:text-[1.08rem] leading-[1.7] text-[#5a5a5a] group-hover:text-[#6a6256]">
            For engineering that helps accelerate the transition toward a more sustainable and resilient society.
          </p>
        </div>
        <span
          className={`${firaSans.className} text-[11px] uppercase tracking-[0.18em] text-[#8b8276] group-hover:text-[#a27a26]`}
        >
          Read more
        </span>
      </a>

      <a
        href="/the-grand-prize-for-engineering/rising-star"
        className="group grid grid-cols-1 md:grid-cols-[1fr_auto] items-end gap-4 border-b border-black/10 py-7 md:py-8 transition-colors hover:text-[#a27a26]"
      >
        <div>
          <h3 className="font-serif text-[1.9rem] md:text-[2.4rem] leading-[1.05]">
            Rising Star
          </h3>
          <p className="mt-2 text-[1rem] md:text-[1.08rem] leading-[1.7] text-[#5a5a5a] group-hover:text-[#6a6256]">
            For emerging engineers whose ideas, leadership or technical achievements point clearly toward the future.
          </p>
        </div>
        <span
          className={`${firaSans.className} text-[11px] uppercase tracking-[0.18em] text-[#8b8276] group-hover:text-[#a27a26]`}
        >
          Read more
        </span>
      </a>

      <a
        href="/the-grand-prize-for-engineering/role-model-of-the-year"
        className="group grid grid-cols-1 md:grid-cols-[1fr_auto] items-end gap-4 border-b border-black/10 py-7 md:py-8 transition-colors hover:text-[#a27a26]"
      >
        <div>
          <h3 className="font-serif text-[1.9rem] md:text-[2.4rem] leading-[1.05]">
            Role Model of the Year
          </h3>
          <p className="mt-2 text-[1rem] md:text-[1.08rem] leading-[1.7] text-[#5a5a5a] group-hover:text-[#6a6256]">
            For those who inspire others through leadership, expertise and a clear commitment to positive change.
          </p>
        </div>
        <span
          className={`${firaSans.className} text-[11px] uppercase tracking-[0.18em] text-[#8b8276] group-hover:text-[#a27a26]`}
        >
          Read more
        </span>
      </a>
    </div>
  </div>
</section>
<section className="relative overflow-hidden px-6 py-28 text-white md:px-12 md:py-32 lg:px-20">
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('/award-group.jpg')" }}
  />

  <div className="absolute inset-0 bg-black/90" />
  <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.55),rgba(0,0,0,0.72))]" />

  <div className="relative z-10 mx-auto max-w-4xl text-center">
    <h2 className="mb-6 font-serif text-[2.4rem] leading-[1.1] md:text-[3.4rem] lg:text-[4rem]">
      Engineering deserves recognition
    </h2>

    <p className="mb-10 text-[1.15rem] leading-[1.7] text-[#d0d0d0] md:text-[1.3rem]">
      The Grand Prize for Engineering highlights the people and ideas that move
      society forward — not for attention, but for impact.
    </p>

<a
  href="/engineering-day-2026"
  className="inline-block mt-6 text-[11px] uppercase tracking-[0.2em] text-[#a27a26] hover:text-[#d9a441] transition-colors"
>
  The winners will be celebrated at SPACE, Stockholm · October 21
</a>
  </div>
</section>
<footer className="bg-[#f3f1ed] pt-28 pb-14">
  <div className="max-w-3xl mx-auto text-center px-6">
    <p className="text-[1.05rem] md:text-[1.15rem] text-[#3e3c38] leading-[1.9]">
      Engineering Day – Sweden’s first official day for engineers. We celebrate our engineers and their powers of innovation, creativity and hard work. The event is also a forum for knowledge-sharing and networking.
    </p>

    <p className="mt-5 text-sm text-black/40 italic tracking-[0.02em]">
      A part of Ny Teknik
    </p>

    {/* Socials */}
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