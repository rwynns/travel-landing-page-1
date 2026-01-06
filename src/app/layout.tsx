import type { Metadata } from "next";
import { Montserrat, Inter, Poppins } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["600", "700", "800"], // SemiBold, Bold, ExtraBold
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"], // Regular, Medium, SemiBold
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600"], // Medium, SemiBold
});

export const metadata: Metadata = {
  title: "Travel Open Trip - Jelajahi Indonesia",
  description: "Open Trip Terjangkau dengan Pengalaman Tak Terlupakan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${montserrat.variable} ${inter.variable} ${poppins.variable} font-sans antialiased bg-neutral-100 text-neutral-900`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
