import type { Metadata } from "next";
import { Inter, Alumni_Sans, Montserrat, Caveat } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const alumniSans = Alumni_Sans({
  variable: "--font-alumni",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ["900"],
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  weight: ["600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shubham Rathod | Full-Stack Developer & AI Engineer",
  description: "A bold, playful full-stack and AI engineering portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${alumniSans.variable} ${montserrat.variable} ${caveat.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
