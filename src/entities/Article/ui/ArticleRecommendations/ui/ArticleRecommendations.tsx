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
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchArticlesRecommendations())
    }, [dispatch])
    const recommendationsArticles = useSelector(getRecommendationsData)
    const isLoading = useSelector(getRecommendationsIsLoading)

    return (
        <ReducerLoader reducers={reducers}>
            <h1 className={styles.title}>Recommendations</h1>
            <div className={styles.main}>
                {recommendationsArticles?.map((item) => (
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
