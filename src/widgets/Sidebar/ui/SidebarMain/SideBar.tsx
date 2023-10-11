import { type FC, useState, useMemo, memo } from 'react'
import styles from './SideBar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'widgets/Button'
import { ToggleTheme } from 'widgets/ToggleTheme'
import { ToggleLanguage } from 'widgets/ToggleLanguage'
import { ThemeButton } from 'widgets/Button/ui/Button'
import { useTranslation } from 'react-i18next'
import HomeIcon from 'helpers/assets/HomeIcon.svg'
import SideBarItem from '../SideBarItem/SideBarItem'
import { Routes } from 'app/providers/router/config/routerConfig'
import { useSelector } from 'react-redux'
import { getUserId } from 'entities/User/selectors/getUserId'
import { getUserName } from 'features/AuthByUsername/model/selectors/getAuthData'
interface SideBarProps {
    className?: string
}

const SideBar: FC<SideBarProps> = (props) => {
    const { className } = props
    const [collapsed, setCollapsed] = useState(false)

    const isAuth = useSelector(getUserId)

    const clientName = useSelector(getUserName)

    console.log(clientName)

    const appNav = useMemo(() => {
        if (isAuth) {
            return [
                {
                    path: Routes.HOME,
                    name: 'Home',
                },

                {
                    path: `${clientName}`,
                    name: 'Profile',
                },
                {
                    path: Routes.ARTICLES,
                    name: 'Articles',
                },
            ]
        } else {
            return [
                {
                    path: Routes.HOME,
                    name: 'Home',
                },
            ]
        }
    }, [isAuth, clientName])

    const handleCollapsed = () => {
        setCollapsed((prev) => !prev)
    }

    return (
        <div className={styles.sideBarFill}>
            <div
                data-testid="sidebar"
                className={classNames(
                    styles.SideBar,
                    { [styles.collapsed]: collapsed },
                    [className]
                )}
            >
                <div className={styles.navigation}>
                    {appNav.map((obj) => (
                        <SideBarItem
                            key={obj.path}
                            path={obj.path}
                            name={obj.name}
                        />
                    ))}
                </div>
                <div className={styles.switchers}>
                    <ToggleTheme />
                </div>
            </div>
        </div>
    )
}
export default SideBar
