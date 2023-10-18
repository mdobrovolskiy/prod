import styles from './ArticleComments.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { CommentList } from 'entities/Comment/ui/CommentList/CommentList'
import { useArticleComments } from '../model/api/getArticleCommentsApi'
import { useParams } from 'react-router-dom'

export const ArticleComments = () => {
    const { id } = useParams()

    const {
        isLoading,
        data: comments,
        error,
    } = useArticleComments({ url: 'comments', articleId: id || '', limit: 4 })

    return (
        <div className={classNames(styles.ArticleComments, {}, [])}>
            <CommentList comments={comments} />
        </div>
    )
}
