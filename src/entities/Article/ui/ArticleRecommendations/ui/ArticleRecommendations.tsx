import { useEffect, type FC } from 'react'
import styles from './ArticleRecommendations.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

import { ReducerLoader } from 'helpers/ReducerLoader/ReducerLoader'
import { articleRecommendationsReducer } from '../model/slice/articleRecommendations'
import {
    getRecommendationsData,
    getRecommendationsIsLoading,
} from 'entities/Article/ui/ArticleRecommendations/model/selectors/getArticleRecSelector'
import { useSelector } from 'react-redux'
import { ArticleCard, ArticleCardSize } from '../../ArticleCard/ArticleCard'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { fetchArticlesRecommendations } from 'entities/Article/ui/ArticleRecommendations/model/services/fetchArticleRecommendations'
import { Loader } from 'widgets/Loader'
import { rtkApi } from 'shared/api/rtkApi'
import { useArticleRecs } from '../model/api/getArticleRecs'
import { type Article } from 'entities/Article/model/types/Article'
interface ArticleRecommendationsProps {
    className?: string
}

const reducers = {
    articleRecommendationsReducer,
}

export const ArticleRecommendations: FC<ArticleRecommendationsProps> = (
    props
) => {
    const { className } = props

    const { isLoading, data, error } = useArticleRecs({
        url: 'articles',
        limit: 4,
    })
    if (isLoading) {
        return <Loader />
    }

    return (
        <ReducerLoader reducers={reducers}>
            <h1 className={styles.title}>Recommendations</h1>
            <div className={styles.main}>
                {data?.map((item: Article) => (
                    <ArticleCard
                        key={item.id}
                        size={ArticleCardSize.SMALL}
                        article={item}
                    />
                ))}
                {isLoading && <Loader />}
            </div>
        </ReducerLoader>
    )
}
