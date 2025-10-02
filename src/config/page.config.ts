import {IPageConfig} from "@/shared/types/pageConfig.interfaces";
import {PAGES_DATA} from "@/shared/data/pages.data";

class pageConfig implements IPageConfig {
    PAGES = {
        Base: {
            Home: PAGES_DATA.Home,
            SignIn: {
                href: `${PAGES_DATA.Auth.href}/${PAGES_DATA.SignIn.href}`,
                title: PAGES_DATA.SignIn.title
            },
            SignUp: {
                href: `${PAGES_DATA.Auth.href}/${PAGES_DATA.SignUp.href}`,
                title: PAGES_DATA.SignUp.title
            },
            Cart: PAGES_DATA.Cart,
            Profile: {
                href: `${PAGES_DATA.Profile.href}${PAGES_DATA.User.href}`,
                title: PAGES_DATA.Profile.title
            },
        },
        Bases: [
            PAGES_DATA.Home,
            PAGES_DATA.AboutUs,
            PAGES_DATA.Catalog,
            PAGES_DATA.Reviews,
            PAGES_DATA.ContactUs,
            {
                href: `${PAGES_DATA.Profile.href}${PAGES_DATA.User.href}`,
                title: PAGES_DATA.Profile.title
            },
            PAGES_DATA.SizeChart
        ],
        Profiles: [
            PAGES_DATA.Home,
            {
                href: `${PAGES_DATA.Profile.href}${PAGES_DATA.User.href}`,
                title: PAGES_DATA.Profile.title
            },
            {
                href: `${PAGES_DATA.Profile.href}${PAGES_DATA.Orders.href}`,
                title: PAGES_DATA.Orders.title
            },
        ],
    }
}

const PAGE_CONFIG = new pageConfig();
export default PAGE_CONFIG;