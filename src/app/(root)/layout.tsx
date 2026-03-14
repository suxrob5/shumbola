import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "../globals.css";
import AosProvider from "@/components/aos-provider";
import { Analytics } from "@vercel/analytics/react"
import { LanguageProvider } from "@/context/LanguageContext";

const nunito = Nunito({ 
  subsets: ["latin", "cyrillic"],
  variable: "--font-nunito",
});

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
      <body className={`${nunito.variable} font-sans antialiased`}>
        <LanguageProvider>
          <AosProvider />
          {children}
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
