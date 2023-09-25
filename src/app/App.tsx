import { useContext } from 'react'
import { ThemeContext } from 'app/providers/ThemeProvider/ThemeContext'
import AppRouter from 'app/providers/router'
import Navbar from 'widgets/Navbar/ui/Navbar'
import { SideBar } from 'widgets/Sidebar'

const App = (): JSX.Element => {
    const { theme } = useContext(ThemeContext)

    return (
        <div id='app' className={`App ${theme}`}>

            <Navbar />

            <div className="content-page">

                <SideBar />

                <AppRouter />

            </div>

        </div>
    )
}

export default App
