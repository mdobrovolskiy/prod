import { type ButtonHTMLAttributes, type FC } from 'react'
import styles from './Button.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

export enum ThemeButton {
    CLEAR = 'clear',
    MAIN = 'main',
    BLACK = 'black',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ThemeButton
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme = ThemeButton.MAIN,
        disabled,
        ...otherProps
    } = props
    return (
        <button
            className={classNames(
                styles.Button,
                { [styles.disabled]: disabled },
                [className, styles[theme]]
            )}
            {...otherProps}
        >
            {children}
        </button>
    )
}
