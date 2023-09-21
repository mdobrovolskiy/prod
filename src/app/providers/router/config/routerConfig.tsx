import { Heo } from 'pages/Heo'
import { type RouteProps } from 'react-router-dom'
import { MainAsync } from '../../../../pages/Main/Main.async'

export enum Routes {
  HOME = '/',
  HEO = 'heo',
}
export const routerConfig: Record<Routes, RouteProps> = {
    [Routes.HOME]: {
        element: <MainAsync />,
        path: Routes.HOME
    },
    [Routes.HEO]: {
        element: <Heo />,
        path: Routes.HEO
    }
}
