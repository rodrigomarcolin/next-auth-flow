import "./globals.css";
import type { Metadata } from "next";
import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="flex px-4 py-5 bg-purple-200">
          <div className="flex items-center gap-4 w-full max-w-7xl mx-auto justify-between">
            <div className="flex items-center gap-4">
              <img src="/logo.png" width={32} height={32} alt="Logo" />
              <h2 className="font-bold text-xl md:text-3xl">Manager</h2>
            </div>

            <div className="flex items-center gap-4">
              <a href="#">
                <button className="font-bold text-xl bg-purple-400 px-2 py-1 rounded-full">
                  Entrar
                </button>
              </a>
            </div>
          </div>
        </header>
        {children}
        <footer className=" flex items-center px-8 py-7 gap-4">
          <div className="w-full max-w-7xl flex flex-col gap-3 md:flex-row justify-between items-center mx-auto">
            <h2 className="font-bold text-xl">Manager</h2>
            <p className="text-gray-600 text-center">
              Where you can manage all stuff. From tasks to money.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}