import { type FC } from 'react'
import styles from './Skeleton.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
interface SkeletonProps {
    className?: string
}
export const Skeleton: FC<SkeletonProps> = (props) => {
    const { className } = props
    return <div className={classNames(styles.Skeleton, {}, [className])}></div>
}
