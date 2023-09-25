import React, { type RefObject, type InputHTMLAttributes, memo } from 'react'
import styles from './Input.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

export enum InputTheme {
    CLEAR = 'clear',
    MAIN = 'main',
    LOGIN = 'login'
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  ref?: RefObject<HTMLInputElement>
  theme?: InputTheme
}

export const Input = memo((props: InputProps) => {
    const { className, type = 'text', theme = InputTheme.CLEAR, ...otherProps } = props
    return (
        <input {...otherProps}
            type={type}
            className={classNames(styles.Input, {}, [className, styles[theme]])}
        />
    )
})
