import React from "react";
import {Metadata} from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import Header from "@/components/Header";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
    variable: "--font-poppins"
});

export const metadata: Metadata = {
    title: "Dog App",
    description: "Get random dog images from the Dog CEO API.",
};

export default function RootLayout(
    {children}:
        Readonly<{ children: React.ReactNode; }>
) {
  return (
    <html lang="en">
      <body className={`antialiased bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white min-h-screen ${poppins.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
