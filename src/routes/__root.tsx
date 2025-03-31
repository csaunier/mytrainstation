import { Outlet, createRootRoute, Link } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
    component: () => (
        <main>
            <div>
                <Link to="/">HOME</Link>
                <Link to="/about">ABOUT</Link>
            </div>
            <Outlet />
            <TanStackRouterDevtools />
        </main>
    ),
})
