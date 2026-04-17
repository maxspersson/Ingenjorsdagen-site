"use client";

import SiteHeader from "@/app/components/SiteHeader";
import { Fira_Sans, Lora } from "next/font/google";

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

type CityData = {
  seo?: {
    title?: string;
    description?: string;
    ogTitle?: string;
    ogDescription?: string;
    noIndex?: boolean;
    ogImage?: {
      alt?: string;
      asset?: {
        url?: string;
      };
    };
  };
  hero?: {
    eyebrow?: string;
    title?: string;
    subtitle?: string;
    mediaType?: "image" | "video";
    videoUrl?: string;
    image?: {
      asset?: {
        url?: string;
      };
      alt?: string;
    };
  };
  facts?: {
    date?: string;
    location?: string;
    time?: string;
    admission?: string;
  };
  content?: {
    label?: string;
    title?: string;
    intro?: string;
    body1?: string;
    body2?: string;
    body3?: string;
    ctaLabel?: string;
    ctaHref?: string;
  };
};

export default function PageClient({
  initialPageData,
}: {
  initialPageData: CityData;
}) {
  const data = initialPageData;

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f3f1ed] text-[#1f1f1f]">
      <SiteHeader />

      {/* HERO */}
      <section className="relative min-h-[85vh] overflow-hidden bg-black text-white">
        {data?.hero?.mediaType === "video" && data?.hero?.videoUrl ? (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={data.hero.videoUrl} type="video/mp4" />
          </video>
        ) : data?.hero?.image?.asset?.url ? (
          <img
            src={data.hero.image.asset.url}
            alt={data.hero.image.alt || "Hero image"}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/pre-events-stockholm.jpg')" }}
          />
        )}

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex min-h-[85vh] items-center justify-center px-5 text-center">
          <div>
            <p
              className={`${firaSans.className} text-[11px] uppercase tracking-[0.28em] text-[#d9a441]`}
            >
              {data?.hero?.eyebrow || "Pre-events"}
            </p>

            <h1 className={`${lora.className} whitespace-pre-line text-[4rem]`}>
              {data?.hero?.title || "Career Day @ Stockholm"}
            </h1>

            <p className="mx-auto mt-6 max-w-2xl whitespace-pre-line text-lg text-white/80">
              {data?.hero?.subtitle ||
                "A focused career fair at Kulturhuset, bringing together engineers, tech professionals and employers in the capital."}
            </p>
          </div>
        </div>
      </section>

      {/* FACTS */}
      <section className="px-5 py-16">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 text-center md:grid-cols-4">
          <div>
            <p className="text-xs uppercase text-[#8b8276]">Date</p>
            <p className={`${lora.className}`}>
              {data?.facts?.date || "22 April 2026"}
            </p>
          </div>
          <div>
            <p className="text-xs uppercase text-[#8b8276]">Location</p>
            <p className={`${lora.className}`}>
              {data?.facts?.location || "Kulturhuset"}
            </p>
          </div>
          <div>
            <p className="text-xs uppercase text-[#8b8276]">Time</p>
            <p className={`${lora.className}`}>
              {data?.facts?.time || "09:00–13:00"}
            </p>
          </div>
          <div>
            <p className="text-xs uppercase text-[#8b8276]">Admission</p>
            <p className={`${lora.className}`}>
              {data?.facts?.admission || "Free entry"}
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p
            className={`${firaSans.className} text-xs uppercase tracking-[0.18em] text-[#a27a26]`}
          >
            {data?.content?.label || "About the event"}
          </p>

          <h2 className={`${lora.className} mt-4 whitespace-pre-line text-4xl`}>
            {data?.content?.title || "A more focused meeting place"}
          </h2>

          <p className="mt-4 whitespace-pre-line italic">
            {data?.content?.intro ||
              "Career Day Stockholm brings together engineers, tech professionals and employers in a format centred around direct contact and meaningful conversations."}
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl space-y-6">
          <p className="whitespace-pre-line">
            {data?.content?.body1 ||
              "The event is designed to create a calmer and more useful environment where visitors and employers can actually connect."}
          </p>
          <p className="whitespace-pre-line">
            {data?.content?.body2 ||
              "Instead of competing with noise and crowds, the format gives space for better conversations, more relevant meetings and clearer opportunities."}
          </p>
          <p className="whitespace-pre-line">
            {data?.content?.body3 ||
              "Whether you are actively looking for your next role or simply exploring the market, Career Day Stockholm is designed to help you move forward."}
          </p>
        </div>

        <div className="mt-12 text-center">
          <a
            href={data?.content?.ctaHref || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className={`${firaSans.className} uppercase tracking-[0.18em] text-[#a27a26]`}
          >
            {data?.content?.ctaLabel || "Read more"}
          </a>
        </div>
      </section>
            <footer className="bg-[#f3f1ed] pt-12 pb-12 md:pt-12 md:pb-14">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-6">
          <p className="text-[0.98rem] leading-[1.82] text-[#3e3c38] sm:text-[1.02rem] md:text-[1.15rem] md:leading-[1.9]">
            Engineering Day – Sweden&apos;s first official day for engineers. We
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