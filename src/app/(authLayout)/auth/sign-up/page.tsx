import SignUpForm from "@/components/form/signUp/signUp";
import styles from "@/app/(authLayout)/auth/sign-in/style.module.scss";
import SignInForm from "@/components/form/signIn/signIn";
import Link from "next/link";
import PAGE_CONFIG from "@/config/page.config";

export default function SignUp() {
    return (
        <div className={styles.page}>
            <section className={styles.formWrapper}>
                <div className={styles.text}>
                    <h1 className={styles.title}>Регистрация</h1>
                    <p className={styles.description}>Добро пожаловать!</p>
                </div>

                <SignUpForm/>

                <div className={styles.haventAccountText}>
                    <p>Уже есть аккаунт?</p>
                    <Link href={PAGE_CONFIG.PAGES.Base.SignIn.href} className={styles.signUpText}>
                        Авторизоваться
                    </Link>
                </div>
            </section>
        </div>
    );
}
