import styles from './ToggleTheme.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import LightIcon from '../assets/LightMode.png'
import DarkIcon from '../assets/DarkMode.png'
import { Theme } from '../index'
import { Button } from 'widgets/Button'
import { ThemeContext } from 'app/providers/ThemeProvider/ThemeContext'
import { FC, useContext } from 'react'
import { ThemeButton } from 'widgets/Button/ui/Button'

interface ToggleThemeProps {
  className?: string
}
export const ToggleTheme: FC<ToggleThemeProps> = (props) => {
  const { className } = props

  const { theme, toggleTheme } = useContext(ThemeContext)

  const currentIcon = theme === Theme.DARK ? LightIcon : DarkIcon

  return (
    <Button
      theme={ThemeButton.CLEAR}
      onClick={() => toggleTheme(theme)}
      className={classNames(styles.ToggleTheme, {}, [className])}
    >
      <img className={styles.image} src={currentIcon} alt="switch theme" />
    </Button>
  )
}
