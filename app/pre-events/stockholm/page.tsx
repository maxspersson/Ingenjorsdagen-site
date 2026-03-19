import SiteHeader from "@/app/components/SiteHeader";
import { Fira_Sans } from "next/font/google";

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function StockholmPage() {
  return (
    <main className="min-h-screen bg-[#f3f1ed]">
      <SiteHeader />

      {/* HERO */}
      <section className="relative min-h-[85vh] overflow-hidden bg-[#0f0f10] text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/pre-events-stockholm.jpg')" }}
        />

        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.32),rgba(0,0,0,0.14),rgba(0,0,0,0.44))]" />

        <div className="relative z-10 flex min-h-[85vh] items-center justify-center px-6 text-center">
          <div className="max-w-[1100px] -mt-16 md:-mt-12">
            <p
              className={`${firaSans.className} mb-6 text-[11px] uppercase tracking-[0.28em] text-[#d9a441]`}
            >
              Stockholm · 22 April 2026
            </p>

            <h1 className="font-serif text-white leading-[1.02]">
              <span className="block text-[2.6rem] md:text-[4.8rem] lg:text-[5.8rem] tracking-[-0.02em]">
                Career Day
              </span>

              <span className="mt-2 block text-[1.6rem] md:text-[2.4rem] lg:text-[2.8rem] italic text-white/90">
                @ Stockholm
              </span>
            </h1>

            <p className="mt-6 text-[1.1rem] md:text-[1.3rem] text-white/80 max-w-2xl mx-auto leading-[1.6]">
              A focused career fair at Kulturhuset, bringing together engineers,
              tech professionals and companies ready to recruit.
            </p>
          </div>
        </div>
      </section>

      {/* FACTS */}
      <section className="bg-[#f3f1ed] px-6 md:px-12 lg:px-20 pt-20 md:pt-24 pb-12">
        <div className="max-w-4xl mx-auto border-t border-black/10 pt-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 md:gap-y-0 md:gap-x-12 text-center">
            
            <div>
              <p className={`${firaSans.className} text-[10px] uppercase tracking-[0.18em] text-[#8b8276]`}>
                Date
              </p>
              <p className="mt-2 font-serif text-[1.4rem] text-[#1f1f1f]">
                22 April
              </p>
            </div>
            

            <div>
              <p className={`${firaSans.className} text-[10px] uppercase tracking-[0.18em] text-[#8b8276]`}>
                Location
              </p>
              <p className="mt-2 font-serif text-[1.4rem] text-[#1f1f1f]">
                Kulturhuset
              </p>
            </div>

            <div>
              <p className={`${firaSans.className} text-[10px] uppercase tracking-[0.18em] text-[#8b8276]`}>
                Time
              </p>
              <p className="mt-2 font-serif text-[1.4rem] text-[#1f1f1f]">
                09:00 - 12:00
              </p>
            </div>

            <div>
              <p className={`${firaSans.className} text-[10px] uppercase tracking-[0.18em] text-[#8b8276]`}>
                Admission
              </p>
              <p className="mt-2 font-serif text-[1.4rem] text-[#1f1f1f]">
                Free
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-[#f3f1ed] px-6 md:px-12 lg:px-20 py-24 md:py-28">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 md:mb-12">
            <p
              className={`${firaSans.className} text-[13px] uppercase tracking-[0.24em] text-[#a27a26] mb-4`}
            >
              Stockholm
            </p>

            <div className="w-14 h-px bg-[#d9a441]" />
          </div>

          <div className="max-w-4xl mx-auto text-center mb-12 md:mb-14">
            <h2 className="text-[3rem] md:text-[4.05rem] lg:text-[4.6rem] leading-[1.03] font-serif font-light text-[#1f1f1f] mb-6">
              Where engineers
              <br />
              meet opportunity
            </h2>

            <p className="italic text-[1.22rem] md:text-[1.4rem] leading-[1.45] text-[#5f5a52]">
              A morning built around real conversations, direct access and
              meaningful connections.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <p className="text-[1.16rem] md:text-[1.3rem] leading-[1.82] text-[#2c2c2c] mb-8">
              Stockholm is one of Sweden’s strongest hubs for engineering,
              technology and innovation. Career Day @ Stockholm brings together
              companies and engineers in a format designed to create direct
              connections in a focused and accessible setting.
            </p>

            <p className="text-[1.16rem] md:text-[1.3rem] leading-[1.82] text-[#2c2c2c] mb-10">
              At Kulturhuset, visitors can explore new opportunities, meet
              employers who are actively recruiting and take part in a morning
              built around conversations rather than noise. Whether you are
              actively looking for a new role or simply exploring what is next,
              the format is designed to make those next steps tangible.
            </p>

            <p className="text-[1.1rem] md:text-[1.22rem] leading-[1.9] text-[#555]">
              It is a space where companies and engineers meet on equal terms —
              without layers in between, and with a shared focus on finding the
              right match.
            </p>

            {/* CTA */}
            <div className="text-center mt-16">
              <a
                href="https://confetti.events/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${firaSans.className} text-[15px] uppercase tracking-[0.22em] text-[#a27a26] hover:text-[#d9a441] transition-colors`}
              >
                View event details & register
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#f3f1ed] pt-28 pb-14">
        <div className="max-w-3xl mx-auto text-center px-6">
          <p className="text-[1.05rem] md:text-[1.15rem] text-[#3e3c38] leading-[1.9]">
            Engineering Day – Sweden’s first official day for engineers. We
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
              <img src="/Linkedin.svg" className="h-5 w-5" />
            </a>

            <a
              href="https://www.instagram.com/engineeringdaysweden/"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-60 hover:opacity-100 transition duration-200"
            >
              <img src="/Instagram.png" className="h-5 w-5" />
            </a>

            <a
              href="https://open.spotify.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-60 hover:opacity-100 transition duration-200"
            >
              <img src="/Spotify.png" className="h-5 w-5" />
            </a>

            <a
              href="https://www.nyteknik.se/ingenjorsdagen"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-60 hover:opacity-100 transition duration-200"
            >
              <img src="/Website.png" className="h-5 w-5" />
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