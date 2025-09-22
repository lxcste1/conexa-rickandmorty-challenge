import React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/common/Header/Header";
import Footer from "@/components/common/Footer/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://conexa-challenge.vercel.app/"),
  title: "Conexa Challenge - Rick and Morty",
  description: "Conexa Challenge - Rick and Morty",
  openGraph: {
    images: "/rickandmorty-portal.png",
  },
  twitter: {
    card: "summary_large_image",
    images: "/rickandmorty-portal.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        /* eslint-disable-next-line */
        cz-shortcut-listen="true"
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
