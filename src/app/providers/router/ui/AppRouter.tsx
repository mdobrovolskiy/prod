import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { routerConfig } from '../config/routerConfig'
import { Loader } from 'widgets/Loader'

const AppRouter = () => {
    return (
        <Suspense fallback={<Loader />}>
            <div className="page-wrapper">
                <Routes>
                    {Object.values(routerConfig).map(({ element, path }) => (
                        <Route element={element} path={path} key={path} />
                    ))}
                </Routes>
            </div>
        </Suspense>
    )
}

export default AppRouter
