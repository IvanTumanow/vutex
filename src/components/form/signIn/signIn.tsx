'use client'

import Button from "@/components/shared/Button/button";
import {useRouter} from "next/navigation";
import {type FormEventHandler, useState} from "react";
import {signIn} from 'next-auth/react'

import styles from './style.module.scss'
import PAGE_CONFIG from "@/config/page.config";


function SignInForm() {
    const router = useRouter()

    const [identifier, setIdentifier] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const minLengthPassword: number = 8

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();

        try {
            const res = await signIn('credentials', {
                identifier: identifier,
                password: password,
                redirect: false,
            })

            if (res && !res.error) {
                router.push(PAGE_CONFIG.PAGES.Base.Profile.href)
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
                    <label htmlFor="identifier" className={styles.label}>Email или Логин</label>
                    <input
                        id='identifier'
                        type="text"
                        value={identifier}
                        onChange={(e) => setIdentifier(e.target.value)}
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
            </section>

            <Button type='submit' active={password.length >= minLengthPassword && Boolean(identifier)}>Войти</Button>
        </form>
    )
}

export default SignInForm