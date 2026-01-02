import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: "400",
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
        className={`${poppins.className} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
