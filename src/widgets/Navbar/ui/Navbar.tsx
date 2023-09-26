import { t } from 'i18next'
import styles from './Navbar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { LoginModal } from 'features/AuthByUsername/ui/LoginModal/LoginModal'
import { useState } from 'react'
import { Button } from 'widgets/Button'
import { ThemeButton } from 'widgets/Button/ui/Button'
import { useDispatch, useSelector } from 'react-redux'
import { type StateSchema } from '../../../app/providers/StoreProvider/types/StateSchema'
import { userActions } from 'entities/User/slice/userSlice'

interface NavbarProps {
    className?: string
}
const Navbar = ({ className }: NavbarProps) => {
    const [loginOpened, setLoginOpened] = useState(false)
    const dispatch = useDispatch()
    const userId = useSelector(
        (state: StateSchema) => state.userReducer.authData.id
    )

    const closeModal = () => {
        setLoginOpened(false)
    }

    const handleClick = () => {
        if (userId) {
            dispatch(userActions.logout())
        } else {
            setLoginOpened(true)
        }
    }
    return (
        <div className={classNames(styles.Navbar, {}, [className])}>
            <div className={styles.linkWrapper}>
                <AppLink to="/" theme={AppLinkTheme.SECONDARY}></AppLink>
                <AppLink to="/heo" theme={AppLinkTheme.PRIMARY}>
                    HEO
                </AppLink>
                <Button onClick={handleClick} theme={ThemeButton.MAIN}>
                    {userId ? 'Log out' : 'Log in'}
                </Button>
                {loginOpened && <LoginModal onClose={closeModal} />}
            </div>
        </div>
    )
}

export default Navbar
