import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Providers from "@/components/providers/RQProvider";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "League of Legends",
  description: "League of Legend's Champions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="py-4 text-2xl bg-[#101349] text-white fixed top-0 w-full z-10">
          <nav className="flex justify-around">
            <div>
              <Link href={"/"}>Home</Link>
            </div>
            <div className="flex gap-16">
              <Link href={"/champions"}>Champions</Link>
              <Link href={"/items"}>Items</Link>
              <Link href={"/rotation"}>Rotation</Link>
            </div>
          </nav>
        </header>
        <Providers>{children}</Providers>
        <footer className="bg-gray-800 p-3 fixed bottom-0 w-full">
          <div className="container mx-auto text-center text-white text-sm">
            [Your Product Name] is not endorsed by Riot Games and does not
            reflect the views or opinions of Riot Games or anyone officially
            involved in producing or managing Riot Games properties. Riot Games
            and all associated properties are trademarks or registered
            trademarks of Riot Games, Inc.
          </div>
        </footer>
      </body>
    </html>
  );
}
