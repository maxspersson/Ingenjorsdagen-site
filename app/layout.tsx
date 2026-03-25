import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/app/components/SiteHeader";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ingenjörsdagen",
  description: "Ingenjörsdagen 2026",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body className={lora.className}>
        <SiteHeader />

        <main className="pt-[126px] sm:pt-[140px] md:pt-[186px]">
          {children}
        </main>
      </body>
    </html>
  );
}