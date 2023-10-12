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
    getArticleListLimit,
    getArticleListInited,
} from 'entities/Article/ui/ArticleList/model/selectors/articleListSelectors'

import { Skeleton } from 'widgets/Skeleton/Skeleton'

interface ArticleListProps {
    className?: string
}
const reducer = {
    articleListReducer,
}

export const ArticleList: FC<ArticleListProps> = (props) => {
    const { className } = props
    const dispatch = useAppDispatch()

    const articles = useSelector(getArticleListData)

    const isSmallCard = useSelector(getArticleListCardSize)

    const _inited = useSelector(getArticleListInited)

    const isLoading = useSelector(getArticleListLoading)

    const limit = useSelector(getArticleListLimit)

    const size = isSmallCard ? ArticleCardSize.SMALL : ArticleCardSize.BIG

    const smallSelected = isSmallCard ? styles.selected : undefined

    const bigSelected = isSmallCard ? undefined : styles.selected

    const skeletonClass = isSmallCard
        ? styles.SkeletonSmall
        : styles.SkeletonBig

    const onSmallSize = () => {
        dispatch(articleListActions.setIsSmallSize(true))
    }
    const onBigSize = () => {
        dispatch(articleListActions.setIsSmallSize(false))
    }

    useEffect(() => {
        if (!_inited) {
            dispatch(articleListActions.initialSizeCheck())

            dispatch(fetchArticles())
        }
    }, [])

    return (
        <ReducerLoader reducers={reducer}>
            <div className={styles.view}>
                <Button onClick={onSmallSize} className={smallSelected}>
                    <img
                        width="30"
                        height="30"
                        src="https://img.icons8.com/ios-filled/50/07dac4/health-data.png"
                        alt="activity-grid--v1"
                    />
                </Button>
                <Button className={bigSelected} onClick={onBigSize}>
                    <img
                        width="26"
                        height="26"
                        src="https://cdn-icons-png.flaticon.com/128/6364/6364402.png"
                        alt="rows"
                    />
                </Button>
            </div>
            <div className={classNames(styles.ArticleList, {}, [])}>
                {articles?.map((article) => (
                    <ArticleCard
                        article={article}
                        key={article.id}
                        size={size}
                    />
                ))}
                {isLoading &&
                    Array.from({ length: limit || 10 }, (_, index) => (
                        <Skeleton key={index} className={skeletonClass} />
                    ))}
            </div>
        </ReducerLoader>
    )
}
