import {PageData} from "@/shared/types/pageData.types";
import {PageLink} from "@/shared/types/pageLink.types";

export const PAGES_DATA: PageData = {
    Home: {
        href: `/`,
        title: 'Главная',
    },
    AboutUs: {
        href: `/#about-us`,
        title: 'О компании',
    },
    Catalog: {
        href: `/catalog/`,
        title: 'Каталог',
    },
    Reviews: {
        href: `/#reviews`,
        title: 'Отзывы',
    },
    ContactUs: {
        href: `/#contacts`,
        title: 'Контакты',
    },
    Profile: {
        href: `/profile/`,
        title: 'Профиль',
    },
    SizeChart: {
        href: `/size-chart/`,
        title: 'Размерная таблица',
    },
    Orders: {
        href: `orders/`,
        title: 'Мои заказы',
    },
    User: {
        href: 'user/',
        title: 'Профиль'
    },
    SignIn: {
        href: `sign-in/`,
        title: 'Авторизация'
    },
    SignUp: {
        href: `sign-up/`,
        title: 'Регистрация'
    },
    Cart: {
        href: `/cart/`,
        title: 'Корзина',
    },
    Auth: {
        href: `/auth`,
        title: ''
    }
}