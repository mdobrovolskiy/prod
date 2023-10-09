import { type FC } from 'react'
import styles from './ArticleCodeBlockComponent.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { type ArticleCodeBlock } from 'entities/Article/model/types/Article'

export const ArticleCodeBlockComponent = (props: ArticleCodeBlock) => {
    const { code, id, type } = props
    return (
        <div className={classNames(styles.ArticleCodeBlockComponent, {}, [])}>
            <div className={styles.codeWrapper}>
                <pre>
                    <code>{code}</code>
                </pre>
            </div>
        </div>
    )
}
