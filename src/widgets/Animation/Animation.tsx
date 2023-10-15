import { type FC } from 'react'
import styles from './Animation.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
interface AnimationProps {
    className?: string
}
export const Animation: FC<AnimationProps> = (props) => {
    const { className, children } = props
    return (
        <div className={classNames(styles.main, {}, [className])}>
            {children}
        </div>
    )
}
