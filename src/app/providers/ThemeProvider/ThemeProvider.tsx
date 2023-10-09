/* eslint-disable indent */
import { type FC, useMemo, useState } from 'react'
import { ThemeContext, Theme, LOCAL_STORAGE_THEME_KEY } from './ThemeContext'

const defaultTheme =
    (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT

const ThemeProvider: FC = ({ children }) => {
    const [theme, setTheme] = useState(defaultTheme)
    const toggleTheme = () => {
        let newTheme
        switch (theme) {
            case Theme.BLACK:
                newTheme = Theme.DARK
                break
            case Theme.DARK:
                newTheme = Theme.LIGHT
                break
            case Theme.LIGHT:
                newTheme = Theme.BLACK
                break
            default:
                newTheme = Theme.BLACK
                break
        }

        setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }
    const defaultProps = useMemo(() => {
        return {
            theme,
            toggleTheme,
        }
    }, [theme])
    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
