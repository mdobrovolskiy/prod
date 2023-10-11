import { type ReactNode, type FC, memo } from 'react'
import styles from './SideBarItem.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ThemeButton } from '../../../Button/ui/Button'
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink'
interface SideBarItemProps {
    className?: string
    path: string
    name: string
}
const SideBarItem: FC<SideBarItemProps> = (props) => {
    const { className, path, name } = props

    return (
        <Button className={classNames(styles.SideBarItem, {}, [])}>
            <img
                className={styles.icon}
                width="24"
                height="24"
                src="https://img.icons8.com/sf-regular/48/FFFFFF/chevron-right.png"
                alt="chevron-right"
            />
            <AppLink
                to={path}
                theme={AppLinkTheme.SECONDARY}
                className={styles.link}
            >
                {name}
            </AppLink>
        </Button>
    )
}
export default memo(SideBarItem)
