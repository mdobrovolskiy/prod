import { CSSProperties, type FC } from 'react'
import styles from './Text.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

export enum ThemeText {
    ERROR = 'error',
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface TextProps {
    className?: string
    type: 'p' | 'h1' | 'span'
    theme?: ThemeText
    text: string | number | undefined
    align?: 'center' | 'left' | 'right'
}

export const Text: FC<TextProps> = (props) => {
    const {
        className,
        type = 'span',
        theme = ThemeText.PRIMARY,
        text,
        align = 'center',
    } = props

    if (type === 'span') {
        return (
            <span
                className={classNames(styles.Text, {}, [
                    className,
                    styles[theme],
                    styles[align],
                ])}
            >
                {text}
            </span>
        )
    }
    if (type === 'h1') {
        return (
            <h1
                className={classNames(styles.Text, {}, [
                    className,
                    styles[theme],
                    styles[align],
                ])}
            >
                {text}
            </h1>
        )
    }

    return (
        <p
            className={classNames(styles.Text, {}, [
                className,
                styles[theme],
                styles[align],
            ])}
        >
            {text}
        </p>
    )
}
