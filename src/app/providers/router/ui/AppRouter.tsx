import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { routerConfig } from '../config/routerConfig'
import { Loader } from 'widgets/Loader'

const AppRouter = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                {Object.values(routerConfig).map(({ element, path }) => (
                    <Route element={element} path={path} key={path} />
                ))}
            </Routes>
        </Suspense>
    )
}

export default AppRouter
