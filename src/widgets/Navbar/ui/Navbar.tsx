import styles from './Navbar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { ToggleTheme } from 'widgets/ToggleTheme'
interface NavbarProps {
  className?: string
}
const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
      <ToggleTheme />
      <div className={styles.linkWrapper}>
        <AppLink to="/" theme={AppLinkTheme.SECONDARY}>
          MAIN
        </AppLink>
        <AppLink to="/heo" theme={AppLinkTheme.PRIMARY}>
          HEO
        </AppLink>
      </div>
    </div>
  )
}

export default Navbar
