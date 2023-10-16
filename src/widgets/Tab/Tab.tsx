import { type FC } from 'react'
import styles from './Tab.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'widgets/Button'
export interface TabProps {
    className?: string
    disabled?: boolean
    onClick: (...args: any) => void
    content: string
}
export const Tab: FC<TabProps> = (props) => {
    const { className, children, onClick, content, disabled } = props
    return (
        <Button
            disabled={disabled}
            onClick={() => {
                if (!disabled) {
                    onClick(content)
                }
            }}
            className={classNames(styles.Tab, {}, [className])}
        >
            {content}
        </Button>
    )
}
