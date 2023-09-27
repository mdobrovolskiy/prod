import { type InputHTMLAttributes, memo, forwardRef } from 'react'
import styles from './Input.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

export enum InputTheme {
    CLEAR = 'clear',
    MAIN = 'main',
    LOGIN = 'login',
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string
    theme?: InputTheme
}

type Ref = HTMLInputElement

const InputWithRef = forwardRef<Ref, InputProps>((props, ref) => {
    const {
        className,
        type = 'text',
        theme = InputTheme.CLEAR,
        ...otherProps
    } = props

    return (
        <input
            ref={ref}
            {...otherProps}
            type={type}
            className={classNames(styles.Input, {}, [className, styles[theme]])}
        />
    )
})
export const Input = memo(InputWithRef)
