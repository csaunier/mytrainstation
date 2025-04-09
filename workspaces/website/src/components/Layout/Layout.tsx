import {Outlet} from "@tanstack/react-router"
import {TanStackRouterDevtools} from "@tanstack/react-router-devtools"
import { Header } from "@/components/Header/Header"

export const Layout = () => {
    return(
        <>
            <Header />
            <main className="bg-white rounded-3xl mx-4 sm:mx-8 p-8 min-h-[calc(100vh-96px)] relative before:absolute before:-z-1 before:shadow-xl/20 before:top-0 before:left-0 before:w-full before:h-1/2">
                <Outlet />
            </main>
            <TanStackRouterDevtools />
        </>
    )
}