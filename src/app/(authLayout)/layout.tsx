import type {ReactNode} from "react";

import Link from "next/link";
import PAGE_CONFIG from "@/config/page.config";
import {MoveLeft} from "lucide-react";

import "../globals.scss";
import styles from './style.module.scss'

export default function AuthLayout({children,}: Readonly<{ children: ReactNode; }>) {
    return (
        <>
            <header>
                <div className={styles.backHome}>
                    <MoveLeft color={'#333'} width={'16px'}></MoveLeft>
                    <Link href={PAGE_CONFIG.PAGES.Base.Home.href}>На главную</Link>
                </div>
            </header>
            {children}
        </>
    );
}
