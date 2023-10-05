import styles from './ToggleTheme.module.scss'

import LightIcon from '../assets/LightMode.png'
import DarkIcon from '../assets/DarkMode.png'
import { Theme } from '../index'
import { Button } from 'widgets/Button'
import { ThemeContext } from 'app/providers/ThemeProvider/ThemeContext'
import { type FC, useContext } from 'react'
import { ThemeButton } from 'widgets/Button/ui/Button'

interface ToggleThemeProps {
    className?: string
}
export const ToggleTheme: FC<ToggleThemeProps> = (props) => {
    const { className } = props

    const { theme, toggleTheme } = useContext(ThemeContext)

    const currentIcon = theme === Theme.DARK ? LightIcon : DarkIcon

    const handleTheme = () => {
        if (theme && toggleTheme) {
            toggleTheme(theme)
        }
    }

    return (
        <Button theme={ThemeButton.MAIN} onClick={handleTheme}>
            <img
                className={styles.image}
                width={36}
                src={currentIcon}
                alt="switch theme"
            />
        </Button>
    )
}
