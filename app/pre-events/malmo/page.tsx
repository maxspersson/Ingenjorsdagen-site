"use client";

import SiteHeader from "@/app/components/SiteHeader";
import { Fira_Sans } from "next/font/google";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { preEventsCityQuery } from "@/sanity/lib/queries";

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

type CityData = {
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

export default function MalmoPage() {
  const [data, setData] = useState<CityData | null>(null);

  useEffect(() => {
    client.fetch(preEventsCityQuery, { slug: "malmo" }).then(setData);
  }, []);

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

            <h1 className="font-serif text-[4rem]">
              {data?.hero?.title || "Career Day @ Malmö"}
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
              {data?.hero?.subtitle ||
                "A southern stop where engineers and companies meet in a more direct and personal format centred around recruitment."}
            </p>
          </div>
        </div>
      </section>

      {/* FACTS */}
      <section className="px-5 py-16">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 text-center md:grid-cols-4">
          <div>
            <p className="text-xs uppercase text-[#8b8276]">Date</p>
            <p className="font-serif">
              {data?.facts?.date || "11 November 2026"}
            </p>
          </div>
          <div>
            <p className="text-xs uppercase text-[#8b8276]">Location</p>
            <p className="font-serif">
              {data?.facts?.location || "Slagthuset"}
            </p>
          </div>
          <div>
            <p className="text-xs uppercase text-[#8b8276]">Time</p>
            <p className="font-serif">
              {data?.facts?.time || "09:00–13:00"}
            </p>
          </div>
          <div>
            <p className="text-xs uppercase text-[#8b8276]">Admission</p>
            <p className="font-serif">
              {data?.facts?.admission || "Free entry"}
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase text-[#a27a26]">
            {data?.content?.label || "About the event"}
          </p>

          <h2 className="mt-4 font-serif text-4xl">
            {data?.content?.title || "A more focused meeting place"}
          </h2>

          <p className="mt-4 italic">
            {data?.content?.intro ||
              "Career Day Malmö creates a setting where engineers, tech professionals and employers can meet in a more direct and relevant way."}
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl space-y-6">
          <p>
            {data?.content?.body1 ||
              "The event is built around access, conversations and concrete opportunities rather than volume."}
          </p>
          <p>
            {data?.content?.body2 ||
              "It offers a calmer and more useful format for both employers and visitors, making it easier to create the right connections."}
          </p>
          <p>
            {data?.content?.body3 ||
              "Whether you are looking for your next role or simply want to understand the market better, Career Day Malmö is designed to help move things forward."}
          </p>
        </div>

        <div className="mt-12 text-center">
          <a
            href={data?.content?.ctaHref || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="uppercase text-[#a27a26]"
          >
            {data?.content?.ctaLabel || "Read more"}
          </a>
        </div>
      </section>
    </main>
  );
}