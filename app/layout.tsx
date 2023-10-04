import Navbar from "@/app/_components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/app/_components/Footer";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Dominik Heller",
  description: "Dominik's portfolio page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className="font-body text-white/85 flex flex-col justify-between bg-dark-800 text-white mx-auto min-w-[344px] max-w-[1024px] min-h-screen">
        <Navbar />
        <div className="min-h-[calc(100vh-178px)] mt-8 mb-8 px-4">
          <main>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
