import { Suspense, useContext, useEffect, useState } from 'react'
import { ThemeContext } from 'app/providers/ThemeProvider/ThemeContext'
import AppRouter from 'app/providers/router'
import Navbar from 'widgets/Navbar/ui/Navbar'
import { SideBar } from 'widgets/Sidebar'
import { Loader } from 'widgets/Loader'

const App = (): JSX.Element => {
    const { theme } = useContext(ThemeContext)
    const [error, setError] = useState(false)
    useEffect(() => {
        if (error) {
            throw new Error()
        }
    }, [error])
    return (
        <div className={`App ${theme}`}>

            <Suspense fallback={<Loader/>}>
                <Navbar />
            </Suspense>
            <div className="content-page">

                <Suspense fallback={<Loader/>}>
                    <SideBar />
                </Suspense>
                <AppRouter />
            </div>
        </div>
    )
}

export default App
