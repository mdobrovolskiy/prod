import { t } from 'i18next'
import styles from './Navbar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { ModalHandler } from 'shared/ui/ModalHandler/ModalHandler'
interface NavbarProps {
  className?: string
}
const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(styles.Navbar, {}, [className])}>
            <ModalHandler>{t('Log in')}</ModalHandler>
            <div className={styles.linkWrapper}>
                <AppLink to="/" theme={AppLinkTheme.SECONDARY}></AppLink>
                <AppLink to="/heo" theme={AppLinkTheme.PRIMARY}>
          HEO
                </AppLink>
            </div>
        </div>
    )
}

export default Navbar
