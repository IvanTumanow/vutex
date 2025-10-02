import Link from "next/link";
import {IPagesMenuFooter} from "@/shared/types/pagesMenuFooter.interfaces";

import styles from './pageMenu.module.scss'


export default function PagesMenuFooter( {titleMenu, pages }: IPagesMenuFooter ){
    return (
        <>
            <li role='menuitem' className={styles.pages}>
                <span className={styles.pagesTitle}>{titleMenu}</span>

                <div className={styles.pagesLinks}>
                    { pages.map( (page, id) =>
                        <Link href={page.href} key={`footer::${page.title}_${id}`} className={styles.pagesLink}>{page.title}</Link>
                    ) }
                </div>
            </li>
        </>
    )
}