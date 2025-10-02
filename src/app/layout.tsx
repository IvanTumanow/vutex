import type {Metadata} from "next";
import type {ReactNode} from "react";

import Providers from "@/components/providers/providers";

import {Montserrat} from "next/font/google";
import "./globals.scss";

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ['latin', 'cyrillic']
})

export default function RootLayout({children,}: Readonly<{ children: ReactNode; }>) {
    return (
        <html lang="en">
            <body className={`${montserrat.className} ${montserrat.variable}`}>
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    );
}
