import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Providers from "@/components/providers/RQProvider";
import React from "react";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import DarkMode from "@/components/DarkMode";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "League of Legends",
  description: "League of Legend's Champions",
  icons: {
    icon: "/logo.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} pt-16`}>
        <ThemeProvider>
          {" "}
          <header className="pt-2 text-3xl bg-gray-800 text-white fixed top-0 w-full z-50">
            <nav className="flex justify-around items-center">
              <div>
                <Link href={"/"}>
                  <Image
                    src="/lollogo.png"
                    alt="League of Legends Logo"
                    width={90}
                    height={90}
                    className="object-contain"
                  />
                </Link>
              </div>
              <div className="flex gap-16">
                <Link href={"/champions"}>Champions</Link>
                <Link href={"/items"}>Items</Link>
                <Link href={"/rotation"}>Rotation</Link>
                <DarkMode />
              </div>
            </nav>
          </header>
          <Providers>{children}</Providers>
          <div className="w-screen">
            <footer className="bg-gray-800 p-3 relative inset-0">
              <div className="container mx-auto text-center text-white text-sm">
                [Your Product Name] is not endorsed by Riot Games and does not
                reflect the views or opinions of Riot Games or anyone officially
                involved in producing or managing Riot Games properties. Riot
                Games and all associated properties are trademarks or registered
                trademarks of Riot Games, Inc.
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
