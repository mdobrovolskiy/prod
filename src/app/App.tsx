import { Suspense, useCallback, useContext, useEffect, useRef, useState } from 'react'
import { ThemeContext } from 'app/providers/ThemeProvider/ThemeContext'
import AppRouter from 'app/providers/router'
import Navbar from 'widgets/Navbar/ui/Navbar'
import { SideBar } from 'widgets/Sidebar'
import { Loader } from 'widgets/Loader'
import { Modal } from 'widgets/Modal/ui/Modal'
import { Button } from 'widgets/Button'
import { ThemeButton } from 'widgets/Button/ui/Button'
import { ModalHandler } from 'shared/ui/ModalHandler/ModalHandler'
import { useTranslation } from 'react-i18next'

const App = (): JSX.Element => {
    const { theme } = useContext(ThemeContext)
    const [error, setError] = useState(false)
    const { t } = useTranslation()

    useEffect(() => {
        if (error) {
            throw new Error()
        }
    }, [error])
    return (
        <div className={`App ${theme}`}>

            <Navbar />

            <div className="content-page">

                <SideBar />

                <AppRouter />

            </div>

        </div>
    )
}

export default App
