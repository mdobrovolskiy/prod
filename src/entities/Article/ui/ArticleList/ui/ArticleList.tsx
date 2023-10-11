/* eslint-disable quotes */
import { useState, type FC, useEffect } from 'react'
import styles from './ArticleList.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { ArticleCard, ArticleCardSize } from '../../ArticleCard/ArticleCard'
import { Button } from 'widgets/Button'
import { ReducerLoader } from 'helpers/ReducerLoader/ReducerLoader'
import {
    articleListActions,
    articleListReducer,
} from '../model/slice/articleListSlice'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { fetchArticles } from 'entities/Article/ui/ArticleList/model/services/fetchArticles'
import {
    getArticleListLoading,
    getArticleListData,
    getArticleListCardSize,
} from 'entities/Article/ui/ArticleList/model/selectors/articleListSelectors'
import { Loader } from 'widgets/Loader'

interface ArticleListProps {
    className?: string
}
const reducer = {
    articleListReducer,
}

export const ArticleList: FC<ArticleListProps> = (props) => {
    const { className } = props
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchArticles())
    }, [])
    const articles = useSelector(getArticleListData)

    const isSmallCard = useSelector(getArticleListCardSize)

    const isLoading = useSelector(getArticleListLoading)

    const size = isSmallCard ? ArticleCardSize.SMALL : ArticleCardSize.BIG

    const onSmallSize = () => {
        dispatch(articleListActions.setIsSmallSize(true))
    }
    const onBigSize = () => {
        dispatch(articleListActions.setIsSmallSize(false))
    }

    useEffect(() => {
        dispatch(articleListActions.initialSizeCheck())
    }, [])

    if (isLoading) {
        return <Loader />
    }

    return (
        <ReducerLoader reducers={reducer}>
            <div className={styles.view}>
                <Button onClick={onSmallSize}>SMALL</Button>
                <Button onClick={onBigSize}>BIG</Button>
            </div>
            <div className={classNames(styles.ArticleList, {}, [])}>
                {articles?.map((article) => (
                    <ArticleCard
                        article={article}
                        key={article.id}
                        size={size}
                    />
                ))}
            </div>
        </ReducerLoader>
    )
}
