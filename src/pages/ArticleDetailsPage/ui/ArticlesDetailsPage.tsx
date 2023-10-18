import { type FC, useEffect } from 'react'
import styles from './ArticlesDetailsPage.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useParams } from 'react-router-dom'
import { ReducerLoader } from 'helpers/ReducerLoader/ReducerLoader'
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById'
import { useSelector } from 'react-redux'
import { getArticleLoading } from 'entities/Article/model/selectors/getArticleLoading'
import { getArticleError } from 'entities/Article/model/selectors/getArticleError'
import { Loader } from 'widgets/Loader'
import { getArticleData } from 'entities/Article/model/selectors/getArticleData'
import { ArticleDetails } from 'entities/Article/ui/ArticleDetails/ArticleDetails'
import { Page } from 'shared/Page/Page'
import { useArticleComments } from '../model/api/getArticleById'
interface ArticlesDetailsPageProps {
    className?: string
}
const reducers = {
    articleDetailsReducer,
}

export const ArticlesDetailsPage: FC<ArticlesDetailsPageProps> = (props) => {
    const { className } = props
    const { id } = useParams()
    const { error, data, isLoading } = useArticleComments(`articles/${id}`)

    if (!data) {
        return (
            <ReducerLoader reducers={reducers}>
                <Loader />
            </ReducerLoader>
        )
    }

    if (isLoading) {
        return <Loader />
    }

    if (error) {
        return <h1>Article not found</h1>
    }

    return (
        <ReducerLoader reducers={reducers}>
            <Page>
                <ArticleDetails data={data} />
            </Page>
        </ReducerLoader>
    )
}
