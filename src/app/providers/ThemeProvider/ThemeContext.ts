import { createContext } from 'react'
export enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
    BLACK = 'black',
}

export interface ThemeContextProps {
    theme?: Theme
    toggleTheme?: (theme: Theme) => void
}

export const LOCAL_STORAGE_THEME_KEY = 'theme'

export const ThemeContext = createContext<ThemeContextProps>({})
