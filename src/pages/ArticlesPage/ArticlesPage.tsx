import { useEffect, type FC } from 'react'
import styles from './ArticlesPage.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { $api } from 'shared/api/api'
import axios from 'axios'
interface ArticlesPageProps {
    className?: string
}
export const ArticlesPage: FC<ArticlesPageProps> = (props) => {
    const { className } = props

    return (
        <div className={classNames(styles.ArticlePage, {}, [])}>
            ArticlePage
        </div>
    )
}
