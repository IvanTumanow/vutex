import {PAGES_DATA} from "@/shared/data/pages.data";

class RedirectConfig{
    async Auth(){
        return {
            source: '/auth',
            destination: '/',
            permanent: true,
        }
    }

    async Profile(){
        return {
            source: '/profile',
            destination: '/',
            permanent: true,
        }
    }
}

export const redirects = new RedirectConfig();