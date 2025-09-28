import type { Metadata } from "next";
import type {ReactNode} from "react";

import { Manrope } from "next/font/google";

import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope-sans",
  subsets: ['latin', 'cyrillic']
})

export const metadata: Metadata = {
  title: "Фронт VUTEX",
};

export default function RootLayout({children,}: Readonly<{ children: ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${ manrope.className } ${ manrope.variable }`}>
        {children}
      </body>
    </html>
  );
}
