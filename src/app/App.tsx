import { useContext } from 'react'
import { ThemeContext } from 'app/providers/ThemeProvider/ThemeContext'
import AppRouter from 'app/providers/router'
import Navbar from 'widgets/Navbar/ui/Navbar'
import SideBar from 'widgets/Sidebar/ui/SidebarMain/SideBar'

const App = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={`App ${theme}`}>
      <Navbar />
      <AppRouter />
      <SideBar />
    </div>
  )
}

export default App
