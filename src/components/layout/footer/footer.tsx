import Link from "next/link";
import Telegram from "@/components/shared/telegram/telegram";
import ContactBlockFooter from "@/components/layout/footer/contactBlock";
import PAGE_CONFIG from "@/config/page.config";

import styles from './style.module.scss'
import PagesMenuFooter from "@/components/layout/footer/pagesMenu";

function Footer(){
    return(
        <footer className={styles.footer}>
            <div className={styles.wrapper}>
                <nav role='navigation'>
                    <ul role='menu'  className={styles.navbarUpper}>
                        <li role='menuitem'>
                            <Link href={PAGE_CONFIG.PAGES.Base.Home.href}>
                                ЛОГО
                            </Link>
                        </li>
                        <li role='menuitem'>
                            <ul role='menu' className={styles.pagesMenu}>
                                <PagesMenuFooter titleMenu='Основные' pages={PAGE_CONFIG.PAGES.Bases}/>
                                <PagesMenuFooter titleMenu='Профиль' pages={PAGE_CONFIG.PAGES.Profiles}/>
                            </ul>
                        </li>
                        <li>
                            <div>
                                <ContactBlockFooter title='Телефон:' content='+7 (999) 999-99-99' href='tel:+79999999999'/>
                                <ContactBlockFooter title='Почта:' content='mail@mail.ru' href='mailto:mail@mail.ru'/>
                            </div>
                        </li>
                    </ul>
                </nav>

                <i className={styles.border}></i>

                <div className={styles.navbarDown}>
                    <span>Компания «VUTEX» © 2025 — 2025 год. Все права защищены.</span>
                    <Link href={'https://t.me/ivantumanow'} className={styles.developer} rel='noopener noreferrer' target='_blank'>
                        Разработал <i className={styles.telegram}><Telegram/></i>
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer;