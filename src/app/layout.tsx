import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header/Header';
import Footer from "@/components/Footer/Footer";
import { Suspense } from "react";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Product App",
  description: "My portfolio project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-yellow-500 text-red">
      <Suspense fallback={<div className="p-4">Loading...</div>}>
    <Header />
  </Suspense>  {/* ✅ GLOBAL HEADER */}
        
  <main className="flex-1">
    {children}
  </main>

        <Footer/>
      </body>
    </html>
  );
}