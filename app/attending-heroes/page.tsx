import SiteHeader from "@/app/components/SiteHeader";
import { Fira_Sans } from "next/font/google";

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function AttendingHeroesPage() {
  return (
    <main className="min-h-screen bg-[#f3f1ed]">
      <SiteHeader />

      {/* HERO */}
      <section className="px-6 md:px-12 lg:px-20 pt-24 pb-20">
        <div className="max-w-5xl mx-auto text-center">
          <p className={`${firaSans.className} text-[11px] uppercase tracking-[0.3em] text-[#d9a441] mb-6`}>
            Attending heroes
          </p>

          <h1 className="font-serif text-[3rem] md:text-[4.8rem] lg:text-[5.6rem] leading-[1.05] text-[#1f1f1f]">
            Voices shaping
            <br />
            Engineering Day 2026
          </h1>

          <p className="mt-6 text-[1.2rem] text-[#5f5a52] max-w-2xl mx-auto leading-[1.6]">
            Engineers, leaders and innovators contributing to talks, panels,
            masterclasses and conversations throughout the day.
          </p>
        </div>
      </section>

      {/* FEATURED */}
      <section className="px-6 md:px-12 lg:px-20 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className={`${firaSans.className} text-[12px] uppercase tracking-[0.25em] text-[#a27a26] mb-4`}>
              Featured
            </p>
            <div className="w-14 h-px bg-[#d9a441]" />
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <img src="/speaker1.jpg" className="w-full object-cover mb-6" />
              <h3 className="font-serif text-[2rem] text-[#1f1f1f]">
                Anna Svensson
              </h3>
              <p className="text-[#6a6256] mt-2">
                CTO, Example Company
              </p>
            </div>

            <div>
              <img src="/speaker2.jpg" className="w-full object-cover mb-6" />
              <h3 className="font-serif text-[2rem] text-[#1f1f1f]">
                Erik Johansson
              </h3>
              <p className="text-[#6a6256] mt-2">
                Head of Engineering, Tech AB
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAM SECTION */}
      <section className="px-6 md:px-12 lg:px-20 pb-32">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className={`${firaSans.className} text-[12px] uppercase tracking-[0.25em] text-[#a27a26] mb-4`}>
              Panels & conversations
            </p>
            <div className="w-14 h-px bg-[#d9a441]" />
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            
            {/* CARD */}
            <div>
              <img src="/speaker3.jpg" className="w-full object-cover mb-5" />
              <h4 className="font-serif text-[1.4rem] text-[#1f1f1f]">
                Lisa Andersson
              </h4>
              <p className="text-[#6a6256] mt-2 text-[0.95rem]">
                Product Lead, Innovation AB
              </p>
            </div>

            <div>
              <img src="/speaker4.jpg" className="w-full object-cover mb-5" />
              <h4 className="font-serif text-[1.4rem] text-[#1f1f1f]">
                Johan Berg
              </h4>
              <p className="text-[#6a6256] mt-2 text-[0.95rem]">
                Senior Engineer, Future Tech
              </p>
            </div>

            <div>
              <img src="/speaker5.jpg" className="w-full object-cover mb-5" />
              <h4 className="font-serif text-[1.4rem] text-[#1f1f1f]">
                Maria Nilsson
              </h4>
              <p className="text-[#6a6256] mt-2 text-[0.95rem]">
                Research Lead, AI Labs
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}