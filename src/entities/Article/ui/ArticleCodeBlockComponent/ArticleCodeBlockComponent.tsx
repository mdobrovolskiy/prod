import { type FC } from 'react'
import styles from './ArticleCodeBlockComponent.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
interface ArticleCodeBlockComponentProps {
    className?: string
}
export const ArticleCodeBlockComponent: FC<ArticleCodeBlockComponentProps> = (
    props
) => {
    const { className } = props
    return (
        <div className={classNames(styles.ArticleCodeBlockComponent, {}, [])}>
            ArticleCodeBlockComponent
        </div>
    )
}
