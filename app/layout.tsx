import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "KENAZ MATHUKUTTY — Computer Science & Engineering | Portfolio",
  description:
    "Official portfolio of Kenaz Mathukutty, Computer Science & Engineering student at St. Joseph's College of Engineering and Technology, Palai. Research and building at the intersection of embedded systems, ARM Cortex-M, computer networking, and algorithmic software.",
  keywords: [
    "Kenaz Mathukutty",
    "Computer Engineering",
    "SJCET Palai",
    "ARM Cortex-M",
    "Embedded Systems",
    "Computer Networks",
    "TCP/IP",
    "Kerala Engineer",
  ],
  authors: [{ name: "Kenaz Mathukutty" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full scroll-smooth antialiased",
        geistSans.variable,
        geistMono.variable,
        jetbrainsMono.variable,
        spaceGrotesk.variable
      )}
    >
      <body className="min-h-full bg-[#F8FBFF] text-[#061A2B] font-sans selection:bg-[#1677FF] selection:text-white relative overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
