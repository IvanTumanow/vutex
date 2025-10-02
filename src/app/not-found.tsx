import PAGE_CONFIG from "@/config/page.config";
import Link from "next/link";

export default function NotFound() {
    return (
        <>
            <h1>Страница не найдена</h1>
            <Link href={PAGE_CONFIG.PAGES.Base.Home.href}>На главную</Link>
        </>
    )
}