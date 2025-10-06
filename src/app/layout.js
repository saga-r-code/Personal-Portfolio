import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sagar Shah | Full Stack Developer",
  description:
    "Full Stack Developer exploring and focusing on Backend Development, DevOps, and Production-Ready Applications. Explore my projects and technical journey.",
  keywords: [
    "Sagar Shah",
    "Backend Developer",
    "Web Development",
    "DevOps",
    "Node.js",
    "Portfolio",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <meta
        name="google-site-verification"
        content="0GsszWUz5nOiuoo33P1M5_7kmtAYFJKJHPZQOjJo_vQ"
      />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        {children}
      </body>
    </html>
  );
}
