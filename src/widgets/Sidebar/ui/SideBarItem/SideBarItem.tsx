import { type ReactNode, type FC, memo } from 'react'
import styles from './SideBarItem.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ThemeButton } from '../../../Button/ui/Button'
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink'
interface SideBarItemProps {
    className?: string
    path: string
    name: string
    Icon: ReactNode
    collapsed: boolean
}
const SideBarItem: FC<SideBarItemProps> = (props) => {
    const { className, path, name, Icon, collapsed } = props
    return (
        <Button className={classNames(styles.SideBarItem, {}, [])}>
            <AppLink
                to={path}
                theme={AppLinkTheme.PRIMARY}
                className={styles.link}
            >
                {!collapsed && name} {Icon}
            </AppLink>
        </Button>
    )
}
export default memo(SideBarItem)
