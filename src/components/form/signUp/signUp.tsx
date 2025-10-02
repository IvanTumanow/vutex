'use client'

import {useRouter} from "next/navigation";
import {type FormEventHandler, useState} from "react";
import PAGE_CONFIG from "@/config/page.config";
import Button from "@/components/shared/Button/button";
import {signIn} from "next-auth/react";

import styles from './style.module.scss'

function SignUpForm() {
    const router = useRouter()

    const [login, setLogin] = useState<string>("")
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [returnPassword, setReturnPassword] = useState<string>('')

    const minLengthPassword: number = 8

    const canSubmit = password === returnPassword && password.length >= minLengthPassword && Boolean(login) && Boolean(email)

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/local/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: login,
                    email: email,
                    password: password,
                })
            })
                .catch(err => console.log('catch', err))

            if (res && !res.error) {
                const response = await signIn('credentials', {
                    identifier: login || email,
                    password: password,
                    redirect: false,
                })

                if (response && !response?.error){
                    router.push(PAGE_CONFIG.PAGES.Base.Profile.href)
                }
            }
        }

        catch (err) {
            console.error(`Ошибка авторизации: ${err}`)
        }
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <section className={styles.fields}>
                <div className={styles.field}>
                    <label htmlFor="loginSignUp" className={styles.label}>Логин</label>
                    <input
                        id='loginSignUp'
                        type="text"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                        required
                        className={styles.input}
                    />
                </div>

                <div className={styles.field}>
                    <label htmlFor="emailSignUp" className={styles.label}>Email</label>
                    <input
                        id='emailSignUp'
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className={styles.input}
                    />
                </div>

                <div className={styles.field}>
                    <label htmlFor="passwordSignIn" className={styles.label}>Пароль</label>
                    <input
                        id='passwordSignIn'
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        minLength={minLengthPassword}
                        className={styles.input}
                    />
                    <span className={styles.note}>* Минимум 8 символов</span>
                </div>

                <div className={styles.field}>
                    <label htmlFor="returnPasswordSignIn" className={styles.label}>Повторите пароль</label>
                    <input
                        id='returnPasswordSignIn'
                        type="password"
                        value={returnPassword}
                        onChange={(e) => setReturnPassword(e.target.value)}
                        required
                        minLength={minLengthPassword}
                        className={styles.input}
                    />
                    <span className={styles.note}>* Пароль должен совпадать</span>
                </div>
            </section>

            <Button type='submit' active={canSubmit}>Войти</Button>
        </form>
    )
}

export default SignUpForm