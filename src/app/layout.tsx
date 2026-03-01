import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "MaryLand Study Abroad | Trusted Consultants in Kerala",
  description: "Start your global education journey with MaryLand Study Abroad Pvt. Ltd. Leading consultants in Kerala for UK, Canada, Australia, Germany, and Ireland.",
  keywords: "Study Abroad, Kerala, Education Consultants, IELTS, Visa Support, MaryLand Study Abroad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-background-light`}>
        {children}
      </body>
    </html>
  );
}
