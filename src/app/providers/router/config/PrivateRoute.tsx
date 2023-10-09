import { type ReactNode, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { routerConfig } from './routerConfig'
import { LOCAL_STORAGE_AUTH_KEY } from 'shared/consts/localStorage'
import { useSelector } from 'react-redux'
import { getUserId } from 'entities/User/selectors/getUserId'

interface PrivateRouteProps {
    children: ReactNode
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
    const isAuth = !!useSelector(getUserId)
    if (isAuth) {
        return <>{children}</>
    }
    return <Navigate to={'/'} />
}

export default PrivateRoute
