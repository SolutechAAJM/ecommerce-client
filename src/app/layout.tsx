
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { TranslationProvider } from "@/context/translationsContext"; 
import LanguageSelector from '../components/LanguageSelector'

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Easy Shop",
  description: "Easy Shop Online Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TranslationProvider>
          <header>
            <LanguageSelector />
          </header>
          <main>{children}</main>
        </TranslationProvider>
      </body>
    </html>
  );
}
