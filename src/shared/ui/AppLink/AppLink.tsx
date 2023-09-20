import styles from './AppLink.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { LinkProps } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FC } from 'react'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string
  theme: AppLinkTheme
}
const AppLink: FC<AppLinkProps> = (props) => {
  const { to, className, children, theme, ...otherProps } = props
  return (
    <Link
      to={to}
      className={classNames(styles.AppLink, {}, [className, styles[theme]])}
      {...otherProps}
    >
      AppLink
    </Link>
  )
}

export default AppLink
