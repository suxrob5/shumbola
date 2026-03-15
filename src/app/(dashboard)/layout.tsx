import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "../globals.css";
import AosProvider from "@/components/aos-provider";
import { Analytics } from "@vercel/analytics/react"
import { LanguageProvider } from "@/context/LanguageContext";
import Aside from "@/components/dashboard/aside";

const nunito = Nunito({ 
  subsets: ["latin", "cyrillic"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} font-sans antialiased text-gray-900 bg-gray-50`}>
        <LanguageProvider>
          <AosProvider />
          <div className="flex h-screen overflow-hidden">
            <Aside />
            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50/50">
              {children}
            </main>
          </div>
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
