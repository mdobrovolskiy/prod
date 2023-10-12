import { useContext, useEffect } from 'react'
import { ThemeContext } from 'app/providers/ThemeProvider/ThemeContext'
import AppRouter from 'app/providers/router'
import Navbar from 'widgets/Navbar/ui/Navbar'
import SideBar from 'widgets/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { userActions } from 'entities/User/slice/userSlice'
import { getUserInitiated } from 'entities/User/selectors/getUserInitiated'

const App = () => {
    const { theme } = useContext(ThemeContext)

    const initiated = useSelector(getUserInitiated)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(userActions.initialLoginCheck())
    }, [dispatch])

    return (
        <div id="app" className={`App ${theme}`}>
            <Navbar />
            <div className="content">
                <SideBar />
                {initiated && <AppRouter />}
            </div>
        </div>
    )
}

export default App
