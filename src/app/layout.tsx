import type { Metadata } from "next";

import CustomNavBar from "./_components/CustomNavBar";
import Footer from "./_components/Footer";
import { Toaster } from "sonner";

import "./globals.css";

export const metadata: Metadata = {
  title: "MindSplash Academy",
  description:
    "MindSplash Academy provides structured academic learning and support for students.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased relative">
        <CustomNavBar />

        {children}

        <Footer />

        <Toaster />
      </body>
    </html>
  );
}