import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AosProvider from "@/components/aos-provider";
import { Analytics } from "@vercel/analytics/react"
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "Shumbola",
  description: "Natural products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <LanguageProvider>
          <AosProvider />
          {children}
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
