import type {IContactBlockFooter} from "@/shared/types/contactBlockFooter.interfaces";
import Link from "next/link";

import styles from './contactBlock.module.scss'

export default function ContactBlockFooter({ title, content, href }: IContactBlockFooter) {
    return (
        <div className={styles.wrapper}>
            <Link href={href} className={styles.title}>{title}</Link>
            <Link href={href} className={styles.content}>{content}</Link>
        </div>
    )
}