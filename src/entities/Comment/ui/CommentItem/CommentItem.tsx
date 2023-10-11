import { type FC } from 'react'
import styles from './CommentItem.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { type User } from 'entities/Profile/model/types/profile'
import { Avatar } from 'widgets/Avatar/Avatar'
import { Text } from 'widgets/Text/Text'
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink'
interface CommentItemProps {
    className?: string
    text: string
    user?: User
}
export const CommentItem: FC<CommentItemProps> = (props) => {
    const { className, text, user } = props
    return (
        <div className={classNames(styles.CommentItem, {}, [])}>
            <div className={styles.item}>
                {user?.avatar && (
                    <AppLink to={`/${user?.username || ''}`}>
                        <Avatar alt="" src={user.avatar} />
                    </AppLink>
                )}{' '}
                <div className={styles.itemContent}>
                    <div>
                        <AppLink
                            className={styles.link}
                            to={`/${user?.username || ''}`}
                        >
                            <Text
                                type="span"
                                text={user?.username}
                                className={styles.userName}
                            />
                        </AppLink>
                    </div>
                    <div>
                        <Text
                            type="span"
                            text={text}
                            className={styles.comment}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
