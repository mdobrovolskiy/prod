import { type FC } from 'react'
import styles from './ArticleImageBlockComponent.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { type ArticleImageBlock } from 'entities/Article/model/types/Article'

export const ArticleImageBlockComponent = (props: ArticleImageBlock) => {
    const { id, src, title, type } = props
    return (
        <div className={classNames(styles.ArticleImageBlockComponent, {}, [])}>
            <h2 style={{ margin: '10px 0', fontWeight: 500 }}>{title}</h2>
            <div>
                <img src={src} alt="" />
            </div>
        </div>
    )
}
