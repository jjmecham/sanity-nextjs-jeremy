
import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/global/Navbar";
import Footer from "./components/global/Footer";
import { Providers } from "../providers";
import type { Viewport } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jeremy Mecham",
  // metadataBase: new URL("https://sanity-nextjs-site.vercel.app"),
  description: "A personal portfolio site built with Sanity and Next.js",
  openGraph: {
    images:
      "https://dynamic-og-image-generator.vercel.app/api/generate?title=Front+End+Developer&author=Jeremy+Mecham&websiteUrl=https%3A%2F%2Fgleamgraphics.com&avatar=https%3A%2F%2Fgleamgraphics.com%2Fimg%2Fme2.jpg&theme=nightOwl",
  },
};

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <body className={`${inter.className} flex flex-col h-screen justify-between`}>
        <Providers>
        <Navbar />
        {children}
        <Footer />
        </Providers>
      </body>
    </html>
  );
}
 //bg-gradient-to-r from-teal-900 via-teal-700 to-teal-500 text-white