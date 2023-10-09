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
interface SideBarProps {
    className?: string
}

const SideBar: FC<SideBarProps> = (props) => {
    const { className } = props
    const [collapsed, setCollapsed] = useState(false)

    const isAuth = useSelector(getUserId)

    const appNav = useMemo(() => {
        if (isAuth) {
            return [
                {
                    path: Routes.HOME,
                    name: 'Home',
                    Icon: <HomeIcon width="30" />,
                },

                {
                    path: Routes.PROFILE,
                    name: 'Profile',
                    Icon: <HomeIcon width="30" />,
                },
                {
                    path: Routes.ARTICLES,
                    name: 'Articles',
                    Icon: <HomeIcon width="30" />,
                },
            ]
        } else {
            return [
                {
                    path: Routes.HOME,
                    name: 'Home',
                    Icon: <HomeIcon width="30" />,
                },
            ]
        }
    }, [isAuth])

    const { t } = useTranslation()

    const handleCollapsed = () => {
        setCollapsed((prev) => !prev)
    }

    return (
        <div
            data-testid="sidebar"
            className={classNames(
                styles.SideBar,
                { [styles.collapsed]: collapsed },
                [className]
            )}
        >
            <Button onClick={handleCollapsed}>sdfdsafs</Button>
            <div className={styles.navigation}>
                {appNav.map((obj) => (
                    <SideBarItem
                        collapsed={collapsed}
                        key={obj.path}
                        path={obj.path}
                        name={obj.name}
                        Icon={obj.Icon}
                    />
                ))}
            </div>
            <div className={styles.switchers}>
                <ToggleTheme />

                <ToggleLanguage />
            </div>
        </div>
    )
}
export default SideBar
