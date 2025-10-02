'use client'

import type {PageLink} from "@/shared/types/pageLink.types";

import PAGE_CONFIG from "@/config/page.config";
import {CircleUserRound, ShoppingCart, Dot} from 'lucide-react'
import {usePathname} from "next/navigation";
import Link from "next/link";

import styles from './style.module.scss'
import {PAGES_DATA} from "@/shared/data/pages.data";

function Header() {
    const pathname: string = usePathname()
    const PAGES: (PageLink[] | null) = pathname.startsWith(PAGES_DATA.Profile.href) ? PAGE_CONFIG.PAGES.Profiles : PAGE_CONFIG.PAGES.Bases

    return (
        <header className={styles.header}>
            <nav className={styles.wrapper} role='navigation'>
                <ul className={styles.navMenu} role='menu'>
                    <li role='menuitem'>
                        <Link href={PAGE_CONFIG.PAGES.Base.Home.href}>
                            ЛОГО
                        </Link>
                    </li>

                    <li role='menuitem'>
                        <ul role='menu' className={styles.pagesItems}>
                            {
                                PAGES.map((page, id) =>
                                    <li role='menuitem' key={`header::${page.title}_${id}`}
                                        className={`${styles.menuItem} ${pathname === page.href ? styles.menuItemActive : ''}`}>
                                        <Link href={page.href} role='link'>
                                            {page.title}
                                        </Link>
                                    </li>)
                            }
                        </ul>
                    </li>
                </ul>

                <ul role='menu' className={styles.userItems}>
                    <li role='menuitem'>
                        <Link href={PAGE_CONFIG.PAGES.Base.Cart.href} role='button'
                              title={PAGE_CONFIG.PAGES.Base.Cart.title}>
                            <ShoppingCart width={'16px'} height={'16px'} color={'#000'}/>
                        </Link>
                    </li>

                    <li>
                        <Link href={PAGE_CONFIG.PAGES.Base.SignIn.href} role='button'
                              title={PAGE_CONFIG.PAGES.Base.SignIn.title}>
                            <CircleUserRound width={'16px'} height={'16px'} color={'#000'}/>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header