import { Route, Routes, Link } from 'react-router-dom'

import { MainAsync } from '../pages/Main/Main.async'
import { HeoAsync } from '../pages/Heo/Heo.async'
import { Suspense, useContext } from 'react'
import { ThemeContext } from '../themes/ThemeContext'

const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  console.log('HELLO WORLD')
  return (
    <div className={`App ${theme}`}>
      <Link to="/">MAIN</Link>
      <Link to="/heo">HEO</Link>
      <button onClick={() => toggleTheme(theme)}>TOGGLE</button>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/" element={<MainAsync />} />
          <Route path="/heo" element={<HeoAsync />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
