import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/context/AuthProvider";


export const metadata: Metadata = {
  title: "Parewa | 6000E +2 CS",
  description: "Parewa is a media platform developeed and managed by the students of BNKS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProvider>
        <body>
          {children}
        </body>
      </AuthProvider>
    </html>
  );
}
