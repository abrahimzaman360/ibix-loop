import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: {
    template: "%s | Quantitative Exam",
    default: "Quantitative Exam",
  },
  description: "Quantitative Exam with Microsoft Fabric, Python, SQL and BS Account and Finance.",
  authors: [{ name: "Ibrahim Zaman" }],
  keywords: ["Quantitative Exam", "Microsoft Fabric", "Python", "SQL", "BS Account and Finance"],
  openGraph: {
    title: "Quantitative Exam",
    description: "Quantitative Exam with Microsoft Fabric, Python, SQL and BS Account and Finance.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
