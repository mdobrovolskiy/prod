import { type FC } from 'react'
import styles from './ArticlesPage.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import {
    ArticleCard,
    ArticleCardSize,
} from 'entities/Article/ui/ArticleCard/ArticleCard'
import { ArticleList } from 'entities/Article/ui/ArticleList/ui/ArticleList'
import { ReducerLoader } from 'helpers/ReducerLoader/ReducerLoader'
import { articleListReducer } from 'entities/Article/ui/ArticleList/model/slice/articleListSlice'
interface ArticlesPageProps {
    className?: string
}
const reducers = {
    articleListReducer,
}

export const ArticlesPage: FC<ArticlesPageProps> = (props) => {
    const { className } = props

    return (
        <ReducerLoader reducers={reducers}>
            <div className={classNames(styles.ArticlePage, {}, [])}>
                <ArticleList />
            </div>
        </ReducerLoader>
    )
}
