import { Suspense, useContext } from 'react'
import { ThemeContext } from 'app/providers/ThemeProvider/ThemeContext'
import AppRouter from 'app/providers/router'
import Navbar from 'widgets/Navbar/ui/Navbar'
import { SideBar } from 'widgets/Sidebar'

const App = (): JSX.Element => {
    const { theme } = useContext(ThemeContext)
    console.log('second pc 2222222 ')
    return (
        <div className={`App ${theme}`}>
            <Suspense fallback={'222'}>
                <Navbar />
            </Suspense>
            <div className="content-page">
                <Suspense fallback>
                    <SideBar />
                </Suspense>
                <AppRouter />
            </div>
        </div>
    )
}

export default App
