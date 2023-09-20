import { FC } from 'react'
import styles from './ToggleLanguage.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from 'widgets/Button/ui/Button'
interface ToggleLanguageProps {
  className?: string
}
export const ToggleLanguage: FC<ToggleLanguageProps> = (props) => {
  const { className } = props
  const { t, i18n } = useTranslation()
  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }
  return (
    <Button
      theme={ThemeButton.MAIN}
      onClick={toggle}
      className={classNames(styles.ToggleLanguage, {}, [styles.lang])}
    >
      {t('Перевод')}
    </Button>
  )
}
