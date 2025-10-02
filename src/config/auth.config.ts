import type {AuthOptions} from "next-auth";
import Credentials from 'next-auth/providers/credentials'
import PAGE_CONFIG from "@/config/page.config";

export const AUTH_CONFIG: AuthOptions = {
    providers: [
        Credentials({
            credentials: {
                identifier: {label: 'username', type: 'text', required: true},
                password: {label: 'password', type: 'password', required: true},
            },
            async authorize(credentials) {
                if (!credentials?.identifier || !credentials?.password) {
                    throw new Error('Не все поля заполнены!')
                }

                try{
                    const response = await fetch(`${process.env.API_URL}/api/auth/local`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            identifier: credentials.identifier,
                            password: credentials.password,
                        }),
                    })
                        .catch(error => {
                            console.log(error)
                        })


                    if (response?.ok) {
                        return await response.json()
                    }

                    return null;
                }

                catch(error) {
                    console.error(`Ошибка получения данных: ${error}`)
                }

                return null
            }
        })
    ],

    callbacks: {
        async jwt( {user, token} ){
            if (user){
                token.user = user as any
            }

            return token;
        },

        async session ( {session, token} ){
            if (token.user){
                session.user = token.user as any
            }

            return session;
        }
    },

    pages: {
        signIn: PAGE_CONFIG.PAGES.Base.SignIn.href,
    }
}