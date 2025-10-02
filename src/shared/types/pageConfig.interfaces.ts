import {PageLink} from "@/shared/types/pageLink.types";

export interface IPageConfig {
    PAGES: {
        Base: {
            Home: PageLink;
        }
        Bases: PageLink[];
        Profiles: PageLink[];
    }
}