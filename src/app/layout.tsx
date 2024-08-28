
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
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
        <LanguageProvider>
          <header>
            {/* <LanguageSelector /> */}
          </header>
          <main>{children}</main>
        </LanguageProvider>
      </body>
    </html>
  );
}
