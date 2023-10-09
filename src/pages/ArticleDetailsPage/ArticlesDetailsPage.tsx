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
import { Text, ThemeText } from 'widgets/Text/Text'
interface ArticlesDetailsPageProps {
    className?: string
}
const reducers = {
    articleDetailsReducer,
}

export const ArticlesDetailsPage: FC<ArticlesDetailsPageProps> = (props) => {
    const { className } = props
    const { id } = useParams()
    const dispatch = useAppDispatch()
    const isLoading = useSelector(getArticleLoading)
    const error = useSelector(getArticleError)
    const data = useSelector(getArticleData)

    useEffect(() => {
        if (id) {
            dispatch(fetchArticleById(id))
        }
    }, [id])
    console.log(data)

    if (isLoading) {
        return <Loader />
    }

    if (error) {
        return <h1>Article not found</h1>
    }

    return (
        <ReducerLoader reducers={reducers}>
            <div className={classNames(styles.ArticleDetailsPage, {}, [])}>
                <div className={styles.avatarBlock}>
                    <div className={styles.avatarWrapper}>
                        <img src={data?.img} alt="" />
                    </div>
                </div>
                <div className={styles.title}>
                    <Text text={data?.title} type={'h1'} />
                </div>
                <div className={styles.subtitle}>{data?.subtitle}</div>
                <div className={styles.subtitle}>{data?.createdAt}</div>
                <div className={styles.subtitle}>{data?.views}</div>
                <div className={styles.subtitle}>{data?.type}</div>
            </div>
        </ReducerLoader>
    )
}
