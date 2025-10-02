import SignInForm from "@/components/form/signIn/signIn";
import Link from "next/link";

import PAGE_CONFIG from "@/config/page.config";

import styles from './style.module.scss'


export default async function SignIn() {
    return (
        <div className={styles.page}>
            <section className={styles.formWrapper}>
                <div className={styles.text}>
                    <h1 className={styles.title}>Авторизация</h1>
                    <p className={styles.description}>Добро пожаловать!</p>
                </div>

                <SignInForm/>

                <div className={styles.haventAccountText}>
                    <p>Еще нет аккаунта?</p>
                    <Link href={PAGE_CONFIG.PAGES.Base.SignUp.href} className={styles.signUpText}>
                        Зарегистрироваться
                    </Link>
                </div>
            </section>
        </div>
    );
}