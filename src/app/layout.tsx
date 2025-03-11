import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HomeEsta - Your Gateway to Real Estate",
  description: "Find your dream home without brokers - direct from owners",
  keywords:
    "real estate, property, no broker, direct owners, home buying, property listing",
  openGraph: {
    title: "HomeEsta - Your Gateway to Real Estate",
    description: "Find your dream home without brokers - direct from owners",
    type: "website",
    locale: "en_US",
    url: "https://homeesta.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "HomeEsta - Your Gateway to Real Estate",
    description: "Find your dream home without brokers - direct from owners",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
