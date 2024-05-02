import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato(
  { 
    weight: ["400"],
    subsets: ["latin", "latin-ext"] 
  },
);

export const metadata: Metadata = {
  title: "Blokkplay",
  description: "Blokkplay",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>{children}</body>
    </html>
  );
}
