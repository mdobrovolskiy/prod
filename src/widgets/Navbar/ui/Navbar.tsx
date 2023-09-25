import { t } from 'i18next'
import styles from './Navbar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { LoginModal } from 'features/AuthByUsername/ui/LoginModal/LoginModal'
import { useState } from 'react'
import { Button } from 'widgets/Button'
import { ThemeButton } from 'widgets/Button/ui/Button'

interface NavbarProps {
  className?: string
}
const Navbar = ({ className }: NavbarProps) => {
    const [loginOpened, setLoginOpened] = useState(false)
    const closeModal = () => {
        setLoginOpened(false)
    }
    return (
        <div className={classNames(styles.Navbar, {}, [className])}>

            <div className={styles.linkWrapper}>
                <AppLink to="/" theme={AppLinkTheme.SECONDARY}></AppLink>
                <AppLink to="/heo" theme={AppLinkTheme.PRIMARY}>
                    HEO
                </AppLink>
                <Button onClick={() => { setLoginOpened(state => !state) }} theme={ThemeButton.MAIN}>Log in</Button>
                {loginOpened && <LoginModal onClose={closeModal}/>}
            </div>
        </div>
    )
}

export default Navbar
