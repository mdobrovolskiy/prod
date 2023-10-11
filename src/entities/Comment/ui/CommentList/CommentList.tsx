import { type FC } from 'react'
import styles from './CommentList.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { type Comment } from 'entities/Comment/model/types/Comment'
import { Text, ThemeText } from 'widgets/Text/Text'
import { CommentItem } from 'entities/Comment/ui/CommentItem/CommentItem'

interface CommentListProps {
    className?: string
    comments?: Comment[]
}
export const CommentList: FC<CommentListProps> = (props) => {
    const { className, comments } = props
    return (
        <div className={classNames(styles.CommentList, {}, [])}>
            {comments?.length ? (
                comments?.map((item) => (
                    <CommentItem
                        key={item.id}
                        text={item.text}
                        user={item.user}
                    />
                ))
            ) : (
                <Text
                    type="p"
                    align="left"
                    text={'This article has no comments'}
                />
            )}
        </div>
    )
}
