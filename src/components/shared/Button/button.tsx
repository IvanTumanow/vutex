import {IButton} from "@/shared/types/button.interfaces";

import styles from './style.module.scss'

export default function Button( {type, active, children}: IButton) {
    return (
        <button type={type} className={`${styles.wrapper} ${active ?  styles.active : styles.inActive}`} disabled={!active}>
            {children}
        </button>
    )
}

