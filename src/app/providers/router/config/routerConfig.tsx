import { Heo } from 'pages/Heo'
import { type RouteProps } from 'react-router-dom'
import { MainAsync } from '../../../../pages/Main/Main.async'
import { NotFound } from 'pages/NotFound/NotFound'
import { ErrorBoundary } from 'app/providers/ErrorBoundary/ErrorBoundary'
import { ProfilePageAsync } from 'pages/ProfilePage/ui/ProfilePage/ProfilePageAsync'

export enum Routes {
    HOME = '/',
    HEO = 'heo',
    NOTFOUND = '*',
    PROFILE = '/profile',
}
export const routerConfig: Record<Routes, RouteProps> = {
    [Routes.HOME]: {
        element: (
            <ErrorBoundary>
                <MainAsync />
            </ErrorBoundary>
        ),
        path: Routes.HOME,
    },
    [Routes.HEO]: {
        element: <Heo />,
        path: Routes.HEO,
    },
    [Routes.NOTFOUND]: {
        element: <NotFound />,
        path: Routes.NOTFOUND,
    },
    [Routes.PROFILE]: {
        element: (
            <ErrorBoundary>
                <ProfilePageAsync />
            </ErrorBoundary>
        ),
        path: Routes.PROFILE,
    },
}
