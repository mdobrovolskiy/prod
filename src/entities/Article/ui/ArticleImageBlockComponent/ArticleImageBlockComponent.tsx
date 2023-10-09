import { type FC } from 'react'
import styles from './ArticleImageBlockComponent.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
interface ArticleImageBlockComponentProps {
    className?: string
}
export const ArticleImageBlockComponent: FC<ArticleImageBlockComponentProps> = (
    props
) => {
    const { className } = props
    return (
        <div className={classNames(styles.ArticleImageBlockComponent, {}, [])}>
            ArticleImageBlockComponent
        </div>
    )
}
