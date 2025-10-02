import type {Metadata} from "next";
import type {ReactNode} from "react";

import Header from "@/components/layout/header/header";
import Footer from "@/components/layout/footer/footer";

import "../globals.scss";

export default function BaseLayout({children,}: Readonly<{ children: ReactNode; }>) {
    return (
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    );
}
