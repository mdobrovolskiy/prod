import { Heo } from 'pages/Heo'
import { type RouteProps } from 'react-router-dom'
import { MainAsync } from '../../../../pages/Main/Main.async'
import { NotFound } from 'pages/NotFound/NotFound'
import { ErrorBoundary } from 'app/providers/ErrorBoundary/ErrorBoundary'
import { ProfilePageAsync } from 'pages/ProfilePage/ui/ProfilePage/ProfilePageAsync'
import { LOCAL_STORAGE_AUTH_KEY } from 'shared/consts/localStorage'
import PrivateRoute from '../ui/PrivateRoute'

export enum Routes {
    HOME = '/',
    HEO = 'heo',
    NOTFOUND = '*',
    PROFILE = '/profile',
}

type RouterRecord = Record<Routes, RouteProps>

export const routerConfig: RouterRecord = {
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
            <PrivateRoute>
                <ErrorBoundary>
                    <ProfilePageAsync />
                </ErrorBoundary>
            </PrivateRoute>
        ),
        path: Routes.PROFILE,
    },
}
