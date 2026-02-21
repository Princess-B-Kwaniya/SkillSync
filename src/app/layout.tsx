import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "SkillSync | Career Intelligence Platform",
  description:
    "AI-powered career intelligence platform that delivers intelligent job matching, skills gap analysis, personalised learning roadmaps, and competitive benchmarking to bridge the gap between graduate qualifications and market-ready competence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} bg-white text-slate-900 font-display selection:bg-primary/30 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
