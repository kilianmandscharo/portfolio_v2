import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Dominik Heller",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col justify-between bg-slate-800 text-white px-4 mx-auto min-w-[344px] max-w-[1024px] min-h-screen">
        <Navbar />
        <div className="min-h-[calc(100vh-130px)] mt-4">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
