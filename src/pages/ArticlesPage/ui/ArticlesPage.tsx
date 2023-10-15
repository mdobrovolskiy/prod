import { useCallback, type FC, useEffect } from 'react'
import styles from './ArticlesPage.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

import { ArticleList } from 'entities/Article/ui/ArticleList/ui/ArticleList'
import { articleListActions } from 'entities/Article/ui/ArticleList/model/slice/articleListSlice'
import { Page } from 'shared/Page/Page'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import {
    getArticleListLoading,
    getArticleListHasMore,
    getArticleListInited,
} from 'entities/Article/ui/ArticleList/model/selectors/articleListSelectors'
import { useSelector } from 'react-redux'
import { fetchArticles } from 'entities/Article/ui/ArticleList/model/services/fetchArticles'
import { ArticleFilters } from 'entities/Article/ui/ArticleFilters/ArticleFilters'
interface ArticlesPageProps {
    className?: string
}

export const ArticlesPage: FC<ArticlesPageProps> = (props) => {
    const { className } = props
    const isLoading = useSelector(getArticleListLoading)
    const hasMore = useSelector(getArticleListHasMore)

    const dispatch = useAppDispatch()
    const onScrollEnd = useCallback(() => {
        if (!isLoading && hasMore) {
            dispatch(articleListActions.setPage())
            dispatch(fetchArticles())
        }
    }, [isLoading, hasMore, dispatch])

    return (
        <Page
            onScrollEnd={onScrollEnd}
            className={classNames(styles.ArticlePage, {}, [])}
        >
            <ArticleList />
        </Page>
    )
}
