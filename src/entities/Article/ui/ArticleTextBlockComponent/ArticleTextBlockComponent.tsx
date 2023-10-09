import { type FC } from 'react'
import styles from './ArticleTextBlockComponent.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
interface ArticleTextBlockComponentProps {
    className?: string
}
export const ArticleTextBlockComponent: FC<ArticleTextBlockComponentProps> = (
    props
) => {
    const { className } = props
    return (
        <div className={classNames(styles.ArticleTextBlockComponent, {}, [])}>
            ArticleTextBlockComponent
        </div>
    )
}
