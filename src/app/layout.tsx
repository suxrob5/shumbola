import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AOSProvider from "@/components/aos-provider";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Shumbola",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={inter.className}>
        <AOSProvider />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
