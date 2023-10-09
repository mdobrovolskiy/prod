import { type RouteProps } from 'react-router-dom'
import { MainAsync } from '../../../../pages/Main/Main.async'
import { NotFound } from 'pages/NotFound/NotFound'
import { ErrorBoundary } from 'app/providers/ErrorBoundary/ErrorBoundary'
import { ProfilePageAsync } from 'pages/ProfilePage/ui/ProfilePage/ProfilePageAsync'
import { LOCAL_STORAGE_AUTH_KEY } from 'shared/consts/localStorage'
import PrivateRoute from './PrivateRoute'
import { ArticlesPage } from 'pages/ArticlesPage/ArticlesPage'
import { ArticlesDetailsPage } from 'pages/ArticleDetailsPage/ArticlesDetailsPage'

export enum Routes {
    HOME = '/',
    PROFILE = '/profile',
    ARTICLES = '/articles',
    ARTICLES_DETAILS = '/articles/:id',
    NOTFOUND = '*',
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
    [Routes.ARTICLES]: {
        element: (
            <PrivateRoute>
                <ErrorBoundary>
                    <ArticlesPage />
                </ErrorBoundary>
            </PrivateRoute>
        ),
        path: Routes.ARTICLES,
    },
    [Routes.ARTICLES_DETAILS]: {
        element: (
            <PrivateRoute>
                <ErrorBoundary>
                    <ArticlesDetailsPage />
                </ErrorBoundary>
            </PrivateRoute>
        ),
        path: Routes.ARTICLES_DETAILS,
    },
}
