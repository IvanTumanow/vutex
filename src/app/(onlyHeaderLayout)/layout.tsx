import type {Metadata} from "next";
import type {ReactNode} from "react";

import Header from "@/components/layout/header/header";

import "../globals.scss";
import {SessionProvider} from "next-auth/react";


export default function ProfileLayout({children,}: Readonly<{ children: ReactNode; }>) {
    return (
        <>
            <Header/>
            {children}
        </>
    );
}
