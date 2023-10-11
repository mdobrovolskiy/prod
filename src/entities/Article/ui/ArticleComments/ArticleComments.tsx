import { useEffect, type FC } from 'react'
import styles from './ArticleComments.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { CommentList } from 'entities/Comment/ui/CommentList/CommentList'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { fetchArticleComments } from 'pages/ArticleDetailsPage/model/services/fetchArticleComments'
import { useSelector } from 'react-redux'
import { getArticleComments } from 'pages/ArticleDetailsPage/model/selectors/getArticleComments'
import { type Comment } from 'entities/Comment/model/types/Comment'

export const ArticleComments = () => {
    const dispatch = useAppDispatch()
    const comments = useSelector(getArticleComments) as Comment[]
    useEffect(() => {
        dispatch(fetchArticleComments())
    }, [])
    console.log(123)

    return (
        <div className={classNames(styles.ArticleComments, {}, [])}>
            <CommentList comments={comments} />
        </div>
    )
}
