import React, { type RefObject, type InputHTMLAttributes, memo, useRef, useState, useEffect } from 'react'
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
  isFocused?: boolean
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        type = 'text',
        theme = InputTheme.CLEAR,
        isFocused,
        ...otherProps
    } = props
    const inputRef = useRef(null)
    useEffect(() => {
        if (isFocused) {
            inputRef.current.focus()
        }
    }, [isFocused])
    return (
        <input
            ref={inputRef}
            {...otherProps}
            type={type}
            className={classNames(styles.Input, {}, [className, styles[theme]])}
        />
    )
})
