import './globals.css';
import type { Metadata } from 'next';
import React from 'react';
import { Courier_Prime } from 'next/font/google';
import { SpinProvider } from '@/contexts/SpinContext';
import Navbar from '../components/Navbar';
import { AuthProvider } from '@/contexts/AuthContext';

const courier = Courier_Prime({ weight: ['400', '700'], subsets: ['latin'] });
export const metadata: Metadata = {
  title: 'Manager',
  description: 'Personal manager',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`flex flex-col min-h-screen bg-primary-bg ${courier.className}`}>
        <SpinProvider>
          <AuthProvider>
            <header className="flex px-4 py-5 bg-primary-light">
              <Navbar />
            </header>
            {children}
          </AuthProvider>
        </SpinProvider>
        <footer className=" flex items-center px-8 py-7 gap-4 w-screen mt-auto">
          <div className="w-full max-w-7xl flex flex-col gap-3 md:flex-row justify-between items-center mx-auto">
            <h2 className="font-bold text-xl text-font">Manager</h2>
            <p className="text-gray-600 text-center text-font">
              Where you can manage all stuff. From tasks to money.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
