import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/app/components/SiteHeader";
import Script from "next/script";

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const fetchCache = "force-no-store";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: "Ingenjörsdagen",
  description: "Ingenjörsdagen 2026",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0HSK3KT0V2"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0HSK3KT0V2');
          `}
        </Script>
      </head>

      <body className={`${lora.variable} ${lora.className}`}>
        <SiteHeader />

        <main className="pt-[126px] sm:pt-[140px] md:pt-[186px]">
          {children}
        </main>
      </body>
    </html>
  );
}