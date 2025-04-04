import type { Metadata } from "next";
import "./globals.css";
import ScrollUp from "@/components/ScrollUp";
import localFont from "next/font/local";

const cairo = localFont({
  src: "./fonts/Cairo-Bold.woff2",
  variable: "--cairo",
});

export const metadata: Metadata = {
  title: "Mohamed Abo Mera's Portfolio",
  description: "a portfolio website for Mohamed Abo Mera",
  icons: ["/favicon.ico"],
  keywords: [
    "portfolio",
    "web developer",
    "Mohamed Abo Mera",
    "Mohamed Abo Mera's Portfolio",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "3lwa88",
    "an agilest, Front-End Developer with experience in designing and developing scalable websites and dashboards to support the digital growth of leading brands in Egypt, Turkey, and currently Saudi Arabia. Skilled in creating dynamic, responsive user interfaces with a focus on performance optimization and user-centered designs that enhance engagement and achieve business goals.",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={` ${cairo.variable} antialiased`}>
        <ScrollUp />
        {children}
      </body>
    </html>
  );
}
