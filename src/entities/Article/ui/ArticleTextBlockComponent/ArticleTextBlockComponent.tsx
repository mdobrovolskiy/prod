import { type FC } from 'react'
import styles from './ArticleTextBlockComponent.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { type ArticleTextBlock } from 'entities/Article/model/types/Article'

export const ArticleTextBlockComponent = (props: ArticleTextBlock) => {
    const { id, paragraphs, title } = props
    return (
        <div className={classNames(styles.ArticleTextBlockComponent, {}, [])}>
            {title && (
                <h2 style={{ margin: '10px 0', fontWeight: 500 }}>{title}</h2>
            )}
            <div className={styles.content}>
                {paragraphs.map((par, i) => (
                    <p key={i}>{par}</p>
                ))}
            </div>
        </div>
    )
}
