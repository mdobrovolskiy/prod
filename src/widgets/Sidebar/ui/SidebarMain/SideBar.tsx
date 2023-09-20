import { FC, Suspense, useState } from 'react'
import styles from './SideBar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'widgets/Button'
import { ToggleTheme } from 'widgets/ToggleTheme'
import { ToggleLanguage } from 'widgets/ToggleLanguage'
import { ThemeButton } from 'widgets/Button/ui/Button'
import { useTranslation } from 'react-i18next'
interface SideBarProps {
  className?: string
}
export const SideBar: FC<SideBarProps> = (props) => {
  const { className } = props
  const [collapsed, setCollapsed] = useState(false)

  const { t } = useTranslation()

  const handleCollapsed = () => {
    setCollapsed((prev) => !prev)
  }

  return (
    <div
      className={classNames(styles.SideBar, { [styles.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button theme={ThemeButton.MAIN} onClick={handleCollapsed}>
        {t('hello')}
      </Button>
      <div className={styles.switchers}>
        <ToggleTheme />

        <ToggleLanguage />
      </div>
    </div>
  )
}
