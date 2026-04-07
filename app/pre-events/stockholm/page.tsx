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

export default function StockholmPage() {
  const [data, setData] = useState<CityData | null>(null);

  useEffect(() => {
    client.fetch(preEventsCityQuery, { slug: "stockholm" }).then(setData);
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f3f1ed] text-[#1f1f1f]">
      <SiteHeader />

      {/* HERO */}
      <section className="relative min-h-[85vh] overflow-hidden bg-black text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/pre-events-stockholm.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex min-h-[85vh] items-center justify-center text-center px-5">
          <div>
            <p className={`${firaSans.className} text-[11px] uppercase tracking-[0.28em] text-[#d9a441]`}>
              {data?.hero?.eyebrow}
            </p>

            <h1 className="font-serif text-[4rem]">
              {data?.hero?.title}
            </h1>

            <p className="mt-6 max-w-2xl mx-auto text-lg text-white/80">
              {data?.hero?.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* FACTS */}
      <section className="px-5 py-16">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-xs uppercase text-[#8b8276]">Date</p>
            <p className="font-serif">{data?.facts?.date}</p>
          </div>
          <div>
            <p className="text-xs uppercase text-[#8b8276]">Location</p>
            <p className="font-serif">{data?.facts?.location}</p>
          </div>
          <div>
            <p className="text-xs uppercase text-[#8b8276]">Time</p>
            <p className="font-serif">{data?.facts?.time}</p>
          </div>
          <div>
            <p className="text-xs uppercase text-[#8b8276]">Admission</p>
            <p className="font-serif">{data?.facts?.admission}</p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-5 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase text-[#a27a26]">
            {data?.content?.label}
          </p>

          <h2 className="font-serif text-4xl mt-4">
            {data?.content?.title}
          </h2>

          <p className="italic mt-4">
            {data?.content?.intro}
          </p>
        </div>

        <div className="max-w-3xl mx-auto mt-10 space-y-6">
          <p>{data?.content?.body1}</p>
          <p>{data?.content?.body2}</p>
          <p>{data?.content?.body3}</p>
        </div>

        <div className="text-center mt-12">
          <a
            href={data?.content?.ctaHref}
            target="_blank"
            className="uppercase text-[#a27a26]"
          >
            {data?.content?.ctaLabel}
          </a>
        </div>
      </section>
    </main>
  );
}