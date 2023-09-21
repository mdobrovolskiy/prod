import styles from './Navbar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink'
interface NavbarProps {
  className?: string
}
const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(styles.Navbar, {}, [className])}>
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
